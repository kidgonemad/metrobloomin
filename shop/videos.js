// "Watch videos" opens the blob video app (shop/vapp/) as its own page, exactly as the original site works.
// Browser Back returns to the 3D page.
(function () {
  var url = new URL('shop/vapp/', document.baseURI).href;
  window.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('#videos')) { e.preventDefault(); e.stopImmediatePropagation(); location.href = url + '?t=' + Date.now(); }
  }, true);
})();
