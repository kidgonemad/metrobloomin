// White goo on the green leaf band: the bubble pool from the Bass Victim tour page (kidgonemad/BASS-VICTIM,
// components/PageUp.tsx), as is: a 1rem strip on the edge plus 128 round bubbles (2-6rem, rising 6-10rem
// over 2-4 s, ease-in, shrinking to nothing at the end), all melted together by an SVG goo filter
// (blur 10, alpha 19 / -9). It fades in when the pointer comes near the edge and fades out when it leaves.
// Here: white, on both the band's top edge (hanging down) and bottom edge (rising), sized to the band.
// It also surges in for ~2.4 s when the shop opens (MBGoo.splash(), called by the site), and on a tap
// near an edge (phones have no hover).
(function () {
  var band = document.querySelector('.band');
  if (!band) return;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var COUNT = 128, THRESHOLD = 150;   // the original's bubble count (full width) and hover range (px)

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
    var html = '<div class="goo-strip"></div>';
    for (var i = 0; i < COUNT; i++) {
      var t = 2 + Math.random() * 2;
      html += '<div class="goo-bubble" style="--size:' + (2 + Math.random() * 4).toFixed(2) + ';--distance:' + (6 + Math.random() * 4).toFixed(2) +
        ';--position:' + (-5 + Math.random() * 110).toFixed(1) + '%;--time:' + t.toFixed(2) + 's;--delay:' + (-1 * (2 + Math.random() * 2)).toFixed(2) + 's"></div>';
    }
    el.innerHTML = html;
    band.appendChild(el);
    return { el: el, top: top, hover: 0, splashUntil: 0, on: false };
  }
  var edges = [layer(true), layer(false)];

  function size() {
    var u = unit();
    band.style.setProperty('--goo-rem', u + 'px');
    blur.setAttribute('stdDeviation', (10 * u / 16).toFixed(2));
  }

  function apply(e) {
    var now = performance.now(), splash = now < e.splashUntil ? 1 : 0;
    var k = Math.max(e.hover, splash);
    e.el.style.opacity = k.toFixed(3);
    var run = k > 0.2 && !reduce;          // like the original: bubbles only move while it's showing
    if (run === e.on) return;
    e.on = run; clearTimeout(e.stopT);
    if (run) e.el.classList.add('is-on');
    else e.stopT = setTimeout(function () { if (!e.on) e.el.classList.remove('is-on'); }, 350);   // after the .3s fade
  }

  // pointer near an edge (within the original's 150 px, measured from that edge of the band)
  function near(ev) {
    var r = band.getBoundingClientRect();
    if (ev.clientX < r.left || ev.clientX > r.right) { edges.forEach(function (e) { e.hover = 0; apply(e); }); return; }
    edges.forEach(function (e) {
      var d = e.top ? Math.abs(ev.clientY - r.top) : Math.abs(r.bottom - ev.clientY);
      e.hover = d < THRESHOLD ? 1 - d / THRESHOLD : 0;
      apply(e);
    });
  }
  window.addEventListener('mousemove', near, { passive: true });
  document.addEventListener('mouseleave', function () { edges.forEach(function (e) { e.hover = 0; apply(e); }); });

  // a tap near an edge surges that edge for a moment
  window.addEventListener('pointerdown', function (ev) {
    if (ev.pointerType === 'mouse') return;
    var r = band.getBoundingClientRect();
    if (ev.clientX < r.left || ev.clientX > r.right) return;
    edges.forEach(function (e) {
      var d = e.top ? Math.abs(ev.clientY - r.top) : Math.abs(r.bottom - ev.clientY);
      if (d < THRESHOLD) surge(e, 1600);
    });
  }, { passive: true });

  function surge(e, ms) {
    e.splashUntil = performance.now() + ms; apply(e);
    clearTimeout(e.timer); e.timer = setTimeout(function () { apply(e); }, ms + 20);
  }

  window.MBGoo = { splash: function () { edges.forEach(function (e) { surge(e, 2400); }); } };

  size();
  addEventListener('resize', size);
  // the site tells the shop when its view opens (shop/shop.js), so the goo surges in every time
  addEventListener('message', function (e) { if (e.data === 'mb-shop-open') window.MBGoo.splash(); });
  if (!reduce) window.MBGoo.splash();
})();
