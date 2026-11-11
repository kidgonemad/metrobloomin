// Loading screen for the shop: weed buds (shop/drop/bud*.svg) drop and stack until the screen is full,
// the pile falls off the bottom, then the shop products drop into place (shop.css .mb-drop-in).
// Only on a fresh visit that opens on the shop (not #videos / #about). Runs before shop.js (script order).
// The page is already covered white from the first paint by html.mb-intro (inline script in <head> + shop.css).
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

  var done = false;
  function finish() {                          // products drop in as the white lifts; the header leaf starts
    if (done) return; done = true;
    var shop = document.getElementById('shopView');
    if (shop) {
      var cards = shop.querySelectorAll('.mb-card');
      for (var k = 0; k < cards.length; k++) cards[k].style.setProperty('--k', k);
      shop.classList.add('mb-drop-in');
      setTimeout(function () { shop.classList.remove('mb-drop-in'); }, 1000 + cards.length * 90);
    }
    root.classList.add('is-gone');
    window.__mbLoading = false;
    document.dispatchEvent(new Event('mb:loaded-in'));
    setTimeout(function () { root.remove(); }, 600);
  }
  setTimeout(finish, 7000);                    // safety net: never hold the shop longer than this

  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) { setTimeout(finish, 300); return; }

  var W = innerWidth, H = innerHeight, dpr = Math.min(2, window.devicePixelRatio || 1);
  cv.width = W * dpr; cv.height = H * dpr;
  var ctx = cv.getContext('2d');
  ctx.scale(dpr, dpr);
  // a few big buds of mixed sizes (about 3 across on a phone, 7 on desktop), enough to bury the screen
  var R = Math.max(50, Math.min(110, W / 6.5)), S = R * 2.5;
  var N = Math.min(70, Math.ceil(W * H * 1.25 / (Math.PI * R * R)));
  var G = 3200;

  // draw each bud once into its own bitmap, then just stamp bitmaps each frame (cheap on phones)
  var base = new URL('shop/drop/', document.baseURI).href, SRC = ['bud1.svg', 'bud2.svg', 'bud3.svg'], sprites = [], loaded = 0;
  SRC.forEach(function (f, i) {
    var im = new Image();
    im.onload = function () {
      var c = document.createElement('canvas'), sc = S / Math.max(im.naturalWidth || 360, im.naturalHeight || 400);
      var w = (im.naturalWidth || 360) * sc, hh = (im.naturalHeight || 400) * sc;
      c.width = Math.ceil(w * dpr); c.height = Math.ceil(hh * dpr);
      c.getContext('2d').drawImage(im, 0, 0, c.width, c.height);
      sprites[i] = { c: c, w: w, h: hh };
      if (++loaded === SRC.length) start();
    };
    im.onerror = function () { finish(); };
    im.src = base + f;
  });

  var bodies = [];
  function start() {
    // random spots, sizes and spins; drop times spread over ~1.9s so the pile builds up from the bottom
    for (var k = 0; k < N; k++) {
      var r = R * (0.78 + Math.random() * 0.45), x = r + Math.random() * (W - 2 * r);
      bodies.push({ x: x, y: -r - Math.random() * R, px: x, py: 0, r: r, a: Math.random() * 6.28, va: (Math.random() - .5) * .2,
        s: sprites[k % sprites.length], t: (k + Math.random() * 3) * (1900 / N), live: false });
    }
    bodies.forEach(function (b) { b.py = b.y - 4; });
    requestAnimationFrame(frame);
  }

  var t0 = 0, phase = 'fill', floor = H, fallT = 0;
  function frame(t) {
    if (!t0) t0 = t;
    var el = t - t0, dt = 1 / 60, i, j, b, q;
    var steps = Math.max(1, Math.min(4, Math.round((t - (frame.prev || t - 16.7)) / 16.7))); frame.prev = t;   // keep real speed on slow phones
    var live = bodies.filter(function (b) { if (!b.live && el >= b.t) b.live = true; return b.live; });
    for (var sub = 0; sub < 2 * steps; sub++) {
      var h2 = (dt / 2) * (dt / 2);
      for (i = 0; i < live.length; i++) { b = live[i];          // verlet: velocity is the last move, lightly damped
        var vx = (b.x - b.px) * .99, vy = (b.y - b.py) * .99;
        b.px = b.x; b.py = b.y; b.x += vx; b.y += vy + G * h2; b.a += b.va; }
      for (var it = 0; it < 6; it++) {                          // push overlapping buds apart, keep them on screen
        for (i = 0; i < live.length; i++) { b = live[i];
          if (b.y > floor - b.r) { b.y = floor - b.r; b.va *= .8; b.px += (b.x - b.px) * .3; }
          if (phase === 'fill') { if (b.x < b.r) b.x = b.r; if (b.x > W - b.r) b.x = W - b.r; }
          for (j = i + 1; j < live.length; j++) { q = live[j];
            var dx = q.x - b.x, dy = q.y - b.y, d2 = dx * dx + dy * dy, m = (b.r + q.r) * .92;   // a little overlap reads as a pile
            if (d2 < m * m && d2 > 1e-4) { var d = Math.sqrt(d2), o = (m - d) / 2 / d;
              b.x -= dx * o; b.y -= dy * o; q.x += dx * o; q.y += dy * o; b.va *= .95; q.va *= .95; } } } }
    }
    ctx.clearRect(0, 0, W, H);
    for (i = 0; i < live.length; i++) { b = live[i];
      var z = b.r / R;
      ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(b.a); ctx.drawImage(b.s.c, -b.s.w * z / 2, -b.s.h * z / 2, b.s.w * z, b.s.h * z); ctx.restore(); }

    if (phase === 'fill') {
      var moving = 0; for (i = 0; i < live.length; i++) moving = Math.max(moving, Math.abs(live[i].y - live[i].py));
      if ((live.length === bodies.length && el > 2100 && moving < 1.5) || el > 3300) {
        phase = 'fall'; fallT = t; floor = Infinity;               // the floor opens: the whole pile drops away
        for (i = 0; i < bodies.length; i++) { b = bodies[i]; b.py = b.y + 2 + Math.random() * 4; b.va = (Math.random() - .5) * .06; }
      }
    } else {
      var gone = true; for (i = 0; i < bodies.length; i++) if (bodies[i].y - bodies[i].r * 1.4 < H) { gone = false; break; }
      if (gone || t - fallT > 2200) { finish(); return; }
    }
    requestAnimationFrame(frame);
  }
})();
