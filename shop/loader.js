// Loading screen for the shop, with real physics (Matter.js, shop/vendor/matter.min.js):
// weed buds (shop/drop/bud*.svg) pour in, bounce, tip and wedge into each other; once a bud comes to rest it
// locks in place (no jitter). When the pile reaches the very top, the floor opens, the whole pile tumbles out
// and the shop products fall in right behind it (shop.css .mb-drop-in).
// Only on a fresh visit that opens on the shop (not #videos/#about). Runs before shop.js (script order).
// html.mb-intro (inline script in <head>) keeps the page white until this takes over.
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

  var shop = null, ended = false, dropped = false;
  function prepShop() {                        // load product photos now, so they are there when they fall in
    shop = document.getElementById('shopView');
    if (!shop) return;
    shop.querySelectorAll('.mb-card img').forEach(function (im) { im.loading = 'eager'; });
    shop.querySelectorAll('.mb-card').forEach(function (c, k) { c.style.setProperty('--k', k); });
  }
  function dropProducts() {                    // the pile is leaving: products fall in right behind it (once only)
    if (dropped) return; dropped = true;
    prepShop();
    if (shop) {
      shop.classList.add('mb-drop-in');
      setTimeout(function () { shop.classList.remove('mb-drop-in'); }, 2600);
    }
    root.classList.add('is-falling');          // white lifts; only the falling buds stay on top
  }
  function end() {
    if (ended) return; ended = true; clearTimeout(safety);
    window.__mbLoading = false;
    document.dispatchEvent(new Event('mb:loaded-in'));
    root.remove();
  }
  var safety = setTimeout(function () { dropProducts(); end(); }, 9000);   // safety net if the animation never finishes

  var M = window.Matter;
  if (!M || (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches)) {
    setTimeout(function () { dropProducts(); end(); }, 300); return;
  }

  var W = innerWidth, H = innerHeight, dpr = Math.min(2, window.devicePixelRatio || 1);
  cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
  var ctx = cv.getContext('2d'); ctx.scale(dpr, dpr);
  var SIZE = Math.max(110, Math.min(230, W / 3.2));      // bud height in px: ~3 across on a phone
  var COLS = Math.max(3, Math.round(W / (SIZE * 0.75)));  // skyline columns used to fill evenly to the top

  // outline of each bud (convex, as fractions of the drawing's width/height) for its collision shape
  var HULLS = [[[0.019,0.606],[0.067,0.263],[0.203,0.122],[0.461,0.015],[0.522,0.01],[0.656,0.041],[0.828,0.243],[0.989,0.44],[0.956,0.684],[0.636,0.973],[0.608,0.99],[0.292,0.99],[0.272,0.976],[0.011,0.701]],[[0.406,0.007],[0.733,0.065],[0.739,0.069],[0.989,0.463],[0.989,0.468],[0.622,0.919],[0.456,0.991],[0.256,0.961],[0.25,0.956],[0.097,0.719],[0.086,0.694],[0.008,0.35],[0.014,0.339],[0.397,0.009]],[[0.742,0.093],[0.986,0.446],[0.978,0.615],[0.95,0.802],[0.944,0.808],[0.558,0.99],[0.217,0.943],[0.011,0.726],[0.017,0.518],[0.083,0.373],[0.264,0.158],[0.406,0.011],[0.419,0.008],[0.547,0.011]]];

  var engine = M.Engine.create({ gravity: { y: 2.6 } });
  var world = engine.world;
  var wallOpts = { isStatic: true, friction: .8 };
  var floor = M.Bodies.rectangle(W / 2, H + 50, W * 3, 100, wallOpts);
  M.Composite.add(world, [floor, M.Bodies.rectangle(-50, H / 2, 100, H * 4, wallOpts), M.Bodies.rectangle(W + 50, H / 2, 100, H * 4, wallOpts)]);

  var base = new URL('shop/drop/', document.baseURI).href, SRC = ['bud1.svg', 'bud2.svg', 'bud3.svg'], sprites = [], loaded = 0;
  SRC.forEach(function (f, i) {
    var im = new Image();
    im.onload = function () {
      var w0 = im.naturalWidth || 360, h0 = im.naturalHeight || 400, sc = SIZE * 1.15 / Math.max(w0, h0);
      var c = document.createElement('canvas'); c.width = Math.ceil(w0 * sc * dpr); c.height = Math.ceil(h0 * sc * dpr);
      c.getContext('2d').drawImage(im, 0, 0, c.width, c.height);
      sprites[i] = { c: c, w: w0 * sc, h: h0 * sc, hull: HULLS[i] };
      if (++loaded === SRC.length) requestAnimationFrame(frame);
    };
    im.onerror = function () { dropProducts(); end(); };
    im.src = base + f;
  });

  var buds = [], spawned = 0;
  function spawn(top) {
    // aim at one of the lowest columns so the pile rises evenly and reaches the top everywhere
    var order = top.map(function (v, c) { return [v + Math.random() * SIZE * .4, c]; }).sort(function (a, b) { return b[0] - a[0]; });
    var col = order[Math.random() < .7 ? 0 : 1][1];
    var sp = sprites[spawned++ % sprites.length], z = 0.82 + Math.random() * 0.3;
    var w = sp.w * z, hh = sp.h * z;
    var verts = sp.hull.map(function (p) { return { x: p[0] * w, y: p[1] * hh }; });
    var cen = M.Vertices.centre(verts);                       // the body sits on this point of the drawing
    // collision shape a bit smaller than the drawing, so neighbouring buds overlap like a real heap (no white gaps)
    verts = verts.map(function (v) { return { x: cen.x + (v.x - cen.x) * .8, y: cen.y + (v.y - cen.y) * .8 }; });
    var x = Math.min(W - w / 2, Math.max(w / 2, (col + .5) / COLS * W + (Math.random() - .5) * SIZE * .4));
    var b = M.Bodies.fromVertices(x, -hh, [verts], { restitution: .2, friction: .25, frictionStatic: .5, frictionAir: .01, density: .002 });
    M.Body.setAngle(b, (Math.random() - .5) * 1.2);
    M.Body.setVelocity(b, { x: (Math.random() - .5) * 3, y: 10 + Math.random() * 6 });
    M.Body.setAngularVelocity(b, (Math.random() - .5) * .25);
    M.Composite.add(world, b);
    buds.push({ b: b, sp: sp, z: z, cx: cen.x, cy: cen.y, w: w, h: hh, rest: 0, born: performance.now() });
  }

  // column skyline: the highest locked bud top in each column (H = empty)
  function skyline() {
    var top = []; for (var c = 0; c < COLS; c++) top.push(H);
    for (var i = 0; i < buds.length; i++) { var b = buds[i].b; if (!b.isStatic) continue;
      var c0 = Math.max(0, Math.floor(b.bounds.min.x / W * COLS)), c1 = Math.min(COLS - 1, Math.floor(b.bounds.max.x / W * COLS));
      for (c = c0; c <= c1; c++) top[c] = Math.min(top[c], b.bounds.min.y); }
    return top;
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < buds.length; i++) { var d = buds[i], b = d.b;
      if (b.bounds.min.y > H) continue;
      ctx.save(); ctx.translate(b.position.x, b.position.y); ctx.rotate(b.angle);
      ctx.drawImage(d.sp.c, -d.cx, -d.cy, d.w, d.h); ctx.restore(); }
  }

  var phase = 'fill', t0 = 0, prev = 0, acc = 0, nextSpawn = 0, fallAt = 0, STEP = 1000 / 120;
  function frame(t) {
    if (!t0) { t0 = prev = t; prepShop(); }
    var el = t - t0; acc += Math.min(100, t - prev); prev = t;
    while (acc >= STEP) { M.Engine.update(engine, STEP); acc -= STEP; }   // fixed steps at real speed

    if (phase === 'fill') {
      // lock: a bud that has come to rest (on the floor or the pile) turns solid, so the pile never jitters
      var moving = 0;
      for (var i = 0; i < buds.length; i++) { var d = buds[i], b = d.b; if (b.isStatic) continue;
        var slow = b.speed < .35 && Math.abs(b.angularVelocity) < .02;
        d.rest = slow ? d.rest + 1 : 0;
        if (d.rest > 10 || (t - d.born > 2000 && b.speed < 1.5)) M.Body.setStatic(b, true); else moving++; }
      var top = skyline(), lowest = Math.max.apply(null, top);
      var full = lowest < SIZE * 0.2;                        // every column piled to the top edge
      if (!full && el >= nextSpawn && moving < 16) { spawn(top); nextSpawn = el + 30; }
      if ((full && moving === 0 && el > 1200) || el > 5000) {
        root.dataset.full = full ? 'yes' : 'timeout';   // read by the site tests
        // the floor opens: unlock everything and let the whole pile tumble out
        phase = 'fall'; fallAt = t;
        M.Composite.remove(world, floor);
        buds.forEach(function (d) { M.Body.setStatic(d.b, false);
          M.Body.setVelocity(d.b, { x: (Math.random() - .5) * 2, y: 2 + Math.random() * 3 });
          M.Body.setAngularVelocity(d.b, (Math.random() - .5) * .12); });
        dropProducts();
      }
    } else if (t - fallAt > 1600 || buds.every(function (d) { return d.b.bounds.min.y > H; })) { end(); return; }
    draw();
    requestAnimationFrame(frame);
  }
})();
