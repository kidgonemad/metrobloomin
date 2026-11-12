// Metro Bloomin shop overlay. Products link to the live Shopify store for checkout.
(function () {
  // the shop itself is shop2/ (grid, product pages, goo band), loaded into the shop view; ?embed=1 makes it
  // leave room for the site's header (leaf + lettering, menu) instead of drawing its own
  var base = new URL('shop/', document.baseURI).href;
  var SHOP_SRC = new URL('shop2/?embed=1&v=18', document.baseURI).href;

  var el = document.createElement('section');
  el.id = 'shopView';
  el.className = 'mb-shop';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-modal', 'true');
  el.setAttribute('aria-label', 'Metro Bloomin shop');
  el.innerHTML = '<iframe class="mb-shop__frame" title="Metro Bloomin shop" src="' + SHOP_SRC + '"></iframe>';
  document.body.appendChild(el);
  // tell the shop page its view just opened: its goo band splashes in (shop2/goo.js)
  var frame = el.querySelector('iframe');
  function splash() { try { frame.contentWindow.postMessage('mb-shop-open', '*'); } catch (e) {} }
  window.MBShopSplash = splash;

  // ---- one controller for the three views: about (the 3D page), shop, music ----
  var nav = null, view = 'about';
  function setShop(on) {
    el.classList.toggle('is-open', on);
    document.body.classList.toggle('mb-shop-open', on);
    if (on) el.scrollTop = 0;
  }
  function show(next) {
    if (next === view) return;
    view = next;
    if (next === 'about' && window.MBLoad3D) window.MBLoad3D();   // the 3D page loads the first time about opens
    document.body.classList.remove('mb-scrolling');
    setShop(next === 'shop');
    if (next === 'shop' && !window.__mbLoading) splash();
    if (window.__mbVideos) { if (next === 'videos') window.__mbVideos.open(); else window.__mbVideos.close(); }
    document.body.setAttribute('data-view', next);
    if (nav) nav.setCurrent(next);   // the menu is inverted (tone auto) on every view
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
        { label: 'collabs', href: 'jar/' },
        { label: 'about', onClick: function () { show('about'); } }
      ],
      current: 'about', tone: 'auto',
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
      // the video is NOT added to the page: Safari pauses videos on the page that it thinks are invisible
      var v = document.createElement('video');
      v.muted = true; v.defaultMuted = true; v.playsInline = true; v.setAttribute('muted', ''); v.setAttribute('playsinline', '');
      v.preload = 'auto'; v.src = base + 'bg/' + name + '.mp4?v=' + CLIP_V; v.load();
      clips.push(v);
      // plays once; onTime(seconds) runs every frame, done() when it ends. If the phone blocks autoplay (Low Power
      // Mode), it waits for the first tap and plays then; the still is only the last resort.
      return { video: v, play: function (onTime, done) {
        var over = false, fin = function () { if (!over) { over = true; done(); } };
        var showStill = function () { if (over) return; if (still.complete) paint(still); else still.onload = function () { paint(still); }; onTime(99); setTimeout(fin, 2500); };
        if (reduce) { showStill(); return; }
        var loop = function () { if (over) return; if (v.readyState >= 2) { paint(v); onTime(v.currentTime); }
          if (v.ended) { fin(); return; } requestAnimationFrame(loop); };
        var waiting = false, safety = null, EV = ['touchend', 'click', 'keydown'];   // iPhone only lets video start on these (the end of a tap), not on touchstart or scroll
        var blocked = function () {
          if (over || waiting) return; waiting = true;
          var off = function () { EV.forEach(function (e) { window.removeEventListener(e, go, true); }); clearTimeout(safety); };
          var go = function () { off(); waiting = false; unlockAll();
            var p2 = v.play(); if (p2 && p2.catch) p2.catch(showStill); };
          EV.forEach(function (e) { window.addEventListener(e, go, { capture: true, passive: true }); });
          safety = setTimeout(function () { off(); showStill(); }, 20000);   // still picture only if nobody taps for 20s
        };
        v.__started = true; v.currentTime = 0;
        var pr = v.play(); if (pr && pr.catch) pr.catch(blocked);
        requestAnimationFrame(loop);
      } };
    }
    // on the first tap after a blocked autoplay, unlock every header clip
    function unlockAll() { clips.forEach(function (c) { if (c.__started || !c.paused) return;
      var p = c.play(); if (p && p.then) p.then(function () { if (!c.__started) { c.pause(); c.currentTime = 0; } }).catch(function () {}); }); }
    // header: the leaf only (the METRO BLOOMIN lettering is the music TV's intro now)
    var leafEl = logoEl && logoEl.querySelector('.mb-leaf');
    if (leafEl) {
      leafEl.textContent = '';
      var leafClip = alphaClip(leafEl, 'leaf', 384, 384);
      window.__mbLeafVideo = leafClip.video;   // read by the site tests
      var play = function () { leafClip.play(function () {}, function () {}); };
      // the falling-buds loading screen (loader.js) covers the header: start once it lifts
      if (window.__mbLoading) document.addEventListener('mb:loaded-in', play, { once: true }); else play();
    }
    if (logoEl) logoEl.addEventListener('click', function () { show('about'); });
    // about page: while you scroll, the header (leaf, menu) steps aside so the 3D scroll is clear;
    // 350ms after you stop it pops back out (shop.css body.mb-scrolling)
    var scrollStop = null;
    var scrolling = function () {
      if (view !== 'about' || document.body.classList.contains('mb-menu-open')) return;
      document.body.classList.add('mb-scrolling'); clearTimeout(scrollStop);
      scrollStop = setTimeout(function () { document.body.classList.remove('mb-scrolling'); }, 350);
    };
    ['wheel', 'touchmove', 'scroll'].forEach(function (e) { window.addEventListener(e, scrolling, { passive: true, capture: true }); });
    document.body.setAttribute('data-view', 'about');
    // the site opens on the shop, unless a link asks for music (#videos = old links) or about
    var h = location.hash;
    if (h === '#videos' || h === '#music') show('videos');   // #music: old links
    else if (h === '#about') show('about'); else show('shop');
  }
  // wait for DOMContentLoaded so videos.js (loaded after this file) is ready
  if (document.readyState === 'complete') wire(); else document.addEventListener('DOMContentLoaded', wire);
})();
