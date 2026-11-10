// "Watch videos" index: replaces the old video drawer with a quiet, expanding-row index of the Instagram posts.
(function () {
  var videos = [
    { type: 'reel', code: 'DeFdXgESa9O', date: '2026-10-04' },
    { type: 'reel', code: 'Dc4I4QfB2sZ', date: '2026-09-04' },
    { type: 'reel', code: 'Dcecl7HBbrY', date: '2026-08-25' },
    { type: 'reel', code: 'DcMT4oDhNAd', date: '2026-08-18' },
    { type: 'reel', code: 'Cw8I51JRJMM', date: '2023-09-08' },
    { type: 'p', code: 'B9XW5seh3DH', date: '2020-03-05' },
    { type: 'p', code: 'BgW1ES_h8BD', date: '2018-03-15' },
    { type: 'p', code: 'Bdf6GRND79_', date: '2018-01-03' },
    { type: 'p', code: 'Bc77fvIjaeH', date: '2017-12-20' },
    { type: 'p', code: 'BYmganijBXE', date: '2017-09-04' }
  ];
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function fmt(d) { var p = d.split('-'); return MONTHS[+p[1] - 1] + ' ' + p[0]; }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function url(v) { return 'https://www.instagram.com/' + v.type + '/' + v.code + '/'; }

  var el = document.createElement('section');
  el.id = 'videoView';
  el.className = 'mb-vid';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-modal', 'true');
  el.setAttribute('aria-label', 'Videos');
  el.innerHTML =
    '<header class="mb-vid__head"><a class="mb-vid__brand" href="#" data-close>Metro Bloomin</a>' +
    '<div class="mb-vid__title">Videos</div><button class="mb-vid__close" type="button" data-close>Close</button></header>' +
    '<div class="mb-vid__page"><div class="mb-vid__cols" role="row">' +
      '<span>No.</span><span>Title</span><span class="mb-vid__col--format">Format</span><span>Date</span><span class="mb-vid__col--link">Source</span></div>' +
    '<div class="mb-vid__list">' + videos.map(function (v, i) {
      var name = 'Metro Bloomin ' + pad(i + 1);
      return '<div class="mb-vid__row" data-i="' + i + '">' +
        '<button class="mb-vid__row-main" type="button" aria-expanded="false">' +
          '<span class="mb-vid__num">' + pad(i + 1) + '</span><span class="mb-vid__name">' + name + '</span>' +
          '<span class="mb-vid__col--format">' + (v.type === 'reel' ? 'Reel' : 'Post') + '</span>' +
          '<span>' + fmt(v.date) + '</span><span class="mb-vid__col--link">Instagram</span></button>' +
        '<div class="mb-vid__detail-wrap"><div class="mb-vid__detail"><div class="mb-vid__detail-grid">' +
          '<div class="mb-vid__player"></div>' +
          '<div class="mb-vid__meta"><span>' + (v.type === 'reel' ? 'Reel' : 'Post') + ', ' + fmt(v.date) + '</span>' +
          '<a href="' + url(v) + '" target="_blank" rel="noopener">View on Instagram ↗</a></div>' +
        '</div></div></div></div>';
    }).join('') + '</div></div>' +
    '<div class="mb-vid__hint" aria-hidden="true"><span class="mb-vid__dots"><i></i><i></i><i></i></span><span>Select a video to watch</span></div>';
  document.body.appendChild(el);

  var list = el.querySelector('.mb-vid__list');
  function closeRows(except) {
    el.querySelectorAll('.mb-vid__row.is-open').forEach(function (r) {
      if (r === except) return;
      r.classList.remove('is-open'); r.querySelector('.mb-vid__row-main').setAttribute('aria-expanded', 'false');
      r.querySelector('.mb-vid__player').innerHTML = '';            // stop playback
    });
  }
  list.addEventListener('click', function (e) {
    var btn = e.target.closest('.mb-vid__row-main'); if (!btn) return;
    var row = btn.parentNode, open = !row.classList.contains('is-open');
    closeRows(row);
    row.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    el.classList.toggle('mb-vid--has-open', open);
    var player = row.querySelector('.mb-vid__player');
    if (open) {
      var v = videos[+row.dataset.i];
      player.innerHTML = '<blockquote class="instagram-media" data-instgrm-permalink="' + url(v) + '" data-instgrm-version="14"></blockquote>';
      if (window.instgrm) window.instgrm.Embeds.process();
      setTimeout(function () { el.scrollTo({ top: row.offsetTop - 60, behavior: 'smooth' }); }, 420);
    } else { player.innerHTML = ''; }
  });

  var lastFocus = null;
  function open() {
    lastFocus = document.activeElement;
    var nav = document.querySelector('nav.menu'); if (nav) nav.classList.remove('is-open');
    el.classList.add('is-open'); el.scrollTop = 0;
    setTimeout(function () { el.querySelector('.mb-vid__close').focus(); }, 50);
  }
  function close() {
    el.classList.remove('is-open'); el.classList.remove('mb-vid--has-open'); closeRows(null);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  el.querySelectorAll('[data-close]').forEach(function (b) { b.addEventListener('click', function (e) { e.preventDefault(); close(); }); });

  // keep scroll/touch/keys inside from moving the 3D page behind
  ['wheel', 'touchstart', 'touchmove', 'pointerdown', 'pointermove', 'mousedown', 'mousemove'].forEach(function (t) {
    el.addEventListener(t, function (e) { e.stopPropagation(); }, { passive: true });
  });
  window.addEventListener('keydown', function (e) {
    if (!el.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    e.stopImmediatePropagation();
  }, true);

  // take over the "Watch videos" link (runs before the old drawer's handler)
  window.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('#videos')) { e.preventDefault(); e.stopImmediatePropagation(); open(); }
  }, true);
})();
