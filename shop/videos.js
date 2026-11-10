// One-page site: "videos" opens the blob video app (shop/vapp/) as a full-screen layer on top of the 3D page,
// like the shop. The site's own logo + ••• menu stay on top; shop · videos · about switch layers instantly.
(function () {
  var src = new URL('shop/vapp/', document.baseURI).href;
  var wrap = document.createElement('div');
  wrap.id = 'videoView';
  wrap.className = 'mb-vlayer';
  document.body.appendChild(wrap);
  var frame = null;

  function isOpen() { return wrap.classList.contains('is-open'); }
  function setCurrent() {
    var v = document.getElementById('videos'), ab = document.querySelector('.mb-about');
    if (v) v.classList.toggle('is-current', isOpen());
    if (ab && isOpen()) ab.classList.remove('is-current');
  }
  function open(e) {
    if (e) e.preventDefault();
    if (window.__mbShopClose) window.__mbShopClose();
    if (!frame) {
      frame = document.createElement('iframe');
      frame.title = 'Metro Bloomin videos';
      frame.allow = 'autoplay; fullscreen';
      frame.setAttribute('allowfullscreen', '');
      frame.src = src + '?embed=1';
      wrap.appendChild(frame);
    }
    wrap.classList.add('is-open');
    document.body.classList.add('mb-videos-open');
    if (location.hash !== '#videos') history.replaceState(null, '', '#videos');
    setCurrent();
  }
  function close() {
    if (!isOpen()) return;
    wrap.classList.remove('is-open');
    document.body.classList.remove('mb-videos-open');
    if (frame) { frame.remove(); frame = null; }   // stops playback
    if (location.hash === '#videos') history.replaceState(null, '', location.pathname + location.search);
    setCurrent();
    var ab = document.querySelector('.mb-about'); if (ab && !document.body.classList.contains('mb-shop-open')) ab.classList.add('is-current');
  }
  window.__mbVideos = { open: open, close: close, isOpen: isOpen };

  window.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('#videos, #shopLink, .mb-about, #logo');
    if (!t) return;
    if (t.id === 'videos') { e.preventDefault(); e.stopImmediatePropagation(); open(); var m = document.querySelector('nav.menu'); if (m && m.classList.contains('is-open')) m.querySelector('.mb-burger').click(); }
    else close();   // shop, about or logo: leave the videos layer
  }, true);
  if (location.hash === '#videos') { if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', open); else open(); }
})();
