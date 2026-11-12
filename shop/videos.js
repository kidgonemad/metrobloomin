// Music view: the TV page (music/, built from music-src/) as a full-screen layer on the one page.
// Opened and closed only by the view controller in shop.js (MBView.show).
(function () {
  // ?v= changes with every music build, so phones don't keep an old copy of the TV page (bump it with the build)
  var src = new URL('music/?v=11', document.baseURI).href;
  var wrap = document.createElement('div');
  wrap.id = 'videoView';
  wrap.className = 'mb-vlayer';
  document.body.appendChild(wrap);
  var frame = null;
  function open() {
    if (!frame) {
      frame = document.createElement('iframe');
      frame.title = 'Metro Bloomin music';
      frame.allow = 'autoplay; fullscreen';
      frame.setAttribute('allowfullscreen', '');
      frame.src = src;
      wrap.appendChild(frame);
    }
    wrap.classList.add('is-open');
    document.body.classList.add('mb-videos-open');
  }
  function close() {
    wrap.classList.remove('is-open');
    document.body.classList.remove('mb-videos-open');
    if (frame) { frame.remove(); frame = null; }   // stops playback
  }
  window.__mbVideos = { open: open, close: close };
})();
