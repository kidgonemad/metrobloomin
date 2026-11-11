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
  function money(n) { return '$' + n.toFixed(2); }

  function card(p) {
    return '<li class="mb-card"><a href="' + STORE + '/products/' + p.handle + '" target="_blank" rel="noopener">' +
      '<div class="mb-card__media"><img src="' + base + 'img/' + p.img + '-1.webp" alt="' + esc(p.name) + '" loading="lazy" width="640" height="640">' +
      '<img src="' + base + 'img/' + p.img + '-2.webp" alt="" aria-hidden="true" loading="lazy" width="640" height="640"></div>' +
      '<div class="mb-card__info"><span class="mb-card__name">' + esc(p.name) + '</span><span class="mb-card__price">' + money(p.price) + '</span></div>' +
      '</a></li>';
  }

  var el = document.createElement('section');
  el.id = 'shopView';
  el.className = 'mb-shop';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-modal', 'true');
  el.setAttribute('aria-label', 'Metro Bloomin shop');
  el.innerHTML =
    '<div class="mb-hero"><h2>Shop</h2></div>' +
    collections.map(function (c) {
      return '<section class="mb-collection" id="mb-' + c.id + '"><div class="mb-collection__head"><h3>' + esc(c.title) + '</h3>' +
        '</div>' +
        '<ul class="mb-grid">' + c.products.map(card).join('') + '</ul></section>';
    }).join('');
  document.body.appendChild(el);

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
    if (nav) { nav.setCurrent(next); nav.setTone(next === 'about' ? 'dark' : next === 'videos' ? 'auto' : 'light'); }
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
    // split the METRO BLOOMIN wordmark into letters so they can flow into / out of the leaf one by one (shop.css .mb-ch)
    var wordEl = logoEl && logoEl.querySelector('.mb-word');
    if (wordEl) {
      var txt = wordEl.textContent;
      wordEl.setAttribute('aria-label', txt);
      wordEl.innerHTML = txt.split('').map(function (c, k) { return '<span class="mb-ch" aria-hidden="true" style="--i:' + k + '">' + (c === ' ' ? ' ' : c) + '</span>'; }).join('');
      var chars = wordEl.querySelectorAll('.mb-ch');
      var aim = function () {   // --x: how far each letter travels to reach the leaf centre (layout boxes ignore transforms)
        var lf = logoEl.querySelector('.mb-leaf'); if (!lf) return;
        var cx = lf.offsetLeft + lf.offsetWidth / 2;   // offsets are all relative to #logo (position:fixed)
        for (var k = 0; k < chars.length; k++) { var c = chars[k];
          c.style.setProperty('--x', Math.round(cx - c.offsetLeft - c.offsetWidth / 2) + 'px'); }
      };
      aim(); window.addEventListener('resize', aim);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(aim);
    }
    // animated leaf logo: traced frames from shop/leaf-frames.js, played once, then holds the wink
    var leaf = logoEl && logoEl.querySelector('.mb-leaf'), F = window.MB_LEAF_FRAMES;
    if (leaf && F && F.length) {
      leaf.innerHTML = '<svg viewBox="25 -6 588 588" aria-hidden="true"><path fill-rule="evenodd"></path></svg>';
      var path = leaf.querySelector('path'), i = 0, last = 0;
      var still = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
      // the METRO BLOOMIN wordmark is tied to the leaf: it slides out as the leaf pops in (frame 8)
      // and slides back behind it when the leaf lands on the wink (last frame)
      var word = function (on) { logoEl.classList.toggle('mb-word-show', on); };
      if (still) { path.setAttribute('d', F[F.length - 1]); word(true); setTimeout(function () { word(false); }, F.length * 1000 / 12); }
      // frame follows the clock (12 fps), so it always ends at ~5s even on a busy phone
      else requestAnimationFrame(function tick(t) { if (!last) last = t; var n = Math.min(F.length - 1, Math.floor((t - last) * 12 / 1000));
        if (n !== i - 1) { path.setAttribute('d', F[n]); i = n + 1; if (n === 8) word(true); }
        if (n < F.length - 1) requestAnimationFrame(tick); else word(false); });
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
