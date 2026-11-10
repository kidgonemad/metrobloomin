// "Watch videos": liquid-metal blob scene (default) + index table.
// Each video lives inside a soft metaball blob; blobs merge where they touch with a chrome seam.
// Clips live in shop/videos (full) and shop/videos/preview (small silent loops + posters for the blobs).
(function () {
  var base = new URL('shop/', document.baseURI).href;
  // clips in shop/videos/NN.mp4 (full, with sound) + preview/NN.mp4 (small, silent, for the blobs) + preview/NN.jpg (poster)
  var videos = [
    { len: 12, shape: 'Portrait' }, { len: 34, shape: 'Wide' }, { len: 20, shape: 'Vertical' },
    { len: 46, shape: 'Wide' }, { len: 19, shape: 'Vertical' }, { len: 10, shape: 'Square' },
    { len: 15, shape: 'Square' }, { len: 29, shape: 'Vertical' }, { len: 25, shape: 'Vertical' }
  ];
  var N = videos.length;
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function fmt(d) { var p = d.split('-'); return MONTHS[+p[1] - 1] + ' ' + p[0]; }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function kind(v) { return v.shape; }
  function fmt(n) { return Math.floor(n / 60) + ':' + pad(n % 60); }
  videos.forEach(function (v, i) { v.i = i; v.name = 'Metro Bloomin ' + pad(i + 1); v.mp4 = base + 'videos/' + pad(i + 1) + '.mp4'; v.prev = base + 'videos/preview/' + pad(i + 1); v.hasMp4 = true; });

  // ---------- DOM ----------
  var el = document.createElement('section');
  el.id = 'videoView';
  el.className = 'mb-vid mb-vid--blobs';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-modal', 'true');
  el.setAttribute('aria-label', 'Videos');
  el.innerHTML =
    '<header class="mb-vid__head">' +
      '<div class="mb-vid__left"><a class="mb-vid__brand" href="#" data-close>Metro Bloomin</a>' +
      '<button class="mb-vid__back" type="button" aria-label="Back to videos">←</button></div>' +
      '<div class="mb-vid__title">Videos</div>' +
      '<div class="mb-vid__right"><button class="mb-vid__mode" type="button">Index</button>' +
      '<button class="mb-vid__close" type="button" data-close>Close</button></div></header>' +
    '<div class="mb-vid__stage"><canvas class="mb-vid__canvas" aria-hidden="true"></canvas>' +
      '<div class="mb-vid__label" aria-hidden="true"></div></div>' +
    '<div class="mb-vid__page"><div class="mb-vid__cols" role="row">' +
      '<span>No.</span><span>Title</span><span class="mb-vid__col--format">Format</span><span>Length</span><span class="mb-vid__col--link">Sound</span></div>' +
      '<div class="mb-vid__list">' + videos.map(function (v) {
        return '<div class="mb-vid__row" data-i="' + v.i + '">' +
          '<button class="mb-vid__row-main" type="button">' +
            '<span class="mb-vid__num">' + pad(v.i + 1) + '</span><span class="mb-vid__name">' + v.name + '</span>' +
            '<span class="mb-vid__col--format">' + kind(v) + '</span><span>' + fmt(v.len) + '</span>' +
            '<span class="mb-vid__col--link">On</span></button></div>';
      }).join('') + '</div></div>' +
    '<div class="mb-vid__player" aria-hidden="true"><div class="mb-vid__screen"></div>' +
      '<div class="mb-vid__controls"><div class="mb-vid__timeline"><div class="mb-vid__track"><div class="mb-vid__progress"></div><div class="mb-vid__knob"></div></div></div>' +
      '<div class="mb-vid__crow"><span class="mb-vid__time">00:00</span>' +
      '<span class="mb-vid__transport"><button type="button" data-play>Play</button><button type="button" data-pause>Pause</button></span>' +
      '<button type="button" class="mb-vid__fs" data-fs>Fullscreen</button></div></div>' +
      '<div class="mb-vid__caption"></div></div>' +
    '<div class="mb-vid__hint" aria-hidden="true"><span class="mb-vid__dots"><i></i><i></i><i></i></span><span class="mb-vid__hint-text">Scroll to explore, click a video to play</span></div>';
  document.body.appendChild(el);

  var canvas = el.querySelector('.mb-vid__canvas');
  var label = el.querySelector('.mb-vid__label');
  var player = el.querySelector('.mb-vid__player');
  var screen = el.querySelector('.mb-vid__screen');
  var caption = el.querySelector('.mb-vid__caption');

  // ---------- media atlas (one texture holding every blob's picture/video frame) ----------
  var CELL = 384, GC = 5, GR = 2;
  var atlas = document.createElement('canvas'); atlas.width = CELL * GC; atlas.height = CELL * GR;
  var actx = atlas.getContext('2d');
  actx.fillStyle = '#d9d9d9'; actx.fillRect(0, 0, atlas.width, atlas.height);
  var atlasDirty = true;
  function drawCover(src, sw, sh, i) {
    var x = (i % GC) * CELL, y = Math.floor(i / GC) * CELL, s = Math.max(CELL / sw, CELL / sh);
    var w = sw * s, h = sh * s;
    actx.save(); actx.beginPath(); actx.rect(x, y, CELL, CELL); actx.clip();
    actx.drawImage(src, x + (CELL - w) / 2, y + (CELL - h) / 2, w, h); actx.restore();
    atlasDirty = true;
  }
  videos.forEach(function (v) {
    var img = new Image();                         // poster until the preview clip has a frame
    img.onload = function () { if (!(v.vid && v.vid.readyState >= 2)) drawCover(img, img.naturalWidth, img.naturalHeight, v.i); };
    img.src = v.prev + '.jpg';
    var vid = document.createElement('video');
    vid.src = v.prev + '.mp4'; vid.muted = true; vid.loop = true; vid.playsInline = true; vid.preload = 'auto';
    vid.setAttribute('playsinline', ''); vid.setAttribute('muted', '');
    v.vid = vid;
  });

  // ---------- WebGL ----------
  var gl = canvas.getContext('webgl2', { antialias: false, premultipliedAlpha: false });
  var MAXC = N * 3;
  var VS = '#version 300 es\nin vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
  var FS = '#version 300 es\nprecision highp float;\n' +
    '#define NB ' + N + '\n#define NC ' + MAXC + '\n' +
    'uniform vec2 uRes;uniform float uTime;uniform float uDpr;uniform vec4 uC[NC];uniform vec4 uB[NB];' +
    'uniform sampler2D uAtlas;uniform vec2 uGrid;out vec4 o;\n' +
    // per-blob field at a point
    'void fieldAt(vec2 p,out float tot,out vec2 g,out int best,out float b1,out float b2,out float own[NB]){' +
    ' for(int b=0;b<NB;b++)own[b]=0.;tot=0.;g=vec2(0.);' +
    ' for(int i=0;i<NC;i++){vec4 c=uC[i];vec2 d=p-c.xy;float dd=max(dot(d,d),1.);float r2=c.z*c.z;float f=r2/dd;' +
    '  tot+=f;g+=-2.*r2*d/(dd*dd);int bi=int(c.w+.5);for(int b=0;b<NB;b++){if(b==bi)own[b]+=f;}}' +
    ' best=0;b1=0.;b2=0.;for(int b=0;b<NB;b++){float v=own[b];if(v>b1){b2=b1;b1=v;best=b;}else if(v>b2){b2=v;}}}\n' +
    'void main(){vec2 p=vec2(gl_FragCoord.x,uRes.y-gl_FragCoord.y);' +
    ' float tot;vec2 g;int best;float b1,b2;float own[NB];fieldAt(p,tot,g,best,b1,b2,own);' +
    ' vec3 bg=vec3(.961);float w=fwidth(tot)*1.2+1e-4;float a=smoothstep(1.-w,1.+w,tot);' +
    ' if(a<=0.){o=vec4(bg,1.);return;}' +
    // slow flow warps which blob owns the inside (silhouette stays clean)
    ' vec2 q=p+uDpr*22.*vec2(sin(p.y*.010+uTime*.35)+.5*sin(p.x*.017-uTime*.5),cos(p.x*.009-uTime*.3)+.5*cos(p.y*.015+uTime*.45));' +
    ' float t2;vec2 g2;int ob;float o1,o2;float own2[NB];fieldAt(q,t2,g2,ob,o1,o2,own2);' +
    ' vec4 B=uB[ob];' +
    // fake height from the field: steep near the silhouette and along seams between videos
    ' float s=tot-1.;float edge=1.-smoothstep(0.,.32,s);float seam=smoothstep(.72,.98,o2/max(o1,1e-4));' +
    ' float m=clamp(max(edge*sqrt(edge),seam*.9),0.,1.);' +
    ' vec2 gn=length(g)>0.?normalize(g):vec2(0.);vec3 n=normalize(vec3(-gn*m*1.6,1.));' +
    // video / image inside the blob, slightly refracted by the surface
    ' vec2 lc=(q-B.xy)/(B.z*2.3)+.5+n.xy*.06;lc=clamp(lc,.01,.99);' +
    ' float cx=mod(float(ob),uGrid.x),cy=floor(float(ob)/uGrid.x);vec3 vid=texture(uAtlas,(vec2(cx,cy)+lc)/uGrid).rgb;' +
    ' vid=mix(vid,vid*1.08+.03,B.w);' +
    // liquid-metal shading: reflected fake studio environment + specular
    ' vec3 r=reflect(vec3(0.,0.,-1.),n);float e=.5+.5*r.y;' +
    ' vec3 env=mix(vec3(.10),vec3(.97),smoothstep(.15,.85,e));env=mix(env,vec3(.55),.25*sin(r.x*6.+uTime*.6)*.5+.12);' +
    ' float spec=pow(max(dot(r,normalize(vec3(-.4,.6,.7))),0.),48.)*1.4;vec3 metal=env+spec;' +
    ' vec3 col=mix(vid,metal,m);' +
    ' o=vec4(mix(bg,col,a),1.);}';
  var prog = null, U = {};
  function compile(type, src) { var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { console.warn(gl.getShaderInfoLog(s)); return null; } return s; }
  if (gl) {
    var vs = compile(gl.VERTEX_SHADER, VS), fs = compile(gl.FRAGMENT_SHADER, FS);
    if (vs && fs) {
      prog = gl.createProgram(); gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { console.warn(gl.getProgramInfoLog(prog)); prog = null; }
    }
  }
  if (prog) {
    gl.useProgram(prog);
    var buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    var loc = gl.getAttribLocation(prog, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    ['uRes', 'uTime', 'uDpr', 'uC', 'uB', 'uAtlas', 'uGrid'].forEach(function (k) { U[k] = gl.getUniformLocation(prog, k); });
    var tex = gl.createTexture(); gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.uniform1i(U.uAtlas, 0); gl.uniform2f(U.uGrid, GC, GR);
  } else {
    el.classList.remove('mb-vid--blobs'); el.classList.add('mb-vid--index'); // no WebGL2: index only
    el.querySelector('.mb-vid__mode').hidden = true;
  }

  // ---------- layout + motion ----------
  var W = 0, H = 0, DPR = 1, blobs = [], scrollY = 0, scrollT = 0, maxScroll = 0, hover = -1, mouse = { x: -1e4, y: -1e4 };
  function rand(i, k) { var x = Math.sin(i * 127.1 + k * 311.7) * 43758.5453; return x - Math.floor(x); }
  function layout() {
    W = el.clientWidth; H = el.clientHeight; DPR = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(W * DPR); canvas.height = Math.round(H * DPR);
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    var cols = W > 1100 ? 4 : W > 700 ? 3 : 2, cell = (W - 40) / cols, R = cell * (cols === 2 ? 0.25 : 0.2);
    var rows = Math.ceil(N / cols), rowH = cell * (cols === 2 ? 1.0 : 0.82), top = 90 + R;
    blobs = videos.map(function (v, i) {
      var c = i % cols, r = Math.floor(i / cols), stagger = (r % 2) * cell * 0.33;
      return { x: 20 + cell * (c + 0.5) + (rand(i, 1) - 0.5) * cell * 0.22 + (cols > 2 ? stagger - cell * 0.16 : 0),
               y: top + r * rowH + (rand(i, 2) - 0.5) * rowH * 0.25, R: R * (0.85 + rand(i, 3) * 0.3), h: 0,
               ph: rand(i, 4) * 6.28, sp: 0.18 + rand(i, 5) * 0.2 };
    });
    maxScroll = Math.max(0, top + (rows - 1) * rowH + R * 1.6 + 60 - H);
    scrollT = Math.min(scrollT, maxScroll);
  }
  var cdata = new Float32Array(MAXC * 4), bdata = new Float32Array(N * 4);
  function step(t) {
    scrollY += (scrollT - scrollY) * 0.12;
    for (var i = 0; i < N; i++) {
      var b = blobs[i], target = i === hover ? 1 : 0; b.h += (target - b.h) * 0.12;
      var cx = b.x + Math.sin(t * b.sp + b.ph) * b.R * 0.12, cy = b.y - scrollY + Math.cos(t * b.sp * 0.8 + b.ph) * b.R * 0.12;
      var R = b.R * (1 + 0.12 * b.h);
      b.cx = cx; b.cy = cy; b.cr = R;
      bdata.set([cx * DPR, cy * DPR, R * DPR, b.h], i * 4);
      for (var k = 0; k < 3; k++) {
        var ang = t * (0.35 + k * 0.17) * (k % 2 ? -1 : 1) + b.ph + k * 2.1, off = R * (0.22 + 0.06 * Math.sin(t * 0.7 + k));
        var r = R * (k === 0 ? 0.78 : 0.6 + 0.05 * Math.sin(t * 0.9 + k * 1.7 + b.ph));
        cdata.set([(cx + Math.cos(ang) * off) * DPR, (cy + Math.sin(ang) * off) * DPR, r * DPR, i], (i * 3 + k) * 4);
      }
    }
  }
  function pick(x, y) {
    var best = -1, bd = 1e9;
    for (var i = 0; i < N; i++) { var b = blobs[i]; if (!b.cx) continue; var d = Math.hypot(x - b.cx, y - b.cy) / b.cr; if (d < 1.15 && d < bd) { bd = d; best = i; } }
    return best;
  }
  var raf = 0, t0 = performance.now();
  function frame(now) {
    raf = requestAnimationFrame(frame);
    if (!prog || !el.classList.contains('mb-vid--blobs') || player.classList.contains('is-on')) return;
    var t = (now - t0) / 1000; step(t);
    var anyVid = false;
    videos.forEach(function (v) { if (v.vid && v.vid.readyState >= 2) { drawCover(v.vid, v.vid.videoWidth, v.vid.videoHeight, v.i); anyVid = true; } });
    if (atlasDirty) { gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, atlas); atlasDirty = false; }
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(U.uRes, canvas.width, canvas.height); gl.uniform1f(U.uTime, t); gl.uniform1f(U.uDpr, DPR);
    gl.uniform4fv(U.uC, cdata); gl.uniform4fv(U.uB, bdata);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    if (hover >= 0) {
      var b = blobs[hover], v = videos[hover];
      label.style.transform = 'translate(' + Math.round(b.cx) + 'px,' + Math.round(b.cy + b.cr + 14) + 'px)';
    }
  }
  function startPreviews(on) { videos.forEach(function (v) { if (v.vid) { if (on) v.vid.play().catch(function () {}); else v.vid.pause(); } }); }

  // ---------- input ----------
  var stage = el.querySelector('.mb-vid__stage');
  stage.addEventListener('wheel', function (e) { e.preventDefault(); scrollT = Math.max(0, Math.min(maxScroll, scrollT + e.deltaY)); }, { passive: false });
  var drag = null;
  stage.addEventListener('pointerdown', function (e) { drag = { y: e.clientY, s: scrollT, moved: false }; });
  stage.addEventListener('pointermove', function (e) {
    var r = stage.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    if (drag && e.pointerType !== 'mouse') { var dy = drag.y - e.clientY; if (Math.abs(dy) > 6) drag.moved = true; scrollT = Math.max(0, Math.min(maxScroll, drag.s + dy)); }
    var h = pick(mouse.x, mouse.y);
    if (h !== hover) {
      hover = h; stage.style.cursor = h >= 0 ? 'pointer' : 'default';
      if (h >= 0) { var v = videos[h]; label.textContent = pad(h + 1) + '  ' + v.name + ', ' + fmt(v.len); }
      label.classList.toggle('is-on', h >= 0);
    }
  });
  stage.addEventListener('pointerleave', function () { hover = -1; label.classList.remove('is-on'); });
  stage.addEventListener('pointerup', function (e) {
    var moved = drag && drag.moved; drag = null; if (moved) return;
    var r = stage.getBoundingClientRect(), h = pick(e.clientX - r.left, e.clientY - r.top);
    if (h >= 0) play(h);
  });
  el.querySelector('.mb-vid__list').addEventListener('click', function (e) {
    var row = e.target.closest('.mb-vid__row'); if (row) play(+row.dataset.i);
  });

  // ---------- player ----------
  var current = null, fsOn = false;
  var progress = el.querySelector('.mb-vid__progress'), knob = el.querySelector('.mb-vid__knob'), timeEl = el.querySelector('.mb-vid__time');
  function mmss(s) { s = Math.max(0, Math.floor(s || 0)); return pad(Math.floor(s / 60)) + ':' + pad(s % 60); }
  function play(i) {
    var v = videos[i]; current = v;
    el.classList.add('mb-vid--playing'); player.classList.add('is-on'); player.setAttribute('aria-hidden', 'false');
    startPreviews(false);
    caption.textContent = pad(i + 1) + '  ' + v.name + ', ' + fmt(v.len);
    if (v.hasMp4) {
      player.classList.add('has-video');
      screen.innerHTML = '<video playsinline preload="auto" src="' + v.mp4 + '"></video>';
      var vid = screen.querySelector('video');
      vid.addEventListener('timeupdate', function () {
        var f = vid.duration ? vid.currentTime / vid.duration : 0;
        progress.style.width = f * 100 + '%'; knob.style.left = f * 100 + '%'; timeEl.textContent = mmss(vid.currentTime);
      });
      vid.addEventListener('play', syncBtns); vid.addEventListener('pause', syncBtns);
      vid.play().catch(function () {}); syncBtns();
    } else {
      player.classList.remove('has-video');
      screen.innerHTML = '';
    }
  }
  function syncBtns() {
    var vid = screen.querySelector('video'), playing = vid && !vid.paused;
    player.querySelector('[data-play]').classList.toggle('is-dim', !!playing);
    player.querySelector('[data-pause]').classList.toggle('is-dim', !playing);
  }
  function stop() {
    screen.innerHTML = ''; current = null; fsOn = false;
    player.classList.remove('is-on', 'is-fs'); player.setAttribute('aria-hidden', 'true'); el.classList.remove('mb-vid--playing');
    if (el.classList.contains('is-open')) startPreviews(true);
  }
  player.querySelector('[data-play]').addEventListener('click', function () { var v = screen.querySelector('video'); if (v) v.play(); });
  player.querySelector('[data-pause]').addEventListener('click', function () { var v = screen.querySelector('video'); if (v) v.pause(); });
  player.querySelector('[data-fs]').addEventListener('click', function () { fsOn = !fsOn; player.classList.toggle('is-fs', fsOn); });
  player.querySelector('.mb-vid__timeline').addEventListener('pointerdown', function (e) {
    var v = screen.querySelector('video'); if (!v || !v.duration) return;
    var r = e.currentTarget.getBoundingClientRect(); v.currentTime = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * v.duration;
  });
  el.querySelector('.mb-vid__back').addEventListener('click', stop);

  // ---------- open / close / mode ----------
  var modeBtn = el.querySelector('.mb-vid__mode');
  modeBtn.addEventListener('click', function () {
    var toIndex = el.classList.contains('mb-vid--blobs');
    el.classList.toggle('mb-vid--blobs', !toIndex); el.classList.toggle('mb-vid--index', toIndex);
    modeBtn.textContent = toIndex ? 'Blobs' : 'Index'; startPreviews(!toIndex);
  });
  var lastFocus = null;
  function open() {
    lastFocus = document.activeElement;
    var nav = document.querySelector('nav.menu'); if (nav) nav.classList.remove('is-open');
    el.classList.add('is-open'); layout(); startPreviews(true);
    if (!raf) raf = requestAnimationFrame(frame);
    el.setAttribute('tabindex', '-1'); el.focus({ preventScroll: true });
  }
  function close() {
    stop(); startPreviews(false); el.classList.remove('is-open');
    cancelAnimationFrame(raf); raf = 0;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  el.querySelectorAll('[data-close]').forEach(function (b) { b.addEventListener('click', function (e) { e.preventDefault(); close(); }); });
  window.addEventListener('resize', function () { if (el.classList.contains('is-open')) layout(); });

  ['wheel', 'touchstart', 'touchmove', 'pointerdown', 'pointermove', 'mousedown', 'mousemove'].forEach(function (t) {
    el.addEventListener(t, function (e) { e.stopPropagation(); }, { passive: t !== 'wheel' });
  });
  window.addEventListener('keydown', function (e) {
    if (!el.classList.contains('is-open')) return;
    if (e.key === 'Escape') { if (player.classList.contains('is-on')) stop(); else close(); }
    e.stopImmediatePropagation();
  }, true);
  window.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('#videos')) { e.preventDefault(); e.stopImmediatePropagation(); open(); }
  }, true);
  window.__mbVideos = { open: open, play: play, close: close };
})();
