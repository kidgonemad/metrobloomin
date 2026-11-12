// White goo along the top and bottom edges of the green leaf band (the effect from the owner's
// reference video: a liquid pool sloshes, blobs bubble out and merge back, then it settles).
// Touch / mouse near an edge makes it bulge and splash. MBGoo.splash() replays the entrance.
//
// Drawn as metaballs: a field (pool + blobs) is computed on a half-size grid, thresholded with a
// soft edge, and scaled up into a canvas laid over the band.
(function () {
  var band = document.querySelector('.band');
  if (!band) return;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  var cv = document.createElement('canvas');
  cv.className = 'goo';
  cv.setAttribute('aria-hidden', 'true');
  band.appendChild(cv);
  var ctx = cv.getContext('2d');
  var lo = document.createElement('canvas'), lx = lo.getContext('2d');
  var SCALE = 2;                 // field grid: one cell per SCALE css px (1 on small bands, see size())
  var W = 0, H = 0, gw = 0, gh = 0, img = null;

  function size() {
    var r = band.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = Math.max(1, Math.round(r.width)); H = Math.max(1, Math.round(r.height));
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    SCALE = W * H > 60000 ? 2 : 1;
    gw = Math.ceil(W / SCALE); gh = Math.ceil(H / SCALE);
    lo.width = gw; lo.height = gh; img = lx.createImageData(gw, gh);
    for (var k = 0; k < img.data.length; k += 4) { img.data[k] = img.data[k + 1] = img.data[k + 2] = 255; }
  }

  // two pools: edge 0 hangs from the top of the band, edge 1 rises from the bottom (the products bar)
  var edges = [{ dir: 1, bumps: [] }, { dir: -1, bumps: [] }];
  var blobs = [];
  var t0 = 0, last = 0, running = false, splashAt = -1e9;
  var REST = 7;                  // settled pool depth (px)

  function now() { return performance.now() / 1000; }

  // how stirred up the liquid is: 1 right after a splash, easing to 0 over ~3.5 s
  function stir(t) { var s = t - splashAt; return s < 0 ? 0 : Math.exp(-s / 1.4); }

  function depth(e, x, t) {
    var a = stir(t), sx = x / W;
    var wave = Math.sin(sx * 9 + t * 2.3 + e.dir) * 0.5 + Math.sin(sx * 23 - t * 3.1) * 0.3 + Math.sin(sx * 41 + t * 4.7 + 2 * e.dir) * 0.2;
    var d = REST + 1.6 * Math.sin(sx * 13 + t * 0.9 + e.dir * 2)     // idle: a slow breathing edge
          + a * (H * 0.13 + H * 0.09 * wave);                          // splash: deeper and choppy
    for (var i = 0; i < e.bumps.length; i++) {                          // pointer bulges
      var b = e.bumps[i], age = t - b.t, dx = (x - b.x) / b.w;
      if (age < 0) continue;
      d += b.h * Math.exp(-dx * dx) * Math.exp(-age / 0.6) * Math.min(1, age * 12);
    }
    return d;
  }

  function spawn(e, x, t, power) {
    // heavy lumps: they bulge out of the pool, some pinch off, and fall back in
    var r = (4 + Math.random() * 6) * Math.min(1.3, 0.6 + power * 0.4) * (H / 120);
    blobs.push({ e: e, x: x, y: depth(e, x, t) * 0.85, vx: (Math.random() - 0.5) * 24, vy: (20 + Math.random() * 40) * power * (H / 120), r: r, born: t });
  }

  function step(t, dt) {
    // blobs fly out of the pool, gravity (toward their pool) pulls them back in, where they merge
    for (var i = blobs.length - 1; i >= 0; i--) {
      var b = blobs[i];
      b.vy -= 260 * dt; b.y += b.vy * dt; b.x += b.vx * dt; b.vx *= 0.98;
      if ((b.y < 0 && b.vy < 0) || t - b.born > 4) blobs.splice(i, 1);
    }
    // a stirred-up pool keeps throwing blobs
    var a = stir(t);
    edges.forEach(function (e) {
      if (Math.random() < a * dt * 22 * (W / 900 + 0.3)) spawn(e, Math.random() * W, t, 0.6 + a);
      e.bumps = e.bumps.filter(function (b) { return t - b.t < 3; });
    });
  }

  // narrow threshold band: a crisp liquid edge
  function smooth(v) { v = (v - 0.93) / 0.14; return v <= 0 ? 0 : v >= 1 ? 1 : v * v * (3 - 2 * v); }

  function render(t) {
    var d = img.data, top = edges[0], bot = edges[1];
    var lvT = new Float32Array(gw), lvB = new Float32Array(gw);
    for (var gx = 0; gx < gw; gx++) { lvT[gx] = depth(top, gx * SCALE, t); lvB[gx] = depth(bot, gx * SCALE, t); }
    // blobs in band coordinates
    var bl = blobs.map(function (b) { return { x: b.x, y: b.e.dir > 0 ? b.y : H - b.y, rr: b.r * b.r }; });
    for (var gy = 0; gy < gh; gy++) {
      var y = gy * SCALE, row = gy * gw;
      for (gx = 0; gx < gw; gx++) {
        var x = gx * SCALE;
        // pool field: 1 at the liquid's surface, rising inside it, falling off outside
        var f = Math.exp((lvT[gx] - y) / 4) + Math.exp((lvB[gx] - (H - y)) / 4);
        for (var i = 0; i < bl.length; i++) { var dx = x - bl[i].x, dy = y - bl[i].y; f += bl[i].rr / (dx * dx + dy * dy + 1); }
        d[(row + gx) * 4 + 3] = 255 * smooth(f);
      }
    }
    lx.putImageData(img, 0, 0);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, cv.width, cv.height);
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(lo, 0, 0, gw, gh, 0, 0, gw * SCALE * cv.width / W, gh * SCALE * cv.height / H);
  }

  var visible = true;
  function frame() {
    if (!running) return;
    var t = now(), dt = Math.min(0.05, t - last); last = t;
    step(t, dt); render(t);
    requestAnimationFrame(frame);
  }
  function start() { if (running || reduce) return; running = true; last = now(); requestAnimationFrame(frame); }
  function stop() { running = false; }
  function sync() { if (visible && !document.hidden) start(); else stop(); }

  // pointer: near an edge the pool bulges toward it and throws a few blobs
  function poke(ev) {
    var r = band.getBoundingClientRect(), x = ev.clientX - r.left, y = ev.clientY - r.top, t = now();
    if (x < 0 || x > W || y < -40 || y > H + 40) return;
    var e = y < H / 2 ? edges[0] : edges[1], dist = e.dir > 0 ? y : H - y;
    if (dist > H * 0.7) return;
    var lastB = e.bumps[e.bumps.length - 1];
    if (lastB && t - lastB.t < 0.08 && Math.abs(lastB.x - x) < 20) return;
    e.bumps.push({ x: x, w: 22 + Math.random() * 14, h: Math.max(5, H * 0.22 - dist * 0.25), t: t });
    if (Math.random() < 0.5) spawn(e, x, t, 0.8);
  }
  window.addEventListener('pointermove', poke, { passive: true });
  window.addEventListener('pointerdown', function (ev) { poke(ev); poke(ev); }, { passive: true });

  window.MBGoo = { splash: function () { splashAt = now(); blobs.length = 0; sync(); } };

  size();
  if (reduce) { splashAt = -1e9; render(now()); }
  addEventListener('resize', function () { size(); if (!running) render(now()); });
  if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { visible = es[0].isIntersecting; sync(); }).observe(band);
  document.addEventListener('visibilitychange', sync);
  // the site tells the shop when its view opens (shop/shop.js), so the goo splashes in every time
  addEventListener('message', function (e) { if (e.data === 'mb-shop-open') window.MBGoo.splash(); });
  window.MBGoo.splash();
})();
