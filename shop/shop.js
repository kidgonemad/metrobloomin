// Metro Bloomin shop overlay. Products link to the live Shopify store for checkout.
(function () {
  var STORE = 'https://metrobloomin.com';
  var base = new URL('shop/', document.baseURI).href;
  var collections = [
    { id: 'classic', title: 'Classic', handle: 'classic', products: [
      { name: 'Metro Bloomin Lighter', price: 8, handle: 'metro-bloomin-lighter', img: 'lighter' },
      { name: 'Metro Bloomin Chrome Hat', price: 35, handle: 'metro-bloomin-chrome-hat', img: 'hat' },
      { name: 'Metro Bloomin Rug', price: 250, handle: 'metro-bloomin-leaf-rug', img: 'rug' },
      { name: 'Metro Bloomin Keychain', price: 15, handle: 'metro-bloomin-leaf-keychain', img: 'keychain' }
    ]},
    { id: 'qrome', title: 'QRÖME', handle: 'qrome', products: [
      { name: 'QRÖME Hoodie', price: 100, handle: 'qrome-hoodie', img: 'hoodie' },
      { name: 'QRÖME Tank', price: 35, handle: 'qrome-tank', img: 'tank' }
    ]}
  ];

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function card(p) {
    return '<li class="mb-card"><a href="' + STORE + '/products/' + p.handle + '" target="_blank" rel="noopener">' +
      '<div class="mb-card__media"><img src="' + base + 'img/cut/' + p.img + '-1.webp" alt="' + esc(p.name) + '" loading="lazy" width="640" height="640">' +
      '<img src="' + base + 'img/cut/' + p.img + '-2.webp" alt="" aria-hidden="true" loading="lazy" width="640" height="640"><svg class="mb-card__blob" viewBox="0 0 100 100" aria-hidden="true"><path/></svg></div>' +
            '</a></li>';
  }

  var el = document.createElement('section');
  el.id = 'shopView';
  el.className = 'mb-shop';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-modal', 'true');
  el.setAttribute('aria-label', 'Metro Bloomin shop');
  el.innerHTML =
    '<div class="mb-hero"></div>' +
    collections.map(function (c) {
      return '<section class="mb-collection" id="mb-' + c.id + '" aria-label="' + esc(c.title) + '">' +
        '<ul class="mb-grid">' + c.products.map(card).join('') + '</ul></section>';
    }).join('');
  document.body.appendChild(el);
  // the blobs behind the products: a lumpy round shape (8 points, each its own slow wobble) that breathes,
  // like the video blobs on the videos page. Runs only while the shop is open.
  (function () {
    var paths = [].slice.call(el.querySelectorAll('.mb-card__blob path')), N = 8;
    var seeds = paths.map(function (_, k) { return [k * 1.93 + .4, k * 2.71 + 1.1, (k % 3) * 1.3]; });
    function shape(path, sd, t) {
      var pts = [];
      for (var i = 0; i < N; i++) { var a = i / N * 6.2832;
        var r = 46 * (1 + .06 * Math.cos(2 * a + sd[0]) + .04 * Math.cos(3 * a + sd[1])          // its own lumpy shape
          + .03 * Math.sin(t * 2.4 + sd[2] + i * 1.7) + .02 * Math.sin(t * 4 + sd[0] + i * 2.9))  // slow wobble
          * (1 + .04 * Math.sin(t * 4.4 + sd[1]));                                                // breathing
        pts.push([50 + Math.cos(a) * r, 50 + Math.sin(a) * r]); }
      var d = 'M' + pts[0][0].toFixed(1) + ' ' + pts[0][1].toFixed(1);
      for (i = 0; i < N; i++) { var p0 = pts[(i + N - 1) % N], p1 = pts[i], p2 = pts[(i + 1) % N], p3 = pts[(i + 2) % N];   // smooth curve through the points
        d += 'C' + (p1[0] + (p2[0] - p0[0]) / 6).toFixed(1) + ' ' + (p1[1] + (p2[1] - p0[1]) / 6).toFixed(1) + ' ' +
          (p2[0] - (p3[0] - p1[0]) / 6).toFixed(1) + ' ' + (p2[1] - (p3[1] - p1[1]) / 6).toFixed(1) + ' ' + p2[0].toFixed(1) + ' ' + p2[1].toFixed(1); }
      path.setAttribute('d', d + 'Z');
    }
    var still = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches, on = false;
    paths.forEach(function (p, k) { shape(p, seeds[k], 0); });
    function tick(ms) { if (!on) return; var t = ms / 1000; paths.forEach(function (p, k) { shape(p, seeds[k], t); }); requestAnimationFrame(tick); }
    function sync() { var open = el.classList.contains('is-open') && !document.hidden && !still; if (open && !on) { on = true; requestAnimationFrame(tick); } if (!open) on = false; }
    new MutationObserver(sync).observe(el, { attributes: true, attributeFilter: ['class'] }); document.addEventListener('visibilitychange', sync);
  })();

  // ---- one controller for the three views: about (the 3D page), shop, videos ----
  var nav = null, view = 'about';
  function setShop(on) {
    el.classList.toggle('is-open', on);
    document.body.classList.toggle('mb-shop-open', on);
    if (on) el.scrollTop = 0;
  }
  function show(next) {
    if (next === view) return;
    view = next;
    document.body.classList.remove('mb-scrolling');
    setShop(next === 'shop');
    if (window.__mbVideos) { if (next === 'videos') window.__mbVideos.open(); else window.__mbVideos.close(); }
    document.body.setAttribute('data-view', next);
    if (nav) { nav.setCurrent(next); nav.setTone(next === 'videos' ? 'auto' : 'dark'); }
    var h = next === 'about' ? '' : '#' + next;
    if (location.hash !== h) history.replaceState(null, '', h || location.pathname + location.search);
  }
  window.MBView = { show: show, get: function () { return view; } };

  // Keep wheel/touch/keys inside the shop from driving the 3D page behind it.
  ['wheel', 'touchstart', 'touchmove', 'pointerdown', 'pointermove', 'mousedown', 'mousemove'].forEach(function (t) {
    el.addEventListener(t, function (e) { e.stopPropagation(); }, { passive: true });
  });
  window.addEventListener('keydown', function (e) {
    if (view === 'about') return;
    if (e.key === 'Escape') show('about');
    e.stopImmediatePropagation();
  }, true);

  function wire() {
    nav = window.MBNav.create({
      items: [
        { label: 'shop', onClick: function () { show('shop'); } },
        { label: 'videos', onClick: function () { show('videos'); } },
        { label: 'about', onClick: function () { show('about'); } }
      ],
      current: 'about', tone: 'dark',
      onToggle: function (o) { document.body.classList.toggle('mb-menu-open', o); }
    });
    nav.classList.add('mbn--site');
    document.body.appendChild(nav);
    var logoEl = document.getElementById('logo');
    // header leaf + METRO BLOOMIN lettering: colour videos with the background removed, stored as "stacked alpha"
    // MP4s in shop/bg/ (colour on top, alpha mask below) and drawn into canvases, so they are transparent on every
    // browser, iPhone included. Each plays once; a still of its last frame is the fallback.
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    var CLIP_V = '4';   // bump when a video in shop/bg/ changes, so phones fetch the new one
    var clips = [];      // every header clip's video (see unlockAll)
    function alphaClip(box, name, w, h, stillName) {
      var cv = document.createElement('canvas'); cv.width = w; cv.height = h; cv.setAttribute('aria-hidden', 'true'); box.appendChild(cv);
      var out = cv.getContext('2d'), tmp = document.createElement('canvas'); tmp.width = w; tmp.height = h * 2;
      var tx = tmp.getContext('2d', { willReadFrequently: true });
      var paint = function (src) {
        tx.clearRect(0, 0, w, h * 2); tx.drawImage(src, 0, 0, w, h * 2);
        var c = tx.getImageData(0, 0, w, h), m = tx.getImageData(0, h, w, h).data, d = c.data;
        for (var k = 3; k < d.length; k += 4) d[k] = m[k - 3];
        out.putImageData(c, 0, 0);
      };
      var still = new Image(); still.src = base + 'bg/' + (stillName || name) + '.webp?v=' + CLIP_V;
      // the video sits in the page, invisible: iPhone Safari only decodes frames for videos that are in the document
      var v = document.createElement('video');
      v.muted = true; v.defaultMuted = true; v.playsInline = true; v.setAttribute('muted', ''); v.setAttribute('playsinline', '');
      v.setAttribute('aria-hidden', 'true'); v.preload = 'auto';
      v.style.cssText = 'position:fixed;left:0;top:0;width:2px;height:2px;opacity:0;pointer-events:none;z-index:-1';
      v.src = base + 'bg/' + name + '.mp4?v=' + CLIP_V; document.body.appendChild(v); v.load();
      clips.push(v);
      // plays once; onTime(seconds) runs every frame, done() when it ends. If the phone blocks autoplay (Low Power
      // Mode), it waits for the first tap or scroll and plays then; the still is only the last resort.
      return { video: v, play: function (onTime, done) {
        var over = false, fin = function () { if (!over) { over = true; done(); } };
        var showStill = function () { if (over) return; if (still.complete) paint(still); else still.onload = function () { paint(still); }; onTime(99); setTimeout(fin, 2500); };
        if (reduce) { showStill(); return; }
        var loop = function () { if (over) return; if (v.readyState >= 2) { paint(v); onTime(v.currentTime); }
          if (v.ended) { fin(); return; } requestAnimationFrame(loop); };
        var waiting = false, safety = null, EV = ['touchstart', 'pointerdown', 'scroll', 'keydown'];
        var blocked = function () {
          if (over || waiting) return; waiting = true;
          var off = function () { EV.forEach(function (e) { window.removeEventListener(e, go, true); }); clearTimeout(safety); };
          var go = function () { off(); waiting = false; unlockAll();
            var p2 = v.play(); if (p2 && p2.catch) p2.catch(showStill); };
          EV.forEach(function (e) { window.addEventListener(e, go, { capture: true, passive: true }); });
          safety = setTimeout(function () { off(); showStill(); }, 6000);
        };
        v.__started = true; v.currentTime = 0;
        var pr = v.play(); if (pr && pr.catch) pr.catch(blocked);
        requestAnimationFrame(loop);
      } };
    }
    // on the first tap after a blocked autoplay, unlock every header clip (so the lettering can play later without another tap)
    function unlockAll() { clips.forEach(function (c) { if (c.__started || !c.paused) return;
      var p = c.play(); if (p && p.then) p.then(function () { if (!c.__started) { c.pause(); c.currentTime = 0; } }).catch(function () {}); }); }
    var wordEl = logoEl && logoEl.querySelector('.mb-word'), leafEl = logoEl && logoEl.querySelector('.mb-leaf');
    if (wordEl && leafEl) {
      wordEl.setAttribute('aria-label', (wordEl.textContent || 'Metro Bloomin').trim()); wordEl.textContent = ''; leafEl.textContent = '';
      var wordClip = alphaClip(wordEl, 'word-sm-rev', 480, 260, 'word-sm'), leafClip = alphaClip(leafEl, 'leaf', 384, 384);
      window.__mbWordVideo = wordClip.video; window.__mbLeafVideo = leafClip.video;   // read by the site tests
      var word = function (on) { logoEl.classList.toggle('mb-word-show', on); };
      // the lettering appears as the leaf pops in (~0.9s), plays its reveal, holds 1.5s, then plays it backwards to vanish
      var wordStarted = false;
      var startWord = function () { if (wordStarted) return; wordStarted = true; word(true);
        wordClip.play(function () {}, function () { word(false); }); };
      var play = function () { leafClip.play(function (t) { if (t >= .9) startWord(); }, startWord); };
      // the falling-buds loading screen (loader.js) covers the header: start once it lifts
      if (window.__mbLoading) document.addEventListener('mb:loaded-in', play, { once: true }); else play();
    } else if (logoEl) logoEl.classList.add('mb-word-show');
    if (logoEl) logoEl.addEventListener('click', function () { show('about'); });
    // about page: while you scroll, the header (leaf, lettering, menu) steps aside so the 3D scroll is clear;
    // 350ms after you stop it pops back out (shop.css body.mb-scrolling)
    var scrollStop = null;
    var scrolling = function () {
      if (view !== 'about' || document.body.classList.contains('mb-menu-open')) return;
      document.body.classList.add('mb-scrolling'); clearTimeout(scrollStop);
      scrollStop = setTimeout(function () { document.body.classList.remove('mb-scrolling'); }, 350);
    };
    ['wheel', 'touchmove', 'scroll'].forEach(function (e) { window.addEventListener(e, scrolling, { passive: true, capture: true }); });
    document.body.setAttribute('data-view', 'about');
    // the site opens on the shop, unless a link asks for videos or about
    var h = location.hash;
    if (h === '#videos') show('videos'); else if (h === '#about') show('about'); else show('shop');
  }
  // wait for DOMContentLoaded so videos.js (loaded after this file) is ready
  if (document.readyState === 'complete') wire(); else document.addEventListener('DOMContentLoaded', wire);
})();
