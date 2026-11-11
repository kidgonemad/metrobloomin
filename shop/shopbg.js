// Shop background: an animated pile of skulls (both Seedance takes) and leaves, drifting smoke trails,
// and a smoke layer, all drawn in one WebGL canvas behind the products.
// Animated pieces come from "stacked alpha" MP4 atlases in shop/bg/ (colour on top, alpha mask below),
// because transparent WebM does not play on iPhone. Each atlas is a 3x3 grid of pieces.
// Interaction: tilt / drag / mouse moves the layers (depth parallax); tapping a skull or leaf wobbles it
// and puffs smoke. Runs only while the shop is open. Mounted by shop.js: MBShopBg.mount(shopEl).
(function () {
  var base = new URL('shop/bg/', document.baseURI).href;

  function mount(shop) {
    var cv = document.createElement('canvas');
    cv.className = 'mb-shopbg';
    cv.setAttribute('aria-hidden', 'true');
    shop.insertBefore(cv, shop.firstChild);
    var gl = cv.getContext('webgl', { alpha: false, antialias: false, premultipliedAlpha: false });
    if (!gl) return;                                             // no WebGL: the dark CSS background shows
    var still = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);

    // ---------- shaders ----------
    function prog(vs, fs) {
      function sh(t, s) { var o = gl.createShader(t); gl.shaderSource(o, s); gl.compileShader(o);
        if (!gl.getShaderParameter(o, gl.COMPILE_STATUS)) console.error(gl.getShaderInfoLog(o)); return o; }
      var p = gl.createProgram(); gl.attachShader(p, sh(gl.VERTEX_SHADER, vs)); gl.attachShader(p, sh(gl.FRAGMENT_SHADER, fs));
      gl.linkProgram(p); var u = {}; p.u = function (n) { return u[n] || (u[n] = gl.getUniformLocation(p, n)); }; return p;
    }
    var sprite = prog(
      'attribute vec2 c;uniform vec2 res,pos,size,sc;uniform float rot;uniform vec4 cell;varying vec2 uv;' +
      'void main(){vec2 p=c*size*sc;float s=sin(rot),k=cos(rot);p=vec2(p.x*k-p.y*s,p.x*s+p.y*k)+pos;' +
      'uv=cell.xy+(c+.5)*cell.zw;gl_Position=vec4(p.x/res.x*2.-1.,1.-p.y/res.y*2.,0.,1.);}',
      'precision mediump float;varying vec2 uv;uniform sampler2D tex;uniform float stacked,alpha;' +
      'void main(){vec4 o;if(stacked>.5){o=vec4(texture2D(tex,vec2(uv.x,uv.y*.5)).rgb,texture2D(tex,vec2(uv.x,.5+uv.y*.5)).r);}' +
      'else{o=texture2D(tex,uv);}gl_FragColor=vec4(o.rgb,o.a*alpha);}');
    var smoke = prog('attribute vec2 c;varying vec2 uv;void main(){uv=c+.5;gl_Position=vec4(c*2.,0.,1.);}',
      'precision highp float;varying vec2 uv;uniform vec2 res,ptr;uniform float t,touch;uniform vec3 b0,b1,b2;' +
      'float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}' +
      'float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}' +
      'float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<4;i++){s+=a*n(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return s;}' +
      'float puff(vec3 b,vec2 asp){float g=t-b.z;if(b.z<0.||g>2.2)return 0.;vec2 c=b.xy+vec2(0.,g*.08);float r=.04+g*.1;' +
      'float d=length((uv-c)*asp);return smoothstep(r,r*.3,d+(fbm((uv-c)*asp*7.+vec2(0.,-t*.6))-.5)*r*.9)*(1.-g/2.2);}' +
      'void main(){vec2 asp=vec2(res.x/res.y,1.);vec2 d=(uv-ptr)*asp;float dist=length(d);' +
      'vec2 p=uv*asp*1.6+d*exp(-dist*dist*6.)*touch*2.;' +
      'vec2 w=vec2(fbm(p*1.1+vec2(0.,-t*.09)),fbm(p*1.1+vec2(5.2,-t*.11)));' +
      'float v=fbm(p*1.25+w*2.+vec2(t*.015,-t*.2));' +
      'float a=(smoothstep(.5,.78,v)*.22+smoothstep(.55,.6,v)*(1.-smoothstep(.6,.66,v))*.18)*(1.-touch*exp(-dist*dist*7.)*.9);' +
      'a=max(a,max(puff(b0,asp),max(puff(b1,asp),puff(b2,asp)))*.8);gl_FragColor=vec4(vec3(.92),clamp(a,0.,.8));}');
    var quad = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, quad);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-.5, -.5, .5, -.5, -.5, .5, .5, .5]), gl.STATIC_DRAW);
    gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // ---------- textures: a still image first, then the playing video replaces it ----------
    function texture() { var t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, t);
      [gl.TEXTURE_WRAP_S, gl.TEXTURE_WRAP_T].forEach(function (k) { gl.texParameteri(gl.TEXTURE_2D, k, gl.CLAMP_TO_EDGE); });
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0])); return t; }
    function upload(t, src) { gl.bindTexture(gl.TEXTURE_2D, t); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, src); }
    function source(name, loop) {
      // stillTex = first frame (pieces at rest); tex = the playing video (only the few pieces animating right now)
      var s = { tex: texture(), stillTex: texture(), ready: false, video: null, prevT: 0 };
      var im = new Image(); im.onload = function () { upload(s.stillTex, im); s.ready = true; }; im.src = base + name + '.webp?v=2';
      if (still) return s;
      var v = document.createElement('video'); v.muted = true; v.defaultMuted = true; v.playsInline = true; v.loop = loop;
      v.setAttribute('muted', ''); v.setAttribute('playsinline', ''); v.preload = 'auto'; v.src = base + name + '.mp4?v=2';
      s.video = v; return s;
    }
    var SRC = { a: source('skulls-a', true), b: source('skulls-b', true), l: source('leaves', true) };
    var FILE = { a: 'skulls-a', b: 'skulls-b', l: 'leaves' };
    // tap a piece: it plays its own animation once from the start (its own copy of the video), then settles back to the
    // still. At most 4 at once; the oldest is dropped. The video starts and ends on the still frame, so nothing jumps.
    var solos = [];
    function solo(p) {
      if (still) return;
      if (p.solo) { p.solo.v.currentTime = 0; p.solo.v.play().catch(function () {}); return; }
      if (solos.length >= 4) endSolo(solos[0]);
      var v = document.createElement('video'); v.muted = true; v.defaultMuted = true; v.playsInline = true;
      v.setAttribute('muted', ''); v.setAttribute('playsinline', ''); v.preload = 'auto'; v.src = base + FILE[p.src] + '.mp4?v=2';
      var o = { p: p, v: v, tex: texture(), ready: false }; p.solo = o; solos.push(o);
      v.addEventListener('ended', function () { endSolo(o); });
      v.play().catch(function () { endSolo(o); });
    }
    function endSolo(o) { var i = solos.indexOf(o); if (i < 0) return; solos.splice(i, 1); o.p.solo = null;
      o.v.pause(); o.v.removeAttribute('src'); o.v.load(); gl.deleteTexture(o.tex); }
    window.__mbShopBg = SRC;                                           // read by the site tests
    window.__mbShopBgPieces = function () { return pieces; };
    var smokeTex = texture(), smokeReady = false, smokeImg = new Image();
    smokeImg.onload = function () { upload(smokeTex, smokeImg); smokeReady = true; }; smokeImg.src = base + 'smoke.webp';

    // ---------- the pile: fixed seed so it looks the same on every visit ----------
    var W = 0, H = 0, dpr = 1, pieces = [], trails = [];
    function rnd(seed) { return function () { seed |= 0; seed = seed + 0x6D2B79F5 | 0; var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
    function layout() {
      dpr = Math.min(1.5, window.devicePixelRatio || 1); W = innerWidth; H = innerHeight;
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      var r = rnd(7), S = Math.max(120, Math.min(250, W / 2.7)), step = S * .62;
      pieces = []; trails = [];
      for (var y = -step * .3; y < H + step; y += step)
        for (var x = -step * .3; x < W + step; x += step) {
          var d = r(), kind = r() < .66 ? (r() < .5 ? 'a' : 'b') : 'l';
          pieces.push({ src: kind, cell: Math.floor(r() * 9), x: x + (r() - .5) * step * .7, y: y + (r() - .5) * step * .7,
            size: S * (.62 + d * .55) * (kind === 'l' ? .9 : 1), rot: (r() - .5) * .9, d: d, s: 0, vs: 0, w: 0, vw: 0, ox: 0, oy: 0, vx: 0, vy: 0 });
        }
      pieces.sort(function (p, q) { return p.d - q.d; });              // far ones first, near ones on top
      for (var i = 0; i < 6; i++) trails.push({ cell: i % 8, x: r() * W, y0: r() * H, size: S * (.7 + r() * .5), d: .6 + r() * .4, ph: r() * 6.28, sp: 14 + r() * 16 });
    }
    layout(); addEventListener('resize', layout);

    // ---------- input ----------
    var aim = { x: 0, y: 0 }, ptr = { x: 0, y: 0 }, finger = { x: .5, y: .5 }, touch = 0, touchT = 0, tilt = false;
    var bursts = [[0, 0, -1], [0, 0, -1], [0, 0, -1]], bi = 0, t0 = performance.now();
    // the finger (or mouse) pushes the pile around: pieces near it are shoved away and dragged along, then spring back.
    // touch events keep firing while the page scrolls under the finger, so this works during a scroll-drag too.
    var hand = { x: -1e4, y: -1e4, vx: 0, vy: 0, on: 0, last: 0 };
    function handAt(x, y, down) {
      var now = performance.now(), dt = Math.max(8, now - hand.last);
      if (hand.on && now - hand.last < 120) { hand.vx = (x - hand.x) / dt * 16; hand.vy = (y - hand.y) / dt * 16; } else { hand.vx = hand.vy = 0; }
      hand.x = x; hand.y = y; hand.last = now; hand.on = down ? 1 : hand.on;
      finger = { x: x / W, y: 1 - y / H }; touchT = 1;
      if (!tilt) aim = { x: x / W * 2 - 1, y: y / H * 2 - 1 };
    }
    shop.addEventListener('pointermove', function (e) { if (e.pointerType === 'mouse') { hand.on = 1; handAt(e.clientX, e.clientY); } });
    shop.addEventListener('touchstart', function (e) { var t = e.touches[0]; hand.last = 0; handAt(t.clientX, t.clientY, true); }, { passive: true });
    shop.addEventListener('touchmove', function (e) { var t = e.touches[0]; handAt(t.clientX, t.clientY, true); }, { passive: true });
    shop.addEventListener('touchend', function () { hand.on = 0; }, { passive: true });
    shop.addEventListener('mouseleave', function () { hand.on = 0; });
    var lastScroll = 0;
    addEventListener('deviceorientation', function (e) { if (e.gamma == null) return; tilt = true;
      aim = { x: Math.max(-1, Math.min(1, e.gamma / 25)), y: Math.max(-1, Math.min(1, (e.beta - 45) / 25)) }; });
    var asked = false;
    shop.addEventListener('pointerdown', function (e) {
      if (!asked) { asked = true; var D = window.DeviceOrientationEvent;                     // iOS asks once, on a tap
        if (D && typeof D.requestPermission === 'function') D.requestPermission().catch(function () {}); }
      playAll();
      if (e.target.closest && e.target.closest('a,button')) return;                         // product links keep working
      bursts[bi++ % 3] = [e.clientX / W, 1 - e.clientY / H, (performance.now() - t0) / 1000];
      for (var i = pieces.length - 1; i >= 0; i--) { var p = pieces[i], px = p.x + ptr.x * p.d * 45 + p.ox, py = p.y + ptr.y * p.d * 45 - shop.scrollTop * .25 * p.d + p.oy;
        if (Math.hypot(e.clientX - px, e.clientY - py) < p.size * .38) { p.vs += .9; p.vw += (Math.random() - .5) * .8; solo(p); break; } }
    });

    // ---------- playback: only while the shop is open ----------
    var running = false;
    // only a few pieces animate at a time: each loop of an atlas video (which starts and ends on its first frame,
    // the same picture as the still) picks a fresh random handful; the rest show the still. Swaps happen on that
    // matching frame, so nothing jumps. The three videos start out of step, so the swaps don't all happen together.
    function shuffle(k) { var mine = pieces.filter(function (p) { return p.src === k; }), n = Math.max(1, Math.round(mine.length * .2));
      mine.forEach(function (p) { p.active = false; });
      for (var j = 0; j < n && mine.length; j++) mine.splice(Math.floor(Math.random() * mine.length), 1)[0].active = true; }
    var delay = { a: 0, b: 3300, l: 6600 }, begun = false;                // the first time, the three videos start out of step
    function playAll() {
      ['a', 'b', 'l'].forEach(function (k) { var v = SRC[k].video; if (!v || !v.paused) return;
        if (begun) v.play().catch(function () {});
        else setTimeout(function () { if (running && v.paused) v.play().catch(function () {}); }, delay[k]); });
      begun = true;
    }
    function pauseAll() { ['a', 'b', 'l'].forEach(function (k) { var v = SRC[k].video; if (v && !v.paused) v.pause(); }); solos.slice().forEach(endSolo); }
    function sync() {
      var on = shop.classList.contains('is-open') && !document.hidden;
      if (on && !running) { running = true; playAll(); requestAnimationFrame(frame); }
      if (!on && running) { running = false; pauseAll(); }
    }
    new MutationObserver(sync).observe(shop, { attributes: true, attributeFilter: ['class'] });
    document.addEventListener('visibilitychange', sync);

    // ---------- draw ----------
    function drawSprite(tex, stacked, cell, x, y, w, h, rot, sx, sy, alpha) {
      gl.uniform1f(sprite.u('stacked'), stacked); gl.uniform1f(sprite.u('alpha'), alpha); gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.uniform4f(sprite.u('cell'), cell[0], cell[1], cell[2], cell[3]); gl.uniform2f(sprite.u('pos'), x, y);
      gl.uniform2f(sprite.u('size'), w, h); gl.uniform2f(sprite.u('sc'), sx, sy); gl.uniform1f(sprite.u('rot'), rot);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
    function frame(ms) {
      if (!running) return;
      var t = (ms - t0) / 1000;
      ['a', 'b', 'l'].forEach(function (k) { var s = SRC[k], v = s.video;
        if (v && v.readyState >= 2) { if ((!s.live && v.currentTime < .3) || v.currentTime < s.prevT - .5) shuffle(k); s.prevT = v.currentTime; }   // new loop -> new handful
        if (v && v.readyState >= 2 && (!v.paused || !s.live)) { upload(s.tex, v); s.live = s.ready = true; } });
      solos.forEach(function (o) { if (o.v.readyState >= 2) { upload(o.tex, o.v); o.ready = true; } });
      ptr.x += (aim.x - ptr.x) * .06; ptr.y += (aim.y - ptr.y) * .06; touchT *= .97; touch += (touchT - touch) * .1;
      gl.viewport(0, 0, cv.width, cv.height); gl.clearColor(.043, .043, .043, 1); gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(sprite); gl.bindBuffer(gl.ARRAY_BUFFER, quad);
      var loc = gl.getAttribLocation(sprite, 'c'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      gl.uniform2f(sprite.u('res'), W, H);
      var scroll = shop.scrollTop, dS = scroll - lastScroll; lastScroll = scroll;
      if (Math.abs(dS) > 200) dS = 0;                                     // a jump (e.g. view switch), not a scroll
      for (var i = 0; i < pieces.length; i++) { var p = pieces[i], s = SRC[p.src]; if (!s.ready) continue;
        p.vs += -p.s * .18; p.vs *= .82; p.s += p.vs * .12; p.vw += -p.w * .12; p.vw *= .85; p.w += p.vw * .2;      // tap springs
        var bob = Math.sin(t * .8 + i) * 3 * p.d;
        var px = p.x + ptr.x * p.d * 45, py = p.y + ptr.y * p.d * 45 - scroll * .25 * p.d + bob;
        if (hand.on) {                                                     // push away from the finger and drag along with it
          var dx = px + p.ox - hand.x, dy = py + p.oy - hand.y, d = Math.hypot(dx, dy) || 1, R = p.size * 1.5;
          if (d < R) { var k = (1 - d / R) * (.6 + p.d * .6);
            p.vx += dx / d * k * 5 + hand.vx * k * .8; p.vy += dy / d * k * 5 + hand.vy * k * .8; p.vw += (hand.vx * dy - hand.vy * dx) / d * k * .0025; }
        }
        p.vy -= Math.max(-40, Math.min(40, dS)) * .3 * p.d;                                            // scrolling jiggles the pile, nearer pieces more
        p.vx += -p.ox * .035; p.vy += -p.oy * .035; p.vx *= .88; p.vy *= .88; p.ox += p.vx; p.oy += p.vy;   // spring home
        drawSprite(p.solo && p.solo.ready ? p.solo.tex : p.active && s.live ? s.tex : s.stillTex, 1, [(p.cell % 3) / 3, Math.floor(p.cell / 3) / 3, 1 / 3, 1 / 3],
          px + p.ox, py + p.oy, p.size, p.size,
          p.rot + p.w + ptr.x * p.d * .08, 1 + p.s * .22, 1 - p.s * .18, .4 + p.d * .6);
      }
      if (smokeReady) for (i = 0; i < trails.length; i++) { var q = trails[i];                 // drawn smoke trails drift up
        var y = ((q.y0 - t * q.sp) % (H + q.size * 2) + H + q.size * 2) % (H + q.size * 2) - q.size;
        drawSprite(smokeTex, 0, [(q.cell % 4) / 4, Math.floor(q.cell / 4) / 2, .25, .5], q.x + Math.sin(t * .6 + q.ph) * 14 + ptr.x * q.d * 34,
          y + ptr.y * q.d * 34, q.size, q.size, Math.sin(t * .4 + q.ph) * .12, 1, 1, .85);
      }
      gl.useProgram(smoke); loc = gl.getAttribLocation(smoke, 'c'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      gl.uniform2f(smoke.u('res'), W, H); gl.uniform2f(smoke.u('ptr'), finger.x, finger.y); gl.uniform1f(smoke.u('t'), t); gl.uniform1f(smoke.u('touch'), touch);
      gl.uniform3f(smoke.u('b0'), bursts[0][0], bursts[0][1], bursts[0][2]); gl.uniform3f(smoke.u('b1'), bursts[1][0], bursts[1][1], bursts[1][2]);
      gl.uniform3f(smoke.u('b2'), bursts[2][0], bursts[2][1], bursts[2][2]);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      window.__mbShopBgFrames = (window.__mbShopBgFrames || 0) + 1;
      requestAnimationFrame(frame);
    }
    sync();
  }
  window.MBShopBg = { mount: mount };
})();
