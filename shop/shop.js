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
      '<img src="' + base + 'img/cut/' + p.img + '-2.webp" alt="" aria-hidden="true" loading="lazy" width="640" height="640"></div>' +
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
      return '<section class="mb-collection" id="mb-' + c.id + '"><div class="mb-collection__head"><h3>' + esc(c.title) + '</h3>' +
        '</div>' +
        '<ul class="mb-grid">' + c.products.map(card).join('') + '</ul></section>';
    }).join('');
  document.body.appendChild(el);
  if (window.MBShopBg) window.MBShopBg.mount(el);   // animated scene behind the products (shopbg.js)

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
    // the METRO BLOOMIN wordmark is the animated green lettering (shop/bg/word-sm.mp4, a "stacked alpha" video:
    // colour on top, alpha mask below), drawn into a canvas so it is transparent on every browser, iPhone included
    var wordEl = logoEl && logoEl.querySelector('.mb-word');
    var wordPlay = function (done) { setTimeout(done, 4000); };
    if (wordEl) {
      wordEl.setAttribute('aria-label', (wordEl.textContent || 'Metro Bloomin').trim());
      wordEl.textContent = '';
      var wc = document.createElement('canvas'); wc.width = 480; wc.height = 260; wc.setAttribute('aria-hidden', 'true'); wordEl.appendChild(wc);
      var wx = wc.getContext('2d'), wt = document.createElement('canvas'); wt.width = 480; wt.height = 520;
      var tx = wt.getContext('2d', { willReadFrequently: true });
      var paint = function (src) {
        tx.clearRect(0, 0, 480, 520); tx.drawImage(src, 0, 0, 480, 520);
        var c = tx.getImageData(0, 0, 480, 260), m = tx.getImageData(0, 260, 480, 260).data, d = c.data;
        for (var k = 3; k < d.length; k += 4) d[k] = m[k - 3];
        wx.putImageData(c, 0, 0);
      };
      var wStill = new Image(), wv = document.createElement('video');
      wStill.src = base + 'bg/word-sm.webp';
      wv.muted = true; wv.defaultMuted = true; wv.playsInline = true; wv.setAttribute('muted', ''); wv.setAttribute('playsinline', '');
      wv.preload = 'auto'; wv.src = base + 'bg/word-sm.mp4';
      window.__mbWordVideo = wv;                                   // read by the site tests
      var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
      // plays the reveal once (sparkles -> full lettering), holds it 1.5s, then calls done
      wordPlay = function (done) {
        var over = false, fin = function () { if (over) return; over = true; setTimeout(done, 1500); };
        var fallback = function () { if (wStill.complete) paint(wStill); else wStill.onload = function () { paint(wStill); }; setTimeout(fin, 3000); };
        if (reduce) { fallback(); return; }
        wv.currentTime = 0;
        var pr = wv.play(); if (pr && pr.catch) pr.catch(function () { if (!over) fallback(); });
        (function loop() { if (wv.readyState >= 2) paint(wv); if (wv.ended) fin(); else if (!over) requestAnimationFrame(loop); })();
      };
    }
    // animated leaf logo: traced frames from shop/leaf-frames.js, played once, then holds the wink
    var leaf = logoEl && logoEl.querySelector('.mb-leaf'), F = window.MB_LEAF_FRAMES;
    if (leaf && F && F.length) {
      leaf.innerHTML = '<svg viewBox="1 0 385 385" aria-hidden="true"><path fill-rule="evenodd"></path></svg>';
      var path = leaf.querySelector('path'), i = 0, last = 0;
      var still = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
      // the METRO BLOOMIN lettering is tied to the leaf: it appears as the leaf pops in (frame 8), plays its reveal,
      // holds, then tucks back into the leaf
      var word = function (on) { logoEl.classList.toggle('mb-word-show', on); };
      var showWord = function () { word(true); wordPlay(function () { word(false); }); };
      var play = function () {
        if (still) { path.setAttribute('d', F[F.length - 1]); showWord(); }
        // frame follows the clock (12 fps), so it always ends at ~5s even on a busy phone
        else requestAnimationFrame(function tick(t) { if (!last) last = t; var n = Math.min(F.length - 1, Math.floor((t - last) * 12 / 1000));
          if (n !== i - 1) { path.setAttribute('d', F[n]); i = n + 1; if (n === 8) showWord(); }
          if (n < F.length - 1) requestAnimationFrame(tick); });
      };
      // the falling-buds loading screen (loader.js) covers the header: start the leaf once it lifts
      if (window.__mbLoading) document.addEventListener('mb:loaded-in', play, { once: true }); else play();
    } else if (logoEl) logoEl.classList.add('mb-word-show');
    if (logoEl) logoEl.addEventListener('click', function () { show('about'); });
    document.body.setAttribute('data-view', 'about');
    // the site opens on the shop, unless a link asks for videos or about
    var h = location.hash;
    if (h === '#videos') show('videos'); else if (h === '#about') show('about'); else show('shop');
  }
  // wait for DOMContentLoaded so videos.js (loaded after this file) is ready
  if (document.readyState === 'complete') wire(); else document.addEventListener('DOMContentLoaded', wire);
})();
