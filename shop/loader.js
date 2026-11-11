// Loading screen for the shop: weed buds (shop/drop/bud*.svg) drop and stack until the screen is full to the
// very top, then the whole pile falls off the bottom and the shop products, stacked above it, fall right behind
// it into their places (shop.css .mb-drop-in). Only on a fresh visit that opens on the shop (not #videos/#about).
// Runs before shop.js (script order). html.mb-intro (inline script in <head>) keeps the page white until now.
(function () {
  var html = document.documentElement;
  var h = location.hash;
  if (h === '#videos' || h === '#about') { html.classList.remove('mb-intro'); return; }
  window.__mbLoading = true;
  var root = document.createElement('div');
  root.className = 'mb-loader';
  root.setAttribute('aria-hidden', 'true');
  var cv = document.createElement('canvas');
  root.appendChild(cv);
  document.body.appendChild(root);
  html.classList.remove('mb-intro');           // the loader's own white takes over

  var shop = null, ended = false;
  function prepShop() {                        // load product photos now, so they are there when they fall in
    shop = document.getElementById('shopView');
    if (!shop) return;
    shop.querySelectorAll('.mb-card img').forEach(function (im) { im.loading = 'eager'; });
    shop.querySelectorAll('.mb-card').forEach(function (c, k) { c.style.setProperty('--k', k); });
  }
  function dropProducts() {                    // the pile is leaving: products fall in right behind it
    prepShop();
    if (shop) {
      shop.classList.add('mb-drop-in');
      setTimeout(function () { shop.classList.remove('mb-drop-in'); }, 2600);
    }
    root.classList.add('is-falling');          // white lifts; only the falling buds stay on top
  }
  function end() {
    if (ended) return; ended = true;
    window.__mbLoading = false;
    document.dispatchEvent(new Event('mb:loaded-in'));
    root.remove();
  }
  setTimeout(function () { dropProducts(); end(); }, 8000);   // safety net

  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setTimeout(function () { root.classList.add('is-falling'); end(); }, 300); return;
  }

  var W = innerWidth, H = innerHeight, dpr = Math.min(2, window.devicePixelRatio || 1);
  cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
  var ctx = cv.getContext('2d'); ctx.scale(dpr, dpr);
  var R = Math.max(48, Math.min(100, W / 6.5));          // typical bud radius: ~3 across on a phone
  var COLS = Math.max(3, Math.round(W / (R * 1.8)));     // skyline columns used to fill evenly to the top
  var G = 2600;                                           // px/s²

  // draw each bud once into a bitmap, then stamp bitmaps every frame (cheap on phones)
  var base = new URL('shop/drop/', document.baseURI).href, SRC = ['bud1.svg', 'bud2.svg', 'bud3.svg'], sprites = [], loaded = 0;
  SRC.forEach(function (f, i) {
    var im = new Image();
    im.onload = function () {
      var w0 = im.naturalWidth || 360, h0 = im.naturalHeight || 400, sc = (R * 2.5) / Math.max(w0, h0);
      var c = document.createElement('canvas'); c.width = Math.ceil(w0 * sc * dpr); c.height = Math.ceil(h0 * sc * dpr);
      c.getContext('2d').drawImage(im, 0, 0, c.width, c.height);
      sprites[i] = { c: c, w: w0 * sc, h: h0 * sc };
      if (++loaded === SRC.length) requestAnimationFrame(frame);
    };
    im.onerror = function () { dropProducts(); end(); };
    im.src = base + f;
  });

  var bodies = [], phase = 'fill', t0 = 0, prev = 0, nextSpawn = 0, spawned = 0, fallAt = 0;

  // column skyline: the highest settled bud top in each column (H = empty)
  function skyline() {
    var top = []; for (var c = 0; c < COLS; c++) top.push(H);
    for (var i = 0; i < bodies.length; i++) { var b = bodies[i]; if (!b.sleep) continue;
      var c0 = Math.max(0, Math.floor((b.x - b.r) / W * COLS)), c1 = Math.min(COLS - 1, Math.floor((b.x + b.r) / W * COLS));
      for (c = c0; c <= c1; c++) top[c] = Math.min(top[c], b.y - b.r); }
    return top;
  }
  function spawn(top) {
    // aim at one of the lowest columns so the pile rises evenly and reaches the top everywhere
    var order = top.map(function (v, c) { return [v + Math.random() * R, c]; }).sort(function (a, b) { return b[0] - a[0]; });
    var c = order[Math.random() < .7 ? 0 : 1][1];
    var r = R * (0.8 + Math.random() * 0.4);
    var x = Math.min(W - r, Math.max(r, (c + .5) / COLS * W + (Math.random() - .5) * R * .6));
    bodies.push({ x: x, y: -r, vx: 0, vy: 300 + Math.random() * 200, r: r, a: Math.random() * 6.28, va: (Math.random() - .5) * 3,
      s: sprites[spawned++ % sprites.length], sleep: false, still: 0 });
  }

  function physics(dt) {
    var i, j, b, q;
    for (i = 0; i < bodies.length; i++) { b = bodies[i]; if (b.sleep) continue;
      b.vy += G * dt; b.x += b.vx * dt; b.y += b.vy * dt; b.a += b.va * dt; }
    if (phase !== 'fill') return;                         // falling: no collisions, the pile drops as one block
    for (var it = 0; it < 4; it++) {
      for (i = 0; i < bodies.length; i++) { b = bodies[i]; if (b.sleep) continue;
        if (b.y > H - b.r) { b.y = H - b.r; if (b.vy > 0) b.vy = 0; b.vx *= .8; b.touch = true; }
        if (b.x < b.r) { b.x = b.r; b.vx = 0; } if (b.x > W - b.r) { b.x = W - b.r; b.vx = 0; }
        for (j = 0; j < bodies.length; j++) { if (j === i) continue; q = bodies[j];
          var dx = b.x - q.x, dy = b.y - q.y, m = (b.r + q.r) * .9, d2 = dx * dx + dy * dy;
          if (d2 >= m * m || d2 < 1e-6) continue;
          var d = Math.sqrt(d2), nx = dx / d, ny = dy / d, pen = m - d;
          // a settled bud never moves; two moving buds share the push
          var share = q.sleep ? 1 : .5;
          b.x += nx * pen * share; b.y += ny * pen * share;
          if (!q.sleep) { q.x -= nx * pen * .5; q.y -= ny * pen * .5; }
          var vn = b.vx * nx + b.vy * ny; if (vn < 0) { b.vx -= vn * nx; b.vy -= vn * ny; }   // no bounce back in
          b.vx *= .9; b.va *= .85;
          if (q.sleep && ny < -.3) b.touch = true;          // resting on a settled bud below
        } } }
    // settle: a bud that rests on the floor or the pile and has stopped moving locks in place (no jitter)
    for (i = 0; i < bodies.length; i++) { b = bodies[i]; if (b.sleep) continue;
      var slow = Math.abs(b.vx) + Math.abs(b.vy) < 90;
      b.still = b.touch && slow ? b.still + 1 : 0; b.touch = false;
      if (b.still > 4) { b.sleep = true; b.vx = b.vy = b.va = 0; } }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < bodies.length; i++) { var b = bodies[i], z = b.r / R;
      if (b.y - b.r * 1.5 > H) continue;
      ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(b.a);
      ctx.drawImage(b.s.c, -b.s.w * z / 2, -b.s.h * z / 2, b.s.w * z, b.s.h * z); ctx.restore(); }
  }

  function frame(t) {
    if (!t0) { t0 = prev = t; prepShop(); }
    var el = t - t0, real = Math.min(0.05, (t - prev) / 1000); prev = t;
    var n = Math.max(1, Math.ceil(real / 0.008)), dt = real / n;   // fixed small steps at real speed
    for (var s = 0; s < n; s++) physics(dt);

    if (phase === 'fill') {
      var top = skyline(), lowest = Math.max.apply(null, top);
      var full = lowest < R * 0.35;                       // every column is piled up to the top edge
      var falling = 0; for (var i = 0; i < bodies.length; i++) if (!bodies[i].sleep) falling++;
      if (!full && el >= nextSpawn && falling < 6) { spawn(top); nextSpawn = el + 55; }
      if ((full && falling === 0 && el > 1200) || el > 5000) {
        phase = 'fall'; fallAt = t;
        bodies.forEach(function (b) { b.sleep = false; b.vx = 0; b.vy = 40 + Math.random() * 40; b.va = (Math.random() - .5) * .6; });
        dropProducts();
      }
    } else if (t - fallAt > 1100) { draw(); end(); return; }
    draw();
    requestAnimationFrame(frame);
  }
})();
