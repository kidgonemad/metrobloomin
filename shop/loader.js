// Loading screen for the shop: weed buds (shop/drop/bud*.svg) drop and pile up until the screen is full,
// then the pile falls away and the shop products drop into place (shop.css .mb-drop-in).
// Only on a fresh visit that opens on the shop (not #videos / #about). Runs before shop.js (script order).
(function () {
  var h = location.hash;
  if (h === '#videos' || h === '#about') return;
  window.__mbLoading = true;
  var root = document.createElement('div');
  root.className = 'mb-loader';
  root.setAttribute('aria-hidden', 'true');
  document.body.appendChild(root);
  var t0 = performance.now();

  function dropShop() {                      // products fall into place, one after another
    var shop = document.getElementById('shopView');
    if (!shop) return;
    var cards = shop.querySelectorAll('.mb-card');
    for (var k = 0; k < cards.length; k++) cards[k].style.setProperty('--k', k);
    shop.classList.add('mb-drop-in');
    setTimeout(function () { shop.classList.remove('mb-drop-in'); }, 900 + cards.length * 90);
  }
  function finish() {
    window.__mbLoading = false;
    document.dispatchEvent(new Event('mb:loaded-in'));
    setTimeout(function () { root.remove(); }, 1200);
  }

  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setTimeout(function () { root.classList.add('is-gone'); dropShop(); finish(); }, 300);
    return;
  }

  var base = new URL('shop/drop/', document.baseURI).href;
  var SRC = ['bud1.svg', 'bud2.svg', 'bud3.svg'];
  var W = innerWidth, H = innerHeight;
  var S = Math.round(Math.max(70, Math.min(W, H) * 0.24));   // drawn bud size
  var R = S * 0.36;                                            // collision radius (buds overlap a little)
  var N = Math.min(140, Math.ceil(W * H / (Math.PI * R * R) * 1.05));
  var G = 2600, bodies = [], spawned = 0, floor = H, phase = 'fill', lastSpawn = 0, fallStart = 0;

  function spawn() {
    var img = document.createElement('img');
    img.src = base + SRC[spawned % SRC.length];
    img.alt = ''; img.draggable = false;
    img.style.width = S + 'px';
    root.appendChild(img);
    bodies.push({ el: img, x: R + Math.random() * (W - 2 * R), y: -S, vx: (Math.random() - .5) * 120, vy: 200,
      a: Math.random() * 360, va: (Math.random() - .5) * 300 });
    spawned++;
  }
  function step(dt) {
    for (var i = 0; i < bodies.length; i++) { var b = bodies[i];
      b.vy += G * dt; b.x += b.vx * dt; b.y += b.vy * dt; b.a += b.va * dt; }
    for (var it = 0; it < 4; it++) {                           // settle overlaps a few times per frame so the pile stacks
      for (i = 0; i < bodies.length; i++) { var p = bodies[i];
        if (p.y + R > floor) { p.y = floor - R; if (p.vy > 0) p.vy *= -0.2; p.vx *= 0.9; p.va *= 0.8; }
        if (phase === 'fill') { if (p.x < R) { p.x = R; p.vx = Math.abs(p.vx) * .3; } if (p.x > W - R) { p.x = W - R; p.vx = -Math.abs(p.vx) * .3; } }
        for (var j = i + 1; j < bodies.length; j++) { var q = bodies[j];
          var dx = q.x - p.x, dy = q.y - p.y, d2 = dx * dx + dy * dy, m = 2 * R;
          if (d2 < m * m && d2 > 0.01) {
            var d = Math.sqrt(d2), o = (m - d) / 2, nx = dx / d, ny = dy / d;
            p.x -= nx * o; p.y -= ny * o; q.x += nx * o; q.y += ny * o;
            var rv = (q.vx - p.vx) * nx + (q.vy - p.vy) * ny;
            if (rv < 0) { var imp = rv * 0.6; p.vx += imp * nx; p.vy += imp * ny; q.vx -= imp * nx; q.vy -= imp * ny; p.va *= .9; q.va *= .9; }
          } } } }
  }
  function draw() {
    for (var i = 0; i < bodies.length; i++) { var b = bodies[i];
      b.el.style.transform = 'translate(' + (b.x - S / 2).toFixed(1) + 'px,' + (b.y - S / 2).toFixed(1) + 'px) rotate(' + b.a.toFixed(1) + 'deg)'; }
  }
  var prev = t0;
  requestAnimationFrame(function frame(t) {
    var dt = Math.min(0.033, (t - prev) / 1000); prev = t;
    var el = t - t0;
    if (phase === 'fill') {
      if (spawned < N && t - lastSpawn > 2400 / N) { spawn(); if (spawned < N && Math.random() < .5) spawn(); lastSpawn = t; }
      // full once every bud is in and the pile has reached the top (or after 3.2s at most)
      var top = H; for (var i = 0; i < bodies.length; i++) top = Math.min(top, bodies[i].y);
      if ((spawned >= N && el > 2600 && top < S * 0.6) || el > 3200) {
        phase = 'fall'; fallStart = t; floor = Infinity;
        for (i = 0; i < bodies.length; i++) { bodies[i].vy = -80 - Math.random() * 220; bodies[i].va += (Math.random() - .5) * 200; }
        root.classList.add('is-falling');
        setTimeout(function () { dropShop(); finish(); }, 250);
      }
    }
    step(dt); draw();
    if (phase === 'fall' && t - fallStart > 1600) { root.classList.add('is-gone'); return; }
    requestAnimationFrame(frame);
  });
})();
