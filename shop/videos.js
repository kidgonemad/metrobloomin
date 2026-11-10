// "Watch videos": opens the blob video app (shop/vapp/) full-screen over the site.
// The app's menu has a "Close" item (route /close) that brings you back here; Escape works too.
(function () {
  var wrap = document.createElement('div');
  wrap.id = 'videoView';
  wrap.className = 'mb-vapp';
  wrap.setAttribute('role', 'dialog');
  wrap.setAttribute('aria-modal', 'true');
  wrap.setAttribute('aria-label', 'Videos');
  document.body.appendChild(wrap);
  var frame = null, timer = 0, lastFocus = null;
  var src = new URL('shop/vapp/', document.baseURI).href;

  function open() {
    lastFocus = document.activeElement;
    var nav = document.querySelector('nav.menu'); if (nav) nav.classList.remove('is-open');
    if (!frame) {
      frame = document.createElement('iframe');
      frame.title = 'Metro Bloomin videos';
      frame.allow = 'autoplay; fullscreen';
      frame.setAttribute('allowfullscreen', '');
      frame.src = src;
      wrap.appendChild(frame);
      frame.addEventListener('load', function () {
        try { frame.contentWindow.addEventListener('keydown', onKey); } catch (e) {}
      });
    }
    wrap.classList.add('is-open');
    clearInterval(timer);
    timer = setInterval(function () {              // the app's "Close" menu item navigates to /close
      try { if (/\/close\/?$/.test(frame.contentWindow.location.pathname)) close(); } catch (e) {}
    }, 200);
    setTimeout(function () { try { frame.focus(); } catch (e) {} }, 60);
  }
  function close() {
    clearInterval(timer);
    wrap.classList.remove('is-open');
    if (frame) { frame.remove(); frame = null; }  // stops playback; next open starts fresh
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function onKey(e) {
    if (e.key !== 'Escape') return;
    // let the app close an open video first; close the overlay when nothing is selected
    try { if (frame.contentDocument.querySelector('.back-arrow--visible')) return; } catch (err) {}
    close();
  }
  window.addEventListener('keydown', function (e) { if (wrap.classList.contains('is-open')) { onKey(e); e.stopImmediatePropagation(); } }, true);
  ['wheel', 'touchstart', 'touchmove', 'pointerdown', 'pointermove'].forEach(function (t) {
    wrap.addEventListener(t, function (e) { e.stopPropagation(); }, { passive: true });
  });
  window.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('#videos')) { e.preventDefault(); e.stopImmediatePropagation(); open(); }
  }, true);
  window.__mbVideos = { open: open, close: close };
})();
