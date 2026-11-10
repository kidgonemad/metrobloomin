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
      '<span class="mb-card__cta">Buy now ↗</span></a></li>';
  }

  var el = document.createElement('section');
  el.id = 'shopView';
  el.className = 'mb-shop';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-modal', 'true');
  el.setAttribute('aria-label', 'Metro Bloomin shop');
  el.innerHTML =
    '<header class="mb-shop__bar">' +
      '<nav class="mb-shop__nav" aria-label="Collections">' +
        collections.map(function (c) { return '<a href="#mb-' + c.id + '">' + esc(c.title) + '</a>'; }).join('') +
        '<a href="' + STORE + '/pages/contact" target="_blank" rel="noopener">Contact</a></nav>' +
      '<a class="mb-shop__brand" href="' + STORE + '" target="_blank" rel="noopener">METRO<br>BLOOMIN<span>EST. 2016</span></a>' +
      '<button class="mb-shop__close" type="button" aria-label="Close shop">Close ✕</button>' +
    '</header>' +
    '<div class="mb-hero"><h2>Shop</h2><p>The Metro Bloomin signature logo collection: heavyweight hand-tufted rugs, molded soft PVC keychains and more. Checkout happens on metrobloomin.com.</p></div>' +
    collections.map(function (c) {
      return '<section class="mb-collection" id="mb-' + c.id + '"><div class="mb-collection__head"><h3>' + esc(c.title) + '</h3>' +
        '<a href="' + STORE + '/collections/' + c.handle + '" target="_blank" rel="noopener">View collection ↗</a></div>' +
        '<ul class="mb-grid">' + c.products.map(card).join('') + '</ul></section>';
    }).join('') +
    '<div class="mb-loop"><div><h3>Stay in the loop</h3><p>Drops, releases, and Metro Bloomin updates.</p></div>' +
      '<a class="mb-btn" href="' + STORE + '/#newsletter" target="_blank" rel="noopener">Join the list ↗</a></div>' +
    '<footer class="mb-foot"><span>© ' + new Date().getFullYear() + ' METRO BLOOMIN</span><nav>' +
      [['Privacy policy', 'privacy-policy'], ['Shipping policy', 'shipping-policy'], ['Refund policy', 'refund-policy'], ['Terms of service', 'terms-of-service']]
        .map(function (l) { return '<a href="' + STORE + '/policies/' + l[1] + '" target="_blank" rel="noopener">' + l[0] + '</a>'; }).join('') +
    '</nav></footer>';
  document.body.appendChild(el);

  var lastFocus = null;
  function open(e) {
    if (e) e.preventDefault();
    lastFocus = document.activeElement;
    el.classList.add('is-open');
    el.scrollTop = 0;
    if (location.hash !== '#shop') history.replaceState(null, '', '#shop');
    setTimeout(function () { el.querySelector('.mb-shop__close').focus(); }, 50);
  }
  function close() {
    el.classList.remove('is-open');
    if (location.hash === '#shop') history.replaceState(null, '', location.pathname + location.search);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function isOpen() { return el.classList.contains('is-open'); }

  el.querySelector('.mb-shop__close').addEventListener('click', close);
  el.querySelectorAll('.mb-shop__nav a[href^="#mb-"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      var t = el.querySelector(a.getAttribute('href'));
      if (t) el.scrollTo({ top: t.offsetTop - 70, behavior: 'smooth' });
    });
  });

  // Keep wheel/touch/keys inside the overlay from driving the 3D page behind it.
  ['wheel', 'touchstart', 'touchmove', 'pointerdown', 'pointermove', 'mousedown', 'mousemove'].forEach(function (t) {
    el.addEventListener(t, function (e) { e.stopPropagation(); }, { passive: true });
  });
  window.addEventListener('keydown', function (e) {
    if (!isOpen()) return;
    if (e.key === 'Escape') { close(); }
    e.stopImmediatePropagation();
  }, true);

  function wire() {
    var link = document.getElementById('shopLink');
    if (link) link.addEventListener('click', open);
    if (location.hash === '#shop') open();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wire); else wire();
})();
