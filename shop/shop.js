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
    document.body.classList.add('mb-shop-open');
    var sl = document.getElementById('shopLink'); if (sl) sl.classList.add('is-current');
    var ab0 = document.querySelector('.mb-about'); if (ab0) ab0.classList.remove('is-current');
    el.scrollTop = 0;
    if (location.hash !== '#shop') history.replaceState(null, '', '#shop');
    setTimeout(function () { var b = el.querySelector('.mbn__btn'); if (b) b.focus(); }, 50);
  }
  function close() {
    el.classList.remove('is-open');
    document.body.classList.remove('mb-shop-open');
    var sl = document.getElementById('shopLink'); if (sl) sl.classList.remove('is-current');
    var ab1 = document.querySelector('.mb-about'); if (ab1) ab1.classList.add('is-current');
    if (location.hash === '#shop') history.replaceState(null, '', location.pathname + location.search);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function isOpen() { return el.classList.contains('is-open'); }
  window.__mbShopClose = function () { if (isOpen()) close(); };

  // The shop uses the site's own header (logo + menu) on top of it:
  // logo = back to the 3D page, about = close the shop and open About.
  var logoEl = document.getElementById('logo');
  if (logoEl) logoEl.addEventListener('click', function () { if (isOpen()) close(); });
  var aboutEl = document.getElementById('about');
  if (aboutEl) aboutEl.addEventListener('click', function () { if (isOpen()) close(); }, true);

  // Keep wheel/touch/keys inside the overlay from driving the 3D page behind it.
  ['wheel', 'touchstart', 'touchmove', 'pointerdown', 'pointermove', 'mousedown', 'mousemove'].forEach(function (t) {
    el.addEventListener(t, function (e) { e.stopPropagation(); }, { passive: true });
  });
  window.addEventListener('keydown', function (e) {
    if (!isOpen()) return;
    if (e.key === 'Escape') { close(); }
    e.stopImmediatePropagation();
  }, true);

  // collapsible menu (3-line button) for phones/tablets
  function wireBurger() {
    var nav = document.querySelector('nav.menu'); if (!nav || nav.querySelector('.mb-burger')) return;
    var b = document.createElement('button');
    b.className = 'mb-burger'; b.type = 'button'; b.setAttribute('aria-label', 'Menu'); b.setAttribute('aria-expanded', 'false');
    b.innerHTML = '<span></span><span></span><span></span>';
    nav.insertBefore(b, nav.firstChild);
    var ul = nav.querySelector('ul.links');
    // shop · videos · about  (about = this interactive 3D page)
    if (ul && !ul.querySelector('.mb-about')) {
      var li = document.createElement('li');
      li.innerHTML = '<a href="#" class="mb-about is-current" aria-current="page">about</a>';
      ul.appendChild(li);
      li.querySelector('a').addEventListener('click', function (e) { e.preventDefault(); set(false); if (window.__mbShopClose) window.__mbShopClose(); });
    }
    function set(open) { nav.classList.toggle('is-open', open); document.body.classList.toggle('mb-menu-open', open); b.setAttribute('aria-expanded', String(open)); }
    b.addEventListener('click', function (e) { e.stopPropagation(); set(!nav.classList.contains('is-open')); });
    nav.querySelectorAll('#shopLink,#about,#videos,.lang-list a').forEach(function (a) { a.addEventListener('click', function () { set(false); }); });
    document.addEventListener('click', function (e) { if (!nav.contains(e.target)) set(false); });
  }

  // section directory: on phones it opens from a round button at the bottom right
  function wireDirectory() {
    var dir = document.querySelector('nav.content-menu'); if (!dir || document.querySelector('.mb-dir-btn')) return;
    var b = document.createElement('button');
    b.className = 'mb-dir-btn'; b.type = 'button'; b.setAttribute('aria-label', 'Sections'); b.setAttribute('aria-expanded', 'false');
    b.innerHTML = '<i></i><i></i><i></i><i></i>';
    document.body.appendChild(b);
    function set(open) { dir.classList.toggle('is-open', open); b.setAttribute('aria-expanded', String(open)); }
    b.addEventListener('click', function (e) { e.stopPropagation(); set(!dir.classList.contains('is-open')); });
    dir.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setTimeout(function () { set(false); }, 150); }); });
    document.addEventListener('click', function (e) { if (!dir.contains(e.target) && e.target !== b) set(false); });
  }

  function wire() {
    wireBurger();
    var link = document.getElementById('shopLink');
    if (link) link.addEventListener('click', open);
    // the site opens on the shop (unless a link asks for videos or about)
    if (location.hash === '#shop' || location.hash === '') open();
    if (location.hash === '#about') history.replaceState(null, '', location.pathname + location.search);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wire); else wire();
})();
