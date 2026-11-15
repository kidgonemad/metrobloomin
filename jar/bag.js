// The Metro Bloomin mylar bags (jspaaydesign's packaging, art baked from the owner's screenshots), for the
// collabs page. Same interface as jar.js: mount(container, variant) -> { destroy, toggle, collab }.
//   variant '35': the tall 3.5 g bag; '28': the wide 28 g bag
//   - a stand-up pouch (doypack): two printed faces sealed at the sides, a folded oval bottom (gusset) it stands on,
//     tapering up to the flat top seal; puffed out by how full it is; bare silver inside
//   - idle: quarter turns (front, side, back), gentle float; drag to spin, drag up/down to tilt the view
//   - tap: the first time, the tear strip rips off from the notch; then the zip opens left to right, the mouth
//     opens, the buds float up out of it and hover while the bag goes slack. Tap again: the buds drop back in one
//     by one, each one puffing the bag back up, and the zip presses shut. (The strip stays off: it's been opened.)
import * as THREE from 'three'
import { DANCES, BUD_DANCES, WORD_MOVES, applyDance, routine } from './dance.js?v=9'
import { GLTFLoader } from './vendor/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from './vendor/jsm/loaders/DRACOLoader.js'

const BASE = new URL('./', import.meta.url).href
// sizes in scene units (bagmarks.py prints the zip / tear line at the same STRIP / ZIP / SEAM)
export const BAGS = {
  35: { front: 'bag35_front.webp?v=1', back: 'bag35_back.webp?v=3', W: 1.21, H: 1.62, T: 0.13, G: 0.27, buds: 6 },   // G: half the
  28: { front: 'bag28_front.webp?v=1', back: 'bag28_back.webp?v=1', W: 1.6, H: 1.21, T: 0.12, G: 0.24, buds: 12 },
  // SKYBOX: the blue / purple "Premium Cannabis" bag from the owner's video (printed the same both sides)
  sky: { front: 'sky_front.webp?v=1', back: 'sky_back.webp?v=1', W: 1.21, H: 1.62, T: 0.13, G: 0.27, buds: 6, scene: 'sky',
    bg: 'sky_bg.webp?v=1', bgColor: '#02030a', bounce: '#5a7dff', ground: '#101a3a', bottom: 'sky_front.webp?v=1', bottomAt: [0.6, 0.05, 0.38],
    glow: ['rgba(90,130,255,0.45)', 'rgba(110,70,200,0.16)', 'rgba(30,10,90,0)'] },
  // TSUNAMI (Wheezy): the orange / yellow wave bag, a squarer pouch
  tsu: { front: 'tsu_front.webp?v=3', back: 'tsu_back.webp?v=3', W: 1.4, H: 1.4, T: 0.13, G: 0.26, buds: 8, scene: 'waves',
    bg: 'tsu_waves.webp?v=2',   // the bag's own curly waves, drifting
    bgColor: '#0a0502', bounce: '#ffa030', ground: '#3a1a04', bottom: 'tsu_front.webp?v=3', bottomAt: [0.04, 0.12, 0.4],
    glow: ['rgba(255,170,40,0.45)', 'rgba(255,90,20,0.16)', 'rgba(90,30,0,0)'] },
  // GELATO 41: the purple "Premium Cannabis" bag
  gel: { front: 'gel_front.webp?v=3', back: 'gel_back.webp?v=3', W: 1.21, H: 1.62, T: 0.13, G: 0.27, buds: 6,
    bg: 'gel_bg.webp?v=1', bgColor: '#06030a', bounce: '#b07cff', ground: '#24123a', bottom: 'gel_front.webp?v=3', bottomAt: [0.05, 0.3, 0.5],
    glow: ['rgba(180,120,255,0.45)', 'rgba(240,120,220,0.15)', 'rgba(60,20,90,0)'] },
  // NIGHTSHADE (Lil Baby): white snakeskin with the two snakes
  ns: { front: 'ns_front.webp?v=2', back: 'ns_back.webp?v=2', W: 1.21, H: 1.62, T: 0.13, G: 0.27, buds: 6,
    bg: 'ns_snakes.webp?v=1',   // the bag's own snakes, drifting
    bgColor: '#040404', bounce: '#e8e4dc', ground: '#1c1c1c', bottom: 'ns_front.webp?v=2', bottomAt: [0.05, 0.05, 0.45],
    glow: ['rgba(235,230,220,0.35)', 'rgba(160,160,160,0.12)', 'rgba(30,30,30,0)'] },     // oval bottom's depth
}
const STRIP = 0.085, ZIP = 0.07, SEAM = 0.05

export function mount(box, variant = '35') {
  const V0 = BAGS[variant] || BAGS[35], { W, H, T, G } = V0
  const V = Object.assign({ bg: 'bag_bg.webp?v=1', bgColor: '#030402', bounce: '#7cff4a', ground: '#123a0a', bottom: BAGS[28].front, bottomAt: null,
    glow: ['rgba(120,230,60,0.45)', 'rgba(70,170,30,0.16)', 'rgba(20,80,0,0)'] }, V0)
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5))   // phones: 1.5x is near-identical and far cheaper to draw
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.outputColorSpace = THREE.SRGBColorSpace
  box.appendChild(renderer.domElement)
  const scene = new THREE.Scene(); scene.background = new THREE.Color(V.bgColor)
  const camera = new THREE.PerspectiveCamera(30, 1, 0.05, 60)

  // ---- reflections: the jars' studio (white key, white rim, green bounce) ----
  const pm = new THREE.PMREMGenerator(renderer), studio = new THREE.Scene()
  const panel = (w, h, color, k, pos) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(k), side: THREE.DoubleSide }))
    m.position.set(...pos); m.lookAt(0, 0, 0); studio.add(m)
  }
  studio.background = new THREE.Color('#4a4a50')
  panel(6, 3, '#ffffff', 6, [-4, 5, 3]); panel(1.2, 6, '#ffffff', 3.5, [5, 1, 1]); panel(6, 3, V.bounce, 0.8, [0, -4, 1])
  panel(3, 2, '#ffffff', 1.4, [0, 2, 6]); panel(10, 10, '#ffffff', 2, [0, 6, 0])
  scene.environment = pm.fromScene(studio, 0.03).texture
  const tl = new THREE.TextureLoader()
  const tex = (f) => { const t = tl.load(BASE + f); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t }

  // ---- the bag ----
  const dancer = new THREE.Group(); scene.add(dancer)      // does the collab's dance (dance.js) round the base
  const bag = new THREE.Group(); dancer.add(bag)
  const BODY_TOP = H / 2 - STRIP, ZIP_Y = BODY_TOP - ZIP, BOT = -H / 2
  // soft-touch print: matte with a slight sheen; the inside is bare silver mylar
  // printed silver mylar: the ink sits on metallic foil, so the whole bag has a silver sheen, with a glossy coat
  const print = (map) => new THREE.MeshPhysicalMaterial({ map, roughness: 0.3, metalness: 0.55, clearcoat: 0.7, clearcoatRoughness: 0.18, envMapIntensity: 1.5 })
  const inner = new THREE.MeshStandardMaterial({ color: '#dfe3e6', metalness: 1, roughness: 0.24, side: THREE.BackSide, envMapIntensity: 1.5 })
  const faces = []                                  // { geo, base: Float32Array of (x, y), mesh, back }
  function face(map, back) {
    const geo = new THREE.PlaneGeometry(W, BODY_TOP - BOT, 44, 64)
    geo.translate(0, (BODY_TOP + BOT) / 2, 0)
    const uv = geo.attributes.uv, k = (BODY_TOP - BOT) / H   // the body shows the art below the tear strip
    for (let i = 0; i < uv.count; i++) uv.setY(i, uv.getY(i) * k)
    const g = new THREE.Group(); if (back) g.rotation.y = Math.PI
    const m = new THREE.Mesh(geo, print(map)), mi = new THREE.Mesh(geo, inner)
    g.add(m, mi); bag.add(g)
    const p = geo.attributes.position, basePos = new Float32Array(p.count * 2)
    for (let i = 0; i < p.count; i++) { basePos[i * 2] = p.getX(i); basePos[i * 2 + 1] = p.getY(i) }
    faces.push({ geo, base: basePos, back })
  }
  const frontTex = tex(V.front), backTex = tex(V.back)
  face(frontTex, false); face(backTex, true)

  // the tear strip: both faces' top band, sealed flat; peels off from the notch (left) and flies away
  const strip = new THREE.Group(); strip.position.y = BODY_TOP; bag.add(strip)
  // a mask for the strip: white, with the two V notches (one each side, halfway up the strip) black = cut away
  const notchMask = (() => {
    // (in the bag art's own uv: the strip shows the top STRIP / H of it)
    const c = document.createElement('canvas'); c.width = 1024; c.height = 2048; const g = c.getContext('2d')
    g.fillStyle = '#fff'; g.fillRect(0, 0, 1024, 2048); g.fillStyle = '#000'
    const d = 0.05 / W * 1024, hh = 0.026 / H * 2048, cy = 0.55 * STRIP / H * 2048
    for (const [x0, sx] of [[0, 1], [1024, -1]]) { g.beginPath(); g.moveTo(x0, cy - hh); g.lineTo(x0 + sx * d, cy); g.lineTo(x0, cy + hh); g.closePath(); g.fill() }
    const t = new THREE.CanvasTexture(c); return t
  })()
  const strips = []
  for (const [map, back] of [[frontTex, false], [backTex, true]]) {
    const geo = new THREE.PlaneGeometry(W, STRIP, 30, 3); geo.translate(0, STRIP / 2, 0)
    const uv = geo.attributes.uv, k0 = (BODY_TOP - BOT) / H
    for (let i = 0; i < uv.count; i++) uv.setY(i, k0 + uv.getY(i) * (1 - k0))
    const g = new THREE.Group(); if (back) g.rotation.y = Math.PI
    // the tear notches are cut out of the strip (see-through), not printed on
    const pm = print(map); pm.alphaMap = notchMask; pm.alphaTest = 0.5
    const im = inner.clone(); im.alphaMap = notchMask; im.alphaTest = 0.5
    g.add(new THREE.Mesh(geo, pm), new THREE.Mesh(geo, im)); strip.add(g)
    const p = geo.attributes.position, b = new Float32Array(p.count * 2)
    for (let i = 0; i < p.count; i++) { b[i * 2] = p.getX(i); b[i * 2 + 1] = p.getY(i) }
    strips.push({ geo, base: b, back })
  }
  // the folded bottom (gusset): an oval the two faces open out to at the base, printed in the bag's border green
  // outside, silver inside
  const GK = 0.92                                                       // the bottom corners fold in a little
  const oval = new THREE.Shape(); oval.absellipse(0, 0, W / 2 * GK, G, 0, Math.PI * 2, false, 0)
  const ovalGeo = new THREE.ShapeGeometry(oval, 48)
  { const uv = ovalGeo.attributes.uv, pp = ovalGeo.attributes.position, RX = W / 2 * GK
    for (let i = 0; i < uv.count; i++) uv.setXY(i, (pp.getX(i) / RX + 1) / 2, (pp.getY(i) / G + 1) / 2) }
  ovalGeo.rotateX(Math.PI / 2); ovalGeo.translate(0, BOT, 0)
  // the bottom's print: the bag's skull pattern, the fold across the middle (where the gusset tucks in), the curved
  // seals at both ends (where it's welded to the sides) and its border
  const bc = document.createElement('canvas'); bc.width = 1024; bc.height = Math.round(1024 * G / (W / 2 * GK))
  const bottomTex = new THREE.CanvasTexture(bc); bottomTex.colorSpace = THREE.SRGBColorSpace; bottomTex.anisotropy = 8
  const art = new Image(); art.onload = () => {
    const g = bc.getContext('2d'), w = bc.width, h = bc.height
    // plain skulls and smoke at the sides' print scale: the 28 g front's top right (under its zip, right of the big leaf)
    if (V.bottomAt) {                                                    // a given patch: [x, y, width] as fractions of the art
      const [fx, fy, fw] = V.bottomAt, sw = art.width * fw
      g.drawImage(art, art.width * fx, art.height * fy, sw, sw * h / w, 0, 0, w, h)
    } else {
      const ppu = art.width / BAGS[28].W, sw = Math.min(art.width * 0.62, W * GK * ppu)
      g.drawImage(art, art.width - sw - 40, 0.2 * ppu, sw, sw * h / w, 0, 0, w, h)
    }
    g.lineCap = 'round'
    const line = (y, c, lw) => { g.strokeStyle = c; g.lineWidth = lw; g.beginPath(); g.moveTo(w * 0.1, y); g.lineTo(w * 0.9, y); g.stroke() }
    line(h / 2 - 4, 'rgba(0,0,0,0.6)', 7); line(h / 2 + 4, 'rgba(255,255,255,0.32)', 5)          // the fold
    for (const sx of [1, -1]) {                                                                      // the end seals
      g.strokeStyle = 'rgba(95,158,69,0.95)'; g.lineWidth = 26; g.beginPath()
      g.ellipse(sx > 0 ? w * 0.03 : w * 0.97, h / 2, w * 0.12, h * 0.52, 0, sx > 0 ? -Math.PI / 2 : Math.PI / 2, sx > 0 ? Math.PI / 2 : Math.PI * 1.5); g.stroke()
    }
    g.strokeStyle = '#5f9e45'; g.lineWidth = 22; g.beginPath(); g.ellipse(w / 2, h / 2, w / 2 - 11, h / 2 - 11, 0, 0, Math.PI * 2); g.stroke()
    g.strokeStyle = 'rgba(0,0,0,0.6)'; g.lineWidth = 4; g.beginPath(); g.ellipse(w / 2, h / 2, w / 2 - 22, h / 2 - 22, 0, 0, Math.PI * 2); g.stroke()
    bottomTex.needsUpdate = true
  }; art.src = BASE + V.bottom
  bag.add(new THREE.Mesh(ovalGeo, new THREE.MeshPhysicalMaterial({ map: bottomTex, roughness: 0.55, clearcoat: 0.35, clearcoatRoughness: 0.35 })))
  const ovalIn = new THREE.Mesh(ovalGeo, inner); ovalIn.position.y = 0.004; bag.add(ovalIn)   // faces down: its back (silver) shows from inside
  bag.position.y = -0.02

  // ---- shape: puffed by `fill`, the mouth opened by `mouth` (the zip runs open left to right with `zipT`) ----
  const sm = (a, b, x) => { const t = THREE.MathUtils.clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t) }
  const halfIn = W / 2 - SEAM
  function shape(f, mouth, zipT, wob, t) {
    for (const F of faces) {
      const p = F.geo.attributes.position, b = F.base
      for (let i = 0; i < p.count; i++) {
        const x = b[i * 2], y = b[i * 2 + 1]
        const ex = THREE.MathUtils.clamp((halfIn - Math.abs(x)) / halfIn, 0, 1)            // 0 on the side seams
        const ty = THREE.MathUtils.clamp((y - BOT - SEAM) / (ZIP_Y - BOT - SEAM), 0, 1)       // 0 bottom seam .. 1 zip
        const px = Math.pow(Math.sin(ex * Math.PI / 2), 0.7)
        const pyz = ty >= 1 ? 0 : Math.pow(Math.sin(ty * Math.PI), 0.55) * (1 - 0.25 * ty)   // full low, pinched at the zip and the bottom seam
        // stand-up pouch: the faces open out to the oval bottom (an ellipse across), narrowing up to the top seal
        const gx = Math.sqrt(Math.max(0, 1 - (x / (W / 2 * GK)) ** 2)), gy = Math.pow(Math.cos(THREE.MathUtils.clamp((y - BOT) / (BODY_TOP - BOT), 0, 1) * Math.PI / 2), 0.9)   // full most of the way, pinched at the top
        let z = G * gx * gy + f * T * px * pyz
        // slack and crinkly when (nearly) empty
        z += (1 - f) * 0.012 * px * pyz * Math.sin(x * 23 + y * 17 + (F.back ? 1.7 : 0)) * Math.sin(y * 31 - x * 9)
        // the mouth: from below the zip up to the top edge, the two lips spread apart (an oval: sealed at the seams)
        const lip = sm(ZIP_Y - 0.42, BODY_TOP, y)
        const zp = THREE.MathUtils.clamp(zipT * 1.5 - (x / W + 0.5) * 0.5, 0, 1)            // the zip opens left to right
        z += mouth * 0.42 * Math.pow(ex, 0.4) * lip * lip * zp
        // filling wobble (a bud just dropped in)
        z *= 1 + wob * 0.08 * Math.sin(t * 22 + y * 4) * px
        // filled pouches pull their sides in and their bottom up a little
        const xs = x * (1 - 0.06 * f * pyz) * (1 - (1 - GK) * Math.pow(1 - THREE.MathUtils.clamp((y - BOT) / 0.35, 0, 1), 2)), ys = y
        p.setXYZ(i, xs, ys, z + 0.003)   // +0.003: front and back faces apart at the seams (no jagged flicker)
      }
      p.needsUpdate = true; F.geo.computeVertexNormals()
    }
  }
  // the rip: from the notch (left) across the top along the perforation; behind the tear the strip is pulled up off
  // the bag (a clean gap opens under it, its torn edge ragged), bending up and back a little
  function tear(tT) {
    const front = -W / 2 + tT * W * 1.2
    for (const S of strips) {
      const p = S.geo.attributes.position, b = S.base, sg = S.back ? -1 : 1
      for (let i = 0; i < p.count; i++) {
        const x = b[i * 2], y = b[i * 2 + 1], xw = sg * x
        const pr = THREE.MathUtils.clamp((front - xw) / 0.5, 0, 1)
        const rag = y < 0.002 ? 0.008 * Math.sin(x * 97) * pr : 0          // the torn bottom edge, ragged
        const lift = pr * (0.05 + 0.1 * pr) + rag
        p.setXYZ(i, x, y + lift, 0.004 - sg * 0.04 * pr * pr * (y / STRIP + 0.3))   // 0.004: front and back strips apart (no flicker)
      }
      p.needsUpdate = true; S.geo.computeVertexNormals()
    }
  }

  // ---- backdrop: the bags' skull / leaf pattern, dim, drifting in two layers (like the jars') ----
  const bgTex = tex(V.bg), bgTex2 = bgTex.clone()
  bgTex.wrapS = bgTex.wrapT = THREE.RepeatWrapping; bgTex.repeat.set(3, 3)
  const bg = new THREE.Mesh(new THREE.PlaneGeometry(14, 14), new THREE.MeshBasicMaterial({ map: bgTex, color: new THREE.Color(0.38, 0.38, 0.38), toneMapped: false }))
  bg.position.set(0, 0.4, -6); scene.add(bg)
  bgTex2.repeat.set(2, 2); bgTex2.needsUpdate = true
  const bg2 = new THREE.Mesh(new THREE.PlaneGeometry(14, 14), new THREE.MeshBasicMaterial({ map: bgTex2, color: new THREE.Color(0.25, 0.25, 0.25), transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }))
  bg2.position.set(0, 0.4, -4.5); scene.add(bg2)
  // a living backdrop per bag: SKYBOX night -> day sky with clouds, TSUNAMI rolling waves, NIGHTSHADE slithering snakes
  const NOISE = `
        varying vec2 vUv; uniform float uTime, uDay;
        float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
        float fbm(vec2 p){ float v = 0.0, a = 0.5; for (int k = 0; k < 5; k++) { v += a * n(p); p = p * 2.03 + 17.1; a *= 0.5; } return v; }`
  const SCENES = {
    sky: `
        void main(){
          vec2 uv = vUv; float y = uv.y;
          vec3 night = mix(vec3(0.01, 0.015, 0.05), vec3(0.03, 0.04, 0.12), y);
          vec3 day = mix(vec3(0.62, 0.8, 0.97), vec3(0.16, 0.45, 0.9), smoothstep(0.25, 1.0, y));
          float d = uDay; vec3 col = mix(night, day, d);
          col += vec3(0.5, 0.22, 0.32) * (1.0 - abs(d * 2.0 - 1.0)) * (1.0 - y) * 0.35;
          vec2 sp = uv * 900.0; vec2 cell = floor(sp), fp = fract(sp) - 0.5;
          float on = step(0.985, h(cell)), r = length(fp);
          float st = on * smoothstep(0.45, 0.0, r) * (0.55 + 0.45 * sin(uTime * 2.5 + h(cell + 3.0) * 40.0));
          col += vec3(st) * (1.0 - d) * smoothstep(0.2, 0.6, y);
          vec2 cp = uv * vec2(3.0, 5.0) + vec2(uTime * 0.025, 0.0);
          float c = smoothstep(0.5, 0.78, fbm(cp) * 0.85 + fbm(cp * 2.3 + 4.0) * 0.3) * smoothstep(0.08, 0.5, y);
          col = mix(col, mix(vec3(0.12, 0.14, 0.24), vec3(1.0), d), c * mix(0.35, 0.92, d));
          gl_FragColor = vec4(col * 0.9, 1.0);
        }`,
    // TSUNAMI: rows of curling waves rolling sideways, orange sunset sea with teal depths and white foam crests
    // TSUNAMI: an open sea to the horizon (own ocean shader): choppy waves rolling towards you, sky reflections,
    // the sun's glint and foam on the crests, a warm sunset sky
    waves: `
        mat2 rot = mat2(1.6, 1.2, -1.2, 1.6);
        float sea(vec2 p, float t) {
          float h = 0.0, a = 0.95, f = 0.16;
          for (int k = 0; k < 5; k++) {
            vec2 q = p * f + vec2(0.0, t * (0.45 + float(k) * 0.12));
            float w = 1.0 - abs(n(q) * 2.0 - 1.0);             // a sharp crest
            h += a * pow(w, 2.6);
            p = rot * p; a *= 0.45; f *= 1.0;
          }
          return h;
        }
        void main(){
          vec2 sp = (vUv - 0.5) * 0.78;                       // the visible part of the plane, as a view direction
          vec3 rd = normalize(vec3(sp.x, sp.y - 0.05, -1.0));
          vec3 sun = normalize(vec3(0.15, 0.12, -1.0));
          // sky: deep teal overhead to a warm orange horizon, the sun and its glow
          float up = max(rd.y, 0.0);
          vec3 sky = mix(vec3(1.0, 0.55, 0.22), vec3(0.06, 0.2, 0.3), pow(up * 3.0, 0.6));
          float sd = max(dot(rd, sun), 0.0);
          sky += vec3(1.0, 0.75, 0.4) * pow(sd, 400.0) * 2.0 + vec3(1.0, 0.45, 0.15) * pow(sd, 12.0) * 0.5;
          vec3 col = sky;
          if (rd.y < 0.0) {
            vec3 ro = vec3(0.0, 2.2, uTime * -1.6);
            float d = ro.y / -rd.y; vec3 p = ro + rd * d;
            float e = 0.08 + d * 0.004;
            float h = sea(p.xz, uTime), hx = sea(p.xz + vec2(e, 0.0), uTime), hz = sea(p.xz + vec2(0.0, e), uTime);
            vec3 nrm = normalize(vec3(h - hx, e * mix(0.45, 5.0, clamp(d / 80.0, 0.0, 1.0)), h - hz));
            float fres = pow(clamp(1.0 - dot(nrm, -rd), 0.0, 1.0), 3.0) * 0.65;
            vec3 rr = reflect(rd, nrm); rr.y = abs(rr.y);
            float ru = max(rr.y, 0.0);
            vec3 refl = mix(vec3(1.0, 0.55, 0.22), vec3(0.06, 0.2, 0.3), pow(ru * 3.0, 0.6));
            vec3 deep = vec3(0.0, 0.09, 0.13), body = vec3(0.04, 0.3, 0.32);
            vec3 water = mix(deep, body, clamp(h * 0.9, 0.0, 1.0) * 0.6);
            col = mix(water, refl, fres);
            col += vec3(1.0, 0.7, 0.4) * pow(max(dot(rr, sun), 0.0), 60.0) * 1.4;        // the sun's glint
            col = mix(col, vec3(0.95, 0.92, 0.85), smoothstep(0.82, 1.05, h) * 0.55 * (1.0 - clamp(d / 60.0, 0.0, 1.0)));   // foam on the crests
            col = mix(col, sky, clamp(pow(d / 140.0, 1.4), 0.0, 1.0));                     // haze to the horizon
          }
          gl_FragColor = vec4(pow(col, vec3(0.9)) * 0.9, 1.0);
        }`,
    // NIGHTSHADE: dark, with pale snakeskin snakes slowly slithering across, a fine scale grid on each body
    snakes: `
        void main(){
          vec2 uv = vUv; vec3 col = vec3(0.025);
          for (int k = 0; k < 5; k++) {
            float fk = float(k), dir = mod(fk, 2.0) * 2.0 - 1.0;
            float x = uv.x * 2.4 + uTime * 0.06 * dir + fk * 2.1;
            float cy = 0.12 + fk * 0.19 + 0.06 * sin(x * 3.0 + fk);
            float w = 0.028 + 0.008 * sin(x * 1.3 + fk), d = abs(uv.y - cy);
            float body = smoothstep(w, w - 0.006, d);
            float mesh = smoothstep(0.06, 0.12, abs(fract(x * 22.0 + (uv.y - cy) * 70.0) - 0.5)) * smoothstep(0.06, 0.12, abs(fract(x * 22.0 - (uv.y - cy) * 70.0) - 0.5));
            float shade = 1.0 - pow(d / w, 2.0) * 0.6;
            vec3 skin = mix(vec3(0.12), vec3(0.78, 0.76, 0.72), mesh) * shade;
            float edge = smoothstep(w + 0.004, w, d) - body;
            col = mix(col, skin, body); col += vec3(0.5) * edge * 0.5;
          }
          gl_FragColor = vec4(col * 0.6, 1.0);
        }`,
  }
  let skyMat = null
  if (V.scene && SCENES[V.scene]) {
    skyMat = new THREE.ShaderMaterial({ uniforms: { uTime: { value: 0 }, uDay: { value: 0 } }, toneMapped: false, depthWrite: false,
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: NOISE + SCENES[V.scene] })
    bg.material.dispose(); bg.material = skyMat; bg2.visible = false
  }
  let hotAir = null
  // TSUNAMI: a wave puppet theatre between the background and the bag. Three rows of wave flats (cut-out waves that
  // slide side to side) and, behind each, Japanese-style wave puppets on wooden sticks that pop up from behind the row,
  // rock back and forth, then sink and disappear
  const stage = []
  let stageSky = null
  if (V.scene === 'stage') {
    // the sky: one woodblock print (paper, red sun, cloud band, Fuji), not tiled, not drifting
    stageSky = tex('tsu_sky.webp?v=1'); bg.material.map = stageSky; bg.material.color.setRGB(0.8, 0.8, 0.8); bg.material.needsUpdate = true; bg2.visible = false
    bg.scale.set(0.62, 0.62, 1); bg.position.y = 0.7
    const rowTex = tex('tsu_row.webp?v=2'); rowTex.wrapS = THREE.RepeatWrapping
    const flatMat = (col, ph) => new THREE.ShaderMaterial({ uniforms: { uTime: { value: 0 } }, transparent: true, toneMapped: false,
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: `varying vec2 vUv; uniform float uTime;
        void main(){
          float x = vUv.x * 30.0 + uTime * 0.8 + ${ph.toFixed(1)};
          float crest = 0.9 + 0.035 * sin(x) + 0.015 * sin(x * 2.7 + uTime);
          if (vUv.y > crest) discard;
          vec3 c = mix(vec3(${col.map((v) => (v * 0.45).toFixed(3)).join(',')}), vec3(${col.map((v) => v.toFixed(3)).join(',')}), smoothstep(0.3, crest, vUv.y));
          float foam = smoothstep(0.02, 0.0, crest - vUv.y);
          float edge = smoothstep(0.035, 0.022, crest - vUv.y) - foam;
          c = mix(c, vec3(0.97, 0.95, 0.9), foam); c = mix(c, vec3(0.04, 0.1, 0.14), edge * 0.8);
          gl_FragColor = vec4(c * 0.8, 1.0);
        }` })
    const pupTex = [tex('tsu_puppet0.png?v=1'), tex('tsu_puppet1.png?v=1')]
    const ROWS = [{ z: -3.4, crest: 1.0, col: [0.12, 0.42, 0.55], w: 10 }, { z: -2.5, crest: 0.4, col: [0.92, 0.48, 0.12], w: 9 }, { z: -1.6, crest: -0.2, col: [0.06, 0.32, 0.4], w: 8 }]
    ROWS.forEach((r, k) => {
      // a row of curling waves (own woodblock-style art), repeating sideways; its crest line on r.crest
      const H2 = 1.5, rt = rowTex.clone(); rt.needsUpdate = true; rt.repeat.set(r.w / 2.2, 1)
      const flat = new THREE.Mesh(new THREE.PlaneGeometry(r.w, H2), new THREE.MeshBasicMaterial({ map: rt, transparent: true, alphaTest: 0.5, toneMapped: false, color: new THREE.Color().setScalar(0.62 + 0.15 * k) }))
      flat.position.set(0, r.crest - (H2 * 0.72 - H2 / 2), r.z); scene.add(flat)
      // under each row: plain deep sea down past the bottom of the screen (no paper sky showing through)
      const sea = new THREE.Mesh(new THREE.PlaneGeometry(r.w, 4), new THREE.MeshBasicMaterial({ color: new THREE.Color(0x0f2748).multiplyScalar(0.62 + 0.15 * k), toneMapped: false }))
      sea.position.set(0, flat.position.y - H2 / 2 - 2 + 0.01, r.z); scene.add(sea)
      stage.push({ flat, row: r, k })
      for (let j = 0; j < 2; j++) {                                   // two puppets behind each row
        const pw = 1.15 - k * 0.12, geo = new THREE.PlaneGeometry(pw, pw * 1.25); geo.translate(0, pw * 1.25 / 2, 0)
        const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: pupTex[(j + k) % 2], transparent: true, alphaTest: 0.4, toneMapped: false }))
        m.position.z = r.z - 0.12; scene.add(m)
        stage.push({ pup: m, row: r, size: pw, x: (j ? 1 : -1) * (0.62 + 0.18 * ((k * 7 + j * 3) % 5) / 4) * (1 + 0.15 * (2 - k)), period: 7 + k * 1.7 + j * 2.3, off: (k * 2.9 + j * 4.1) })
      }
    })
  }
  const glow = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 256
    const g = c.getContext('2d'), gr = g.createRadialGradient(128, 128, 0, 128, 128, 128)
    gr.addColorStop(0, V.glow[0]); gr.addColorStop(0.45, V.glow[1]); gr.addColorStop(1, V.glow[2])
    g.fillStyle = gr; g.fillRect(0, 0, 256, 256)
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t
  })()
  const FLOOR_Y = bag.position.y + BOT - 0.004
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(4.5, 4.5), new THREE.MeshBasicMaterial({ map: glow, transparent: true, depthWrite: false, toneMapped: false }))
  floor.rotation.x = -Math.PI / 2; floor.position.y = FLOOR_Y; scene.add(floor)
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.6, 48), new THREE.MeshBasicMaterial({ color: '#000', transparent: true, opacity: 0.5, depthWrite: false }))
  shadow.rotation.x = -Math.PI / 2; shadow.scale.set(W / 1.1, (G + 0.08) / 0.6, 1); shadow.position.y = FLOOR_Y + 0.002; scene.add(shadow)
  scene.add(new THREE.HemisphereLight('#ffffff', V.ground, 0.15))

  // ---- buds (the jars' model): inside the bag; float up out of the mouth and hover around it ----
  const draco = new DRACOLoader().setDecoderPath(BASE + 'draco/')
  const buds = []
  const HW = W / 2 + 0.38
  // where each bud hovers: down both sides of the bag (the 28 g has twice as many, in two columns each side)
  const NB = V.buds, rows = Math.ceil(NB / 2), HOVER = []
  for (let i = 0; i < NB; i++) {
    const side = i % 2 ? 1 : -1, r = i >> 1, far = NB > 6 && r % 2 ? 0.36 : 0
    HOVER.push([side * (HW + far + (r % 3) * 0.04), 0.78 - r * (1.46 / Math.max(1, rows - 1)), 0.38 + 0.05 * (r % 3)])
  }
  const HWMAX = Math.max(HW + (NB > 6 ? 0.44 : 0.1), W / 2 + 1.3)   // room for the buds' routines round the bag
  new GLTFLoader().setDRACOLoader(draco).load(BASE + 'bud_lo.glb?v=1', (g) => {
    const src = g.scene, b = new THREE.Box3().setFromObject(src), sz = b.getSize(new THREE.Vector3())
    const k = (NB > 6 ? 0.38 : 0.44) / Math.max(sz.x, sz.y, sz.z)
    src.position.sub(b.getCenter(new THREE.Vector3()))
    HOVER.forEach((hp, i) => {
      const holder = new THREE.Group(), o = src.clone(true); holder.add(o); holder.scale.setScalar(k * (0.85 + 0.3 * ((i * 37) % 10) / 10))
      o.traverse((m) => { if (m.isMesh) m.material.envMapIntensity = 1.3 })
      buds.push({ obj: holder, hover: new THREE.Vector3(...hp),
        rot: new THREE.Vector3(Math.random() * 6, Math.random() * 6, Math.random() * 6), ph: i * 1.3, wasIn: true })
      holder.visible = false; scene.add(holder)
    })
  })

  // ---- the open / close clock: (first time) tear, then zip + mouth, then the buds one by one ----
  const TEAR_S = 1.4, ZIP_S = 0.9, BUD_START = 0.85, BUD_GAP = NB > 6 ? 0.14 : 0.22, BUD_S = 1.1
  const C_MAX = BUD_START + (HOVER.length - 1) * BUD_GAP + BUD_S
  let open = false, clock = 0, tearT = 0, torn = false, flyT = 0, fill = 1, wob = 0
  const easeOut = (x) => 1 - Math.pow(1 - x, 3), easeInOut = (x) => (x < 0.5 ? 4 * x ** 3 : 1 - Math.pow(-2 * x + 2, 3) / 2)
  const tmpA = new THREE.Vector3(), tmpB = new THREE.Vector3(), tmpC = new THREE.Vector3()

  // ---- interaction (as the jars) ----
  let spinV = 0, dragging = false, lastX = 0, lastY = 0, downX = 0, downY = 0, downT = 0, tilt = 0, tiltTarget = 0
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), el = renderer.domElement
  el.style.touchAction = 'none'
  const TILT_MIN = -0.25, TILT_MAX = 0.75
  el.addEventListener('pointerdown', (e) => { dragging = true; lastX = downX = e.clientX; lastY = downY = e.clientY; downT = performance.now(); el.setPointerCapture(e.pointerId) })
  el.addEventListener('pointermove', (e) => {
    if (!dragging) return
    const dx = e.clientX - lastX, dy = e.clientY - lastY; lastX = e.clientX; lastY = e.clientY
    bag.rotation.y += dx * 0.012; spinV = dx * 0.012 * 60
    tiltTarget = THREE.MathUtils.clamp(tiltTarget + dy * 0.006, TILT_MIN, TILT_MAX)
  })
  el.addEventListener('wheel', (e) => { e.preventDefault(); tiltTarget = THREE.MathUtils.clamp(tiltTarget + THREE.MathUtils.clamp(e.deltaY, -100, 100) * 0.003, TILT_MIN, TILT_MAX) }, { passive: false })
  el.addEventListener('pointerup', (e) => {
    dragging = false
    if (Math.hypot(e.clientX - downX, e.clientY - downY) < 8 && performance.now() - downT < 400) {
      const r = el.getBoundingClientRect(); ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1)
      ray.setFromCamera(ndc, camera)
      if (ray.intersectObject(bag, true).length || buds.some((b) => ray.intersectObject(b.obj, true).length)) open = !open
    }
  })
  el.addEventListener('pointercancel', () => { dragging = false })

  // ---- size / camera: the jars' framing, widened for the wide bag ----
  function size() { const w = box.clientWidth, h = box.clientHeight; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix() }
  const ro = new ResizeObserver(size); ro.observe(box); size()
  const camFrom = new THREE.Vector3(0, 1.9, 0.9), camTo = new THREE.Vector3(0, 0.55, 4.1)
  let distClosed = 4, distOpen = 5
  function frameFit() {
    const vf = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)), hw = W / 2 + 0.2
    distClosed = Math.max(1.5 / vf, hw / (vf * camera.aspect)) + 0.6
    distOpen = Math.max(1.9 / vf, (HWMAX + 0.3) / (vf * camera.aspect)) + 0.6
    camTo.set(0, 0.55, distClosed)
  }
  frameFit(); const ro2 = new ResizeObserver(frameFit); ro2.observe(box)
  const lookFrom = new THREE.Vector3(0, 0.6, 0), lookTo = new THREE.Vector3(0, 0.1, 0)
  let t = 0, last = performance.now(), visible = true
  const io = new IntersectionObserver((es) => { visible = es[0].isIntersecting }); io.observe(box)
  let rafId = 0, dead = false
  let beatAmt = 0, lastDance = null
  function frame(now) {
    if (dead) return
    rafId = requestAnimationFrame(frame)
    const dt = Math.min(0.05, (now - last) / 1000); last = now
    if (!visible || document.hidden) return
    t += dt
    const k = reduce ? 1 : easeOut(Math.min(1, t / 3.2))
    // clock: the tear runs once (first open); the zip and the buds only after it
    if (open && !torn) { tearT = Math.min(1, tearT + dt / TEAR_S); if (tearT >= 1) torn = true }
    if (torn) clock = THREE.MathUtils.clamp(clock + (open ? dt : -dt * 1.1), 0, C_MAX)
    if (torn) flyT += dt
    const zipT = THREE.MathUtils.clamp(clock / ZIP_S, 0, 1), mouth = easeInOut(zipT)
    const openK = clock / C_MAX, ok = openK < 0.5 ? 4 * openK ** 3 : 1 - Math.pow(-2 * openK + 2, 3) / 2
    // camera
    tilt += (tiltTarget - tilt) * (1 - Math.pow(0.002, dt))
    const look = new THREE.Vector3().lerpVectors(lookFrom, lookTo, k)
    const d = distClosed + (distOpen - distClosed) * ok, el0 = Math.atan2(camTo.y - lookTo.y, distClosed) + tilt
    camera.position.lerpVectors(camFrom, new THREE.Vector3(0, look.y + Math.sin(el0) * d, Math.cos(el0) * d), k)
    camera.lookAt(look)
    // turn: quarter turns with a beat to look (front, edge, back, edge); slows right down while open
    // the collab's own dance (dance.js) on its song's beat (index.html MBBeat: playback time on the song's beat grid);
    // it fades in when the song plays and out when it stops
    const WD = !reduce && window.MBBeat && window.MBBeat.word && window.MBBeat.word()   // the word being said (lyrics timing)
    const s = !reduce && window.MBBeat && window.MBBeat.get(), danceFn = DANCES[window.MBDance] || DANCES.wave
    if (s) lastDance = danceFn(s)
    beatAmt += ((s ? 1 : 0) - beatAmt) * (1 - Math.pow(0.02, dt))
    if (!dragging) {
      spinV *= Math.pow(0.04, dt)
      // no spin: it stands facing you; after a drag it eases back to the nearest face (front or back)
      const tgt = Math.round(bag.rotation.y / Math.PI) * Math.PI
      bag.rotation.y += (tgt - bag.rotation.y) * (1 - Math.pow(0.05, dt)) + spinV * dt
    }
    if (!reduce && !stageSky) { bgTex.offset.x += dt * 0.012; bgTex.offset.y += dt * 0.006; bgTex2.offset.x -= dt * 0.02; bgTex2.offset.y += dt * 0.01
      bg.rotation.z = skyMat ? 0 : 0.05 * Math.sin(t * 0.15); bg2.rotation.z = -0.06 * Math.sin(t * 0.12 + 1) }
    // the wave theatre: flats slide; puppets pop up from behind their row, rock, sink and are gone
    for (const st of stage) {
      if (st.flat) { st.flat.material.map.offset.x = t * 0.03 * (st.k % 2 ? -1 : 1) + 0.25 * st.k; st.flat.position.x = 0.12 * Math.sin(t * 0.5 + st.k * 1.9); continue }
      const ph = ((t + st.off) % st.period) / st.period, sz = st.size * 1.25
      const low = st.row.crest - sz - 0.05, high = st.row.crest - sz * 0.38             // hidden below the crest .. wave up above it
      let k = 0
      if (ph < 0.1) { const x = ph / 0.1, c = 1.7; k = 1 + (c + 1) * Math.pow(x - 1, 3) + c * Math.pow(x - 1, 2) }   // pops up (overshoot)
      else if (ph < 0.55) k = 1
      else if (ph < 0.68) { const x = (ph - 0.55) / 0.13; k = 1 - x * x }                                        // sinks
      st.pup.position.y = low + (high - low) * k
      st.pup.position.x = st.x + 0.12 * Math.sin(t * 1.3 + st.off)
      st.pup.rotation.z = k > 0.02 ? 0.16 * Math.sin(t * 3.2 + st.off) * Math.min(1, k) : 0              // rocks on its stick
      st.pup.visible = k > 0.001
    }
    if (hotAir) {                                                  // drifts across over ~70 s, gently bobbing, dimmed at night
      const f = (t / 70) % 1; hotAir.position.set(-3.6 + f * 7.2, 2.2 + 0.18 * Math.sin(t * 0.5), -5.6); hotAir.rotation.z = 0.04 * Math.sin(t * 0.7)
      const day = skyMat ? skyMat.uniforms.uDay.value : 1; hotAir.material.color.setScalar(0.35 + 0.65 * day)
    }
    if (skyMat) { skyMat.uniforms.uTime.value = t; skyMat.uniforms.uDay.value = 0.5 - 0.5 * Math.cos(t * 2 * Math.PI / 40) }   // night -> day -> night
    const fl = reduce ? 0 : 1
    // it stands on its bottom (no float): only the jolt when a bud lands
    bag.position.y = -0.02 - 0.015 * wob * fl
    shadow.rotation.z = bag.rotation.y                                 // the oval shadow turns with the bag
    // tear strip: peels, then flies up and away, spinning, and is gone
    tear(easeInOut(tearT))
    if (torn) {
      const fT = Math.min(1, flyT / 1.3)
      strip.position.set(0.25 * fT, BODY_TOP + 1.6 * fT * fT, 0.1 * fT)
      strip.rotation.set(-0.4 * fT, 0, -0.5 * fT); strip.visible = fT < 1
    }
    // buds out / in; each one landing back inside puffs the bag up a step
    applyDance(THREE, dancer, lastDance, beatAmt, FLOOR_Y)
    dancer.updateMatrixWorld()
    bag.updateMatrixWorld()
    const mouthW = tmpB.set(0, BODY_TOP + 0.05, 0).applyMatrix4(bag.matrixWorld).clone()
    let outCount = 0
    const PKG_Y = bag.position.y - 0.25                 // flight paths centre on the bag
    buds.forEach((b, i) => {
      const bp = THREE.MathUtils.clamp((clock - BUD_START - i * BUD_GAP) / BUD_S, 0, 1)
      const isIn = bp <= 0
      if (isIn && !b.wasIn) wob = 1                                     // just dropped back in: the bag jolts
      b.wasIn = isIn; b.obj.visible = !isIn
      if (isIn) return
      outCount += Math.min(1, bp * 2)
      const u = easeOut(bp)
      b.u = u
      const inside = mouthW.clone().add(new THREE.Vector3(0, -0.12, 0))
      const hov = tmpC.copy(b.hover).add(new THREE.Vector3(0.02 * Math.sin(t * 0.9 + b.ph), 0.05 * Math.sin(t * 1.3 + b.ph), 0.02 * Math.cos(t * 0.8 + b.ph)))
      const above = mouthW.clone().add(new THREE.Vector3(0, 0.35, 0))
      if (u < 0.3) b.obj.position.lerpVectors(inside, above, easeInOut(u / 0.3))   // straight up out of the mouth
      else {                                                                     // then out sideways first, down after (clear of the bag)
        const v = (u - 0.3) / 0.7, vx = easeInOut(Math.min(1, v * 1.8)), vy = easeInOut(Math.max(0, v * 1.6 - 0.6))
        b.obj.position.set(above.x + (hov.x - above.x) * vx, above.y + (hov.y - above.y) * vy, above.z + (hov.z - above.z) * vx)
      }
      const s0 = b.obj.userData.s || (b.obj.userData.s = b.obj.scale.x)
      b.obj.scale.setScalar(s0 * Math.min(1, u / 0.3))                 // grows out of the opening (never pokes through the bag)
      const spin = 6 * Math.pow(1 - u, 2)
      b.obj.rotation.set(b.rot.x + t * 0.3 + spin, b.rot.y + t * 0.45 + spin * 1.3, b.rot.z + spin * 0.5)
      // the lyrics: each word the rapper says pops the next bud (up, bigger, a flick), round the buds in turn
      // creative collabs: every bud joins the collab's routine round the package (dance.js ROUTINES), gliding onto it as
      // the music comes in and back to its spot when it stops; simple collabs keep their spots
      const rt = s && u >= 1 ? routine(window.MBDance, s, i, buds.length, W / 2) : null
      b.fly = rt ? Math.min(1, (b.fly || 0) + dt * 0.7) : Math.max(0, (b.fly || 0) - dt * 0.7)
      if (rt && b.fly > 0) {
        const k = b.fly * b.fly * (3 - 2 * b.fly) * beatAmt
        b.obj.position.lerp(new THREE.Vector3(rt.x, PKG_Y + rt.y, rt.z), k)
        b.obj.scale.multiplyScalar(1 - (1 - rt.sc) * k)
      }
      // each collab's own bud dance (dance.js BUD_DANCES), on the beat, once it's out
      const bd = s && u >= 1 && BUD_DANCES[window.MBDance] ? BUD_DANCES[window.MBDance](s, i, buds.length) : null
      if (bd) {
        b.obj.position.x += (bd.dx || 0) * beatAmt; b.obj.position.y += (bd.dy || 0) * beatAmt; b.obj.position.z += (bd.dz || 0) * beatAmt
        b.obj.rotation.x += (bd.rx || 0) * beatAmt; b.obj.rotation.y += (bd.ry || 0) * beatAmt; b.obj.rotation.z += (bd.rz || 0) * beatAmt
        if (bd.sc) b.obj.scale.multiplyScalar(1 + (bd.sc - 1) * beatAmt)
      }
      if (WD && u >= 1) {
        const k = Math.exp(-WD.since * 6) * beatAmt
        if (WD.n % buds.length === i) {                    // this word's bud: jumps, swells and spins a flick
          b.obj.position.y += 0.32 * Math.sin(Math.min(1, WD.since / 0.35) * Math.PI) * beatAmt
          b.obj.scale.multiplyScalar(1 + 0.6 * k); b.obj.rotation.y += 2.2 * k * (WD.n % 2 ? 1 : -1)
        } else b.obj.position.y += 0.04 * k               // the rest bob along with every word
      }
      if (u >= 0.3) {        // never inside the package (once out of the opening)
        // checked in the bag's own frame (it turns and tilts as it dances), with room for the bud's size
        const L = bag.worldToLocal(b.obj.position.clone()), hx = W / 2 + 0.34, hz = T + G + 0.42
        if (Math.abs(L.x) < hx && Math.abs(L.z) < hz && L.y > BOT - 0.2 && L.y < H / 2 + 0.25) {
          if (hx - Math.abs(L.x) < hz - Math.abs(L.z)) L.x = Math.sign(L.x || 1) * hx; else L.z = L.z < -0.05 ? -hz : hz
          b.obj.position.copy(bag.localToWorld(L))
        }
      }
    })
    // how full: every bud inside = full; empty = slack (the jolt eases off)
    const target = 1 - 0.72 * (outCount / HOVER.length)
    fill += (target - fill) * (1 - Math.pow(0.02, dt))
    wob *= Math.pow(0.02, dt)
    shape(fill, mouth, zipT, wob, t)
    if (WD) dancer.scale.multiplyScalar(1 + 0.025 * Math.exp(-WD.since * 8) * beatAmt)   // and the package pulses a touch on each word
    // last thing before drawing: no bud that's out of the opening may sit inside the bag, wherever the bag has moved to
    dancer.updateMatrixWorld(true)
    for (const b of buds) {
      if (!b.obj.visible || !(b.u >= 0.3)) continue
      const L = bag.worldToLocal(b.obj.position.clone()), hx = W / 2 + 0.34, hz = T + G + 0.42
      if (Math.abs(L.x) < hx && Math.abs(L.z) < hz && L.y > BOT - 0.2 && L.y < H / 2 + 0.25) {
        if (hx - Math.abs(L.x) < hz - Math.abs(L.z)) L.x = Math.sign(L.x || 1) * hx; else L.z = L.z < -0.05 ? -hz : hz
        b.obj.position.copy(bag.localToWorld(L))
      }
    }
    renderer.render(scene, camera)
  }
  rafId = requestAnimationFrame(frame)
  function destroy() {
    dead = true; cancelAnimationFrame(rafId); ro.disconnect(); ro2.disconnect(); io.disconnect()
    scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) [].concat(o.material).forEach((m) => { Object.values(m).forEach((v) => { if (v && v.isTexture) v.dispose() }); m.dispose() }) })
    scene.environment.dispose(); pm.dispose(); renderer.dispose(); renderer.domElement.remove()
  }
  return { bag, buds, collab: /^(35|28)$/.test(String(variant)) ? 'bag' : String(variant), variant: String(variant), destroy, toggle: () => { open = !open }, get open() { return open }, get torn() { return torn } }
}
