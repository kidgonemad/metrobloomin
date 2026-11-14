// The Metro Bloomin mylar bags (jspaaydesign's packaging, art baked from the owner's screenshots), for the
// collabs page. Same interface as jar.js: mount(container, variant) -> { destroy, toggle, collab }.
//   variant '35': the tall 3.5 g bag; '28': the wide 28 g bag
//   - a pillow-shaped pouch: two printed faces sealed at the sides and bottom, puffed out by how full it is
//   - idle: quarter turns (front, side, back), gentle float; drag to spin, drag up/down to tilt the view
//   - tap: the first time, the tear strip rips off from the notch; then the zip opens left to right, the mouth
//     opens, the buds float up out of it and hover while the bag goes slack. Tap again: the buds drop back in one
//     by one, each one puffing the bag back up, and the zip presses shut. (The strip stays off: it's been opened.)
import * as THREE from 'three'
import { GLTFLoader } from './vendor/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from './vendor/jsm/loaders/DRACOLoader.js'

const BASE = new URL('./', import.meta.url).href
// sizes in scene units (bagmarks.py prints the zip / tear line at the same STRIP / ZIP / SEAM)
export const BAGS = {
  35: { front: 'bag35_front.webp?v=1', back: 'bag35_back.webp?v=2', W: 1.21, H: 1.62, T: 0.2 },
  28: { front: 'bag28_front.webp?v=1', back: 'bag28_back.webp?v=1', W: 1.6, H: 1.21, T: 0.19 },
}
const STRIP = 0.085, ZIP = 0.07, SEAM = 0.05

export function mount(box, variant = '35') {
  const V = BAGS[variant] || BAGS[35], { W, H, T } = V
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.outputColorSpace = THREE.SRGBColorSpace
  box.appendChild(renderer.domElement)
  const scene = new THREE.Scene(); scene.background = new THREE.Color('#030402')
  const camera = new THREE.PerspectiveCamera(30, 1, 0.05, 60)

  // ---- reflections: the jars' studio (white key, white rim, green bounce) ----
  const pm = new THREE.PMREMGenerator(renderer), studio = new THREE.Scene()
  const panel = (w, h, color, k, pos) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(k), side: THREE.DoubleSide }))
    m.position.set(...pos); m.lookAt(0, 0, 0); studio.add(m)
  }
  studio.background = new THREE.Color('#4a4a50')
  panel(6, 3, '#ffffff', 6, [-4, 5, 3]); panel(1.2, 6, '#ffffff', 3.5, [5, 1, 1]); panel(6, 3, '#7cff4a', 0.8, [0, -4, 1])
  panel(3, 2, '#ffffff', 1.4, [0, 2, 6]); panel(10, 10, '#ffffff', 2, [0, 6, 0])
  scene.environment = pm.fromScene(studio, 0.03).texture
  const tl = new THREE.TextureLoader()
  const tex = (f) => { const t = tl.load(BASE + f); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t }

  // ---- the bag ----
  const bag = new THREE.Group(); scene.add(bag)
  const BODY_TOP = H / 2 - STRIP, ZIP_Y = BODY_TOP - ZIP, BOT = -H / 2
  // soft-touch print: matte with a slight sheen; the inside is bare silver mylar
  const print = (map) => new THREE.MeshPhysicalMaterial({ map, roughness: 0.55, metalness: 0, clearcoat: 0.35, clearcoatRoughness: 0.35, envMapIntensity: 1.1 })
  const inner = new THREE.MeshStandardMaterial({ color: '#b8bcc0', metalness: 1, roughness: 0.32, side: THREE.BackSide, envMapIntensity: 1.2 })
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
  const strips = []
  for (const [map, back] of [[frontTex, false], [backTex, true]]) {
    const geo = new THREE.PlaneGeometry(W, STRIP, 30, 3); geo.translate(0, STRIP / 2, 0)
    const uv = geo.attributes.uv, k0 = (BODY_TOP - BOT) / H
    for (let i = 0; i < uv.count; i++) uv.setY(i, k0 + uv.getY(i) * (1 - k0))
    const g = new THREE.Group(); if (back) g.rotation.y = Math.PI
    g.add(new THREE.Mesh(geo, print(map)), new THREE.Mesh(geo, inner)); strip.add(g)
    const p = geo.attributes.position, b = new Float32Array(p.count * 2)
    for (let i = 0; i < p.count; i++) { b[i * 2] = p.getX(i); b[i * 2 + 1] = p.getY(i) }
    strips.push({ geo, base: b })
  }
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
        let z = f * T * px * pyz
        // slack and crinkly when (nearly) empty
        z += (1 - f) * 0.012 * px * pyz * Math.sin(x * 23 + y * 17 + (F.back ? 1.7 : 0)) * Math.sin(y * 31 - x * 9)
        // the mouth: from below the zip up to the top edge, the two lips spread apart (an oval: sealed at the seams)
        const lip = sm(ZIP_Y - 0.42, BODY_TOP, y)
        const zp = THREE.MathUtils.clamp(zipT * 1.5 - (x / W + 0.5) * 0.5, 0, 1)            // the zip opens left to right
        z += mouth * 0.24 * Math.pow(ex, 0.45) * lip * zp
        // filling wobble (a bud just dropped in)
        z *= 1 + wob * 0.08 * Math.sin(t * 22 + y * 4) * px
        // filled pouches pull their sides in and their bottom up a little
        const xs = x * (1 - 0.06 * f * pyz), ys = y + 0.03 * f * px * (1 - ty) * (y < 0 ? 1 : 0)
        p.setXYZ(i, xs, ys, z)
      }
      p.needsUpdate = true; F.geo.computeVertexNormals()
    }
  }
  function tear(tT) {                                // the strip peels up from the notch side, curling as it goes
    for (const S of strips) {
      const p = S.geo.attributes.position, b = S.base
      for (let i = 0; i < p.count; i++) {
        const x = b[i * 2], y = b[i * 2 + 1], pr = THREE.MathUtils.clamp(tT * 1.6 - (x / W + 0.5), 0, 1)
        const vy = y / STRIP
        p.setXYZ(i, x + 0.02 * pr, y + 0.09 * pr * (0.4 + vy), 0.07 * pr * Math.sin(vy * 2.4) )
      }
      p.needsUpdate = true; S.geo.computeVertexNormals()
    }
  }

  // ---- backdrop: the bags' skull / leaf pattern, dim, drifting in two layers (like the jars') ----
  const bgTex = tex('bag_bg.webp?v=1'), bgTex2 = bgTex.clone()
  bgTex.wrapS = bgTex.wrapT = THREE.RepeatWrapping; bgTex.repeat.set(3, 3)
  const bg = new THREE.Mesh(new THREE.PlaneGeometry(14, 14), new THREE.MeshBasicMaterial({ map: bgTex, color: new THREE.Color(0.38, 0.38, 0.38), toneMapped: false }))
  bg.position.set(0, 0.4, -6); scene.add(bg)
  bgTex2.repeat.set(2, 2); bgTex2.needsUpdate = true
  const bg2 = new THREE.Mesh(new THREE.PlaneGeometry(14, 14), new THREE.MeshBasicMaterial({ map: bgTex2, color: new THREE.Color(0.25, 0.25, 0.25), transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }))
  bg2.position.set(0, 0.4, -4.5); scene.add(bg2)
  const glow = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 256
    const g = c.getContext('2d'), gr = g.createRadialGradient(128, 128, 0, 128, 128, 128)
    gr.addColorStop(0, 'rgba(120,230,60,0.45)'); gr.addColorStop(0.45, 'rgba(70,170,30,0.16)'); gr.addColorStop(1, 'rgba(20,80,0,0)')
    g.fillStyle = gr; g.fillRect(0, 0, 256, 256)
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t
  })()
  const FLOOR_Y = bag.position.y + BOT - 0.12
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(4.5, 4.5), new THREE.MeshBasicMaterial({ map: glow, transparent: true, depthWrite: false, toneMapped: false }))
  floor.rotation.x = -Math.PI / 2; floor.position.y = FLOOR_Y; scene.add(floor)
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.6, 48), new THREE.MeshBasicMaterial({ color: '#000', transparent: true, opacity: 0.5, depthWrite: false }))
  shadow.rotation.x = -Math.PI / 2; shadow.scale.set(W / 1.1, 0.45, 1); shadow.position.y = FLOOR_Y + 0.002; scene.add(shadow)
  scene.add(new THREE.HemisphereLight('#ffffff', '#123a0a', 0.15))

  // ---- buds (the jars' model): inside the bag; float up out of the mouth and hover around it ----
  const draco = new DRACOLoader().setDecoderPath(BASE + 'draco/')
  const buds = []
  const HW = W / 2 + 0.38
  const HOVER = [[-HW, 0.75, 0.4], [HW, 0.62, 0.38], [-HW - 0.05, 0.05, 0.45], [HW + 0.05, -0.08, 0.42], [-HW + 0.1, -0.62, 0.5], [HW - 0.1, -0.68, 0.48]]
  new GLTFLoader().setDRACOLoader(draco).load(BASE + 'bud.glb', (g) => {
    const src = g.scene, b = new THREE.Box3().setFromObject(src), sz = b.getSize(new THREE.Vector3())
    const k = 0.44 / Math.max(sz.x, sz.y, sz.z)
    src.position.sub(b.getCenter(new THREE.Vector3()))
    HOVER.forEach((hp, i) => {
      const holder = new THREE.Group(), o = src.clone(true); holder.add(o); holder.scale.setScalar(k * (0.85 + 0.3 * ((i * 37) % 10) / 10))
      o.traverse((m) => { if (m.isMesh) m.material.envMapIntensity = 1.3 })
      buds.push({ obj: holder, home: new THREE.Vector3((i % 3 - 1) * W * 0.22, BOT + 0.3 + (i >> 1) * 0.18, 0), hover: new THREE.Vector3(...hp),
        rot: new THREE.Vector3(Math.random() * 6, Math.random() * 6, Math.random() * 6), ph: i * 1.3, wasIn: true })
      holder.visible = false; scene.add(holder)
    })
  })

  // ---- the open / close clock: (first time) tear, then zip + mouth, then the buds one by one ----
  const TEAR_S = 1.1, ZIP_S = 0.9, BUD_START = 0.85, BUD_GAP = 0.22, BUD_S = 1.1
  const C_MAX = BUD_START + (HOVER.length - 1) * BUD_GAP + BUD_S
  let open = false, clock = 0, tearT = 0, torn = false, flyT = 0, fill = 1, wob = 0
  const easeOut = (x) => 1 - Math.pow(1 - x, 3), easeInOut = (x) => (x < 0.5 ? 4 * x ** 3 : 1 - Math.pow(-2 * x + 2, 3) / 2)
  const tmpA = new THREE.Vector3(), tmpB = new THREE.Vector3(), tmpC = new THREE.Vector3()

  // ---- interaction (as the jars) ----
  let spinV = 0, spinBase = 0, dragging = false, lastX = 0, lastY = 0, downX = 0, downY = 0, downT = 0, tilt = 0, tiltTarget = 0
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
    distOpen = Math.max(1.9 / vf, (HW + 0.3) / (vf * camera.aspect)) + 0.6
    camTo.set(0, 0.55, distClosed)
  }
  frameFit(); const ro2 = new ResizeObserver(frameFit); ro2.observe(box)
  const lookFrom = new THREE.Vector3(0, 0.6, 0), lookTo = new THREE.Vector3(0, 0.1, 0)
  let t = 0, last = performance.now(), visible = true
  const io = new IntersectionObserver((es) => { visible = es[0].isIntersecting }); io.observe(box)
  let rafId = 0, dead = false
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
    if (!dragging) {
      spinV *= Math.pow(0.04, dt)
      const P = 2.6, step = Math.floor(t / P), ph = (t % P) / P, e = ph < 0.45 ? easeInOut(ph / 0.45) : 1
      const want = reduce ? 0 : (step + e) * Math.PI / 2 * (1 - 0.85 * ok)
      bag.rotation.y += (want - spinBase) + spinV * dt; spinBase = want
    }
    if (!reduce) { bgTex.offset.x += dt * 0.012; bgTex.offset.y += dt * 0.006; bgTex2.offset.x -= dt * 0.02; bgTex2.offset.y += dt * 0.01
      bg.rotation.z = 0.05 * Math.sin(t * 0.15); bg2.rotation.z = -0.06 * Math.sin(t * 0.12 + 1) }
    const fl = reduce ? 0 : 1
    bag.position.y = -0.02 + fl * 0.045 * Math.sin(t * 0.9)
    bag.rotation.z = fl * 0.03 * Math.sin(t * 0.7)
    shadow.scale.set(W / 1.1 * (1 - 0.05 * Math.sin(t * 0.9) * fl), 0.45, 1)
    // tear strip: peels, then flies up and away, spinning, and is gone
    tear(easeInOut(tearT))
    if (torn) {
      const fT = Math.min(1, flyT / 1.3)
      strip.position.set(0.9 * fT, BODY_TOP + 0.6 * fT - 2.4 * fT * fT, 0.3 * fT)
      strip.rotation.set(1.4 * fT, 0, -2.6 * fT); strip.visible = fT < 1
    }
    // buds out / in; each one landing back inside puffs the bag up a step
    bag.updateMatrixWorld()
    const mouthW = tmpB.set(0, BODY_TOP + 0.05, 0).applyMatrix4(bag.matrixWorld).clone()
    let outCount = 0
    buds.forEach((b, i) => {
      const bp = THREE.MathUtils.clamp((clock - BUD_START - i * BUD_GAP) / BUD_S, 0, 1)
      const isIn = bp <= 0
      if (isIn && !b.wasIn) wob = 1                                     // just dropped back in: the bag jolts
      b.wasIn = isIn; b.obj.visible = !isIn
      if (isIn) return
      outCount += Math.min(1, bp * 2)
      const u = easeOut(bp)
      const home = tmpA.copy(b.home).applyMatrix4(bag.matrixWorld)
      const hov = tmpC.copy(b.hover).add(new THREE.Vector3(0.02 * Math.sin(t * 0.9 + b.ph), 0.05 * Math.sin(t * 1.3 + b.ph), 0.02 * Math.cos(t * 0.8 + b.ph)))
      const above = mouthW.clone().add(new THREE.Vector3(0, 0.35, 0))
      if (u < 0.3) b.obj.position.lerpVectors(home, above, easeInOut(u / 0.3))   // straight up out of the mouth
      else b.obj.position.lerpVectors(above, hov, easeInOut((u - 0.3) / 0.7))   // then out to its spot
      const s0 = b.obj.userData.s || (b.obj.userData.s = b.obj.scale.x)
      b.obj.scale.setScalar(s0 * (0.5 + 0.5 * Math.min(1, u * 2.2)))
      const spin = 6 * Math.pow(1 - u, 2)
      b.obj.rotation.set(b.rot.x + t * 0.3 + spin, b.rot.y + t * 0.45 + spin * 1.3, b.rot.z + spin * 0.5)
    })
    // how full: every bud inside = full; empty = slack (the jolt eases off)
    const target = 1 - 0.72 * (outCount / HOVER.length)
    fill += (target - fill) * (1 - Math.pow(0.02, dt))
    wob *= Math.pow(0.02, dt)
    shape(fill, mouth, zipT, wob, t)
    renderer.render(scene, camera)
  }
  rafId = requestAnimationFrame(frame)
  function destroy() {
    dead = true; cancelAnimationFrame(rafId); ro.disconnect(); ro2.disconnect(); io.disconnect()
    scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) [].concat(o.material).forEach((m) => { Object.values(m).forEach((v) => { if (v && v.isTexture) v.dispose() }); m.dispose() }) })
    scene.environment.dispose(); pm.dispose(); renderer.dispose(); renderer.domElement.remove()
  }
  return { bag, collab: 'bag', variant: String(variant), destroy, toggle: () => { open = !open }, get open() { return open }, get torn() { return torn } }
}
