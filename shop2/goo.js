// Goo on the green leaf bands: the bubble pool from the Bass Victim tour page (kidgonemad/BASS-VICTIM,
// components/PageUp.tsx): a 1rem strip on the edge plus 128 round bubbles (2-6rem, rising 6-10rem over 2-4 s,
// ease-in, shrinking to nothing at the end), all melted together by an SVG goo filter (blur 10, alpha 19 / -9).
// Here: on the edges each band lists in data-goo ("top", "bottom"), in the colour of what sits on that side
// (--goo-color: white under the tabs / above "6 products", the tile grey under the grid), sized to the top band,
// always playing. Interactive like the tour page's bars: a blob follows the pointer (mouse or finger) near an
// edge, grows as it gets closer and melts into the goo. Paused while a band is off screen or the tab hidden.
(function () {
  var bands = [].slice.call(document.querySelectorAll('.band[data-goo]'));
  if (!bands.length) return;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var COUNT = 128;   // the original's bubble count (full width)
  var NS = 'http://www.w3.org/2000/svg';
  var svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('aria-hidden', 'true');
  svg.style.cssText = 'position:absolute;width:0;height:0';
  document.body.appendChild(svg);

  // the original's sizes are in rem against a full-height page; scaled to the first (top) band, used for all
  function unit() { return bands[0].getBoundingClientRect().height / 240 * 16; }   // px per original rem

  var all = [];   // every band's state
  bands.forEach(function (band, n) {
    // its own goo filter, same values as the original (blur scaled with the bubbles)
    var f = document.createElementNS(NS, 'filter');
    f.setAttribute('id', 'mbGoo' + n);
    ['x', '-10%', 'y', '-60%', 'width', '120%', 'height', '220%', 'color-interpolation-filters', 'sRGB'].forEach(function (v, i, a) { if (i % 2 === 0) f.setAttribute(v, a[i + 1]); });
    f.innerHTML = '<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>' +
      '<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob"/>';
    svg.appendChild(f);

    // one layer per edge: the strip and its bubbles; the top layer is the bottom one turned upside down
    function layer(top) {
      var el = document.createElement('div');
      el.className = 'goo-layer is-on' + (top ? ' goo-layer--top' : '');
      el.setAttribute('aria-hidden', 'true');
      el.style.filter = 'url(#mbGoo' + n + ')';
      var html = '<div class="goo-strip"></div><div class="goo-cursor"></div>';
      for (var i = 0; i < COUNT; i++) {
        html += '<div class="goo-bubble" style="--size:' + (2 + Math.random() * 4).toFixed(2) + ';--distance:' + (6 + Math.random() * 4).toFixed(2) +
          ';--position:' + (-5 + Math.random() * 110).toFixed(1) + '%;--time:' + (2 + Math.random() * 2).toFixed(2) + 's;--delay:' + (-1 * (2 + Math.random() * 2)).toFixed(2) + 's"></div>';
      }
      el.innerHTML = html;
      band.appendChild(el);
      return { el: el, top: top, cur: el.querySelector('.goo-cursor'), x: 0, d: 0, sx: 0, sd: 0, r: 0, target: 0 };
    }
    var want = band.getAttribute('data-goo').split(/\s+/);
    var edges = [];
    if (want.indexOf('top') >= 0) edges.push(layer(true));
    if (want.indexOf('bottom') >= 0) edges.push(layer(false));
    all.push({ band: band, edges: edges, blur: f.querySelector('feGaussianBlur'), visible: true });
  });

  function size() {
    var u = unit();
    all.forEach(function (b) {
      b.band.style.setProperty('--goo-rem', u + 'px');
      b.blur.setAttribute('stdDeviation', (10 * u / 16).toFixed(2));
      b.band.style.setProperty('--goo-pad', Math.ceil(2 * 10 * u / 16) + 'px');   // 2 x the blur: past the edge
    });
  }

  // pointer: like the tour page bars' mouse circle, it grows with how close the pointer is to the edge
  var RANGE = 0.95;                                        // reach, in (top) band heights from the edge
  function track(ev) {
    var H = bands[0].getBoundingClientRect().height;
    all.forEach(function (b) {
      var r = b.band.getBoundingClientRect(), inX = ev.clientX >= r.left && ev.clientX <= r.right;
      b.edges.forEach(function (e) {
        var d = e.top ? ev.clientY - r.top : r.bottom - ev.clientY;   // distance in from this edge
        e.x = ev.clientX - r.left; e.d = Math.max(0, d);
        var prox = inX && d > -H * 0.5 && d < H * RANGE ? 1 - Math.max(0, d) / (H * RANGE) : 0;
        e.target = prox * H * 0.36;                        // blob radius (px)
      });
    });
  }
  function release() { all.forEach(function (b) { b.edges.forEach(function (e) { e.target = 0; }); }); }
  window.addEventListener('pointermove', track, { passive: true });
  window.addEventListener('pointerdown', track, { passive: true });
  window.addEventListener('pointerup', function (ev) { if (ev.pointerType !== 'mouse') release(); }, { passive: true });
  window.addEventListener('pointercancel', release, { passive: true });
  document.addEventListener('mouseleave', release);

  // follow smoothly (the original's 0.15 / 0.12 easing per frame)
  var raf = 0, running = false;
  function tick() {
    all.forEach(function (b) {
      if (!b.visible) return;
      b.edges.forEach(function (e) {
        e.sx += (e.x - e.sx) * 0.15; e.sd += (e.d - e.sd) * 0.15; e.r += (e.target - e.r) * 0.12;
        var c = e.cur.style;
        c.width = c.height = (2 * e.r).toFixed(1) + 'px';
        c.left = e.sx.toFixed(1) + 'px';
        c.bottom = 'calc(var(--goo-pad) + ' + e.sd.toFixed(1) + 'px)';
      });
    });
    raf = requestAnimationFrame(tick);
  }
  function sync() {
    var any = false;
    all.forEach(function (b) {
      var on = b.visible && !document.hidden && !reduce;
      b.band.classList.toggle('goo-paused', !on); if (on) any = true;
    });
    if (any && !running) { running = true; raf = requestAnimationFrame(tick); }
    if (!any && running) { running = false; cancelAnimationFrame(raf); }
  }
  window.MBGoo = { splash: function () {} };   // always playing; kept so the site's call is harmless

  size();
  addEventListener('resize', size);
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { all.forEach(function (b) { if (b.band === en.target) b.visible = en.isIntersecting; }); }); sync();
    });
    all.forEach(function (b) { io.observe(b.band); });
  }
  document.addEventListener('visibilitychange', sync);
  sync();
})();
