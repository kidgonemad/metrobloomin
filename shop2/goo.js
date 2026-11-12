// White goo on the green leaf band: the bubble pool from the Bass Victim tour page (kidgonemad/BASS-VICTIM,
// components/PageUp.tsx): a 1rem strip on the edge plus 128 round bubbles (2-6rem, rising 6-10rem over 2-4 s,
// ease-in, shrinking to nothing at the end), all melted together by an SVG goo filter (blur 10, alpha 19 / -9).
// Here: white, on both the band's top edge (hanging down) and bottom edge (rising), sized to the band, and
// always playing. Interactive like the tour page's bars: a blob follows the pointer (mouse or finger) near an
// edge, grows as it gets closer and melts into the goo. Paused while the band is off screen or the tab hidden.
(function () {
  var band = document.querySelector('.band');
  if (!band) return;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var COUNT = 128;   // the original's bubble count (full width)

  // the original's sizes are in rem against a full-height page; scale them to the band
  function unit() { return band.getBoundingClientRect().height / 240 * 16; }   // px per original rem

  // the goo filter, same values as the original (its blur scaled with the bubbles)
  var NS = 'http://www.w3.org/2000/svg';
  var svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('aria-hidden', 'true');
  svg.style.cssText = 'position:absolute;width:0;height:0';
  svg.innerHTML = '<defs><filter id="mbGoo" x="-10%" y="-60%" width="120%" height="220%" color-interpolation-filters="sRGB">' +
    '<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>' +
    '<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob"/></filter></defs>';
  document.body.appendChild(svg);
  var blur = svg.querySelector('feGaussianBlur');

  // one layer per edge: the strip and its bubbles; the top layer is the bottom one turned upside down
  function layer(top) {
    var el = document.createElement('div');
    el.className = 'goo-layer' + (top ? ' goo-layer--top' : '');
    el.setAttribute('aria-hidden', 'true');
    var html = '<div class="goo-strip"></div><div class="goo-cursor"></div>';
    for (var i = 0; i < COUNT; i++) {
      var t = 2 + Math.random() * 2;
      html += '<div class="goo-bubble" style="--size:' + (2 + Math.random() * 4).toFixed(2) + ';--distance:' + (6 + Math.random() * 4).toFixed(2) +
        ';--position:' + (-5 + Math.random() * 110).toFixed(1) + '%;--time:' + t.toFixed(2) + 's;--delay:' + (-1 * (2 + Math.random() * 2)).toFixed(2) + 's"></div>';
    }
    el.innerHTML = html;
    band.appendChild(el);
    return { el: el, top: top, cur: el.querySelector('.goo-cursor'), x: 0, d: 0, sx: 0, sd: 0, r: 0, target: 0 };
  }
  var edges = [layer(true), layer(false)];

  function size() {
    var u = unit();
    band.style.setProperty('--goo-rem', u + 'px');
    blur.setAttribute('stdDeviation', (10 * u / 16).toFixed(2));
    band.style.setProperty('--goo-pad', Math.ceil(2 * 10 * u / 16) + 'px');   // 2 x the blur: past the edge
  }

  // pointer: like the tour page bars' mouse circle, it grows with how close the pointer is to the edge
  var RANGE = 0.95;                                        // reach, in band heights from the edge
  function track(ev) {
    var r = band.getBoundingClientRect(), H = r.height, inX = ev.clientX >= r.left && ev.clientX <= r.right;
    edges.forEach(function (e) {
      var d = e.top ? ev.clientY - r.top : r.bottom - ev.clientY;   // distance in from this edge
      e.x = ev.clientX - r.left; e.d = Math.max(0, d);
      var prox = inX && d > -H * 0.5 && d < H * RANGE ? 1 - Math.max(0, d) / (H * RANGE) : 0;
      e.target = prox * H * 0.36;                          // blob radius (px)
    });
  }
  function release() { edges.forEach(function (e) { e.target = 0; }); }
  window.addEventListener('pointermove', track, { passive: true });
  window.addEventListener('pointerdown', track, { passive: true });
  window.addEventListener('pointerup', function (ev) { if (ev.pointerType !== 'mouse') release(); }, { passive: true });
  window.addEventListener('pointercancel', release, { passive: true });
  document.addEventListener('mouseleave', release);

  // follow smoothly (the original's 0.15 / 0.12 easing per frame)
  var raf = 0, running = false;
  function tick() {
    edges.forEach(function (e) {
      e.sx += (e.x - e.sx) * 0.15; e.sd += (e.d - e.sd) * 0.15; e.r += (e.target - e.r) * 0.12;
      var c = e.cur.style;
      c.width = c.height = (2 * e.r).toFixed(1) + 'px';
      c.left = e.sx.toFixed(1) + 'px';
      c.bottom = 'calc(var(--goo-pad) + ' + e.sd.toFixed(1) + 'px)';
    });
    raf = requestAnimationFrame(tick);
  }

  var visible = true;
  function sync() {
    var on = visible && !document.hidden && !reduce;
    band.classList.toggle('goo-paused', !on);
    if (on && !running) { running = true; raf = requestAnimationFrame(tick); }
    if (!on && running) { running = false; cancelAnimationFrame(raf); }
  }
  edges.forEach(function (e) { e.el.classList.add('is-on'); });
  window.MBGoo = { splash: function () {} };   // always playing now; kept so the site's call is harmless

  size();
  addEventListener('resize', size);
  if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { visible = es[0].isIntersecting; sync(); }).observe(band);
  document.addEventListener('visibilitychange', sync);
  sync();
})();
