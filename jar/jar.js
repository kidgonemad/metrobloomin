// The Metro Bloomin jar: a glossy black weed jar wrapped in the skinned-leaf artwork (label.webp, baked from
// the owner's art), red-symbol lid (lid.webp), on a dim red symbol backdrop, like the end of the owner's video.
// Self-contained: MBJar.mount(container) puts the 3D jar into any element.
//   - entrance: starts close on the lid and pulls back to the whole jar; then the logo fades in above it
//   - idle: slow turn, gentle float and tilt; the backdrop drifts
//   - drag sideways: spin it (with momentum); drag up/down (or scroll): tilt the view
//   - tap it: the lid lifts off and floats, the buds (owner's model) fly out and each hovers in its own spot;
//     tap again: they fly back in and the lid closes
import * as THREE from 'three'
import { GLTFLoader } from './vendor/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from './vendor/jsm/loaders/DRACOLoader.js'

const BASE = new URL('./', import.meta.url).href

export function mount(box) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.outputColorSpace = THREE.SRGBColorSpace
  box.appendChild(renderer.domElement)
  const scene = new THREE.Scene()
  scene.background = new THREE.Color('#050103')
  const camera = new THREE.PerspectiveCamera(30, 1, 0.05, 60)

  // ---- reflections: a little studio of light panels (white key top-left, white rim right, red floor) ----
  const pm = new THREE.PMREMGenerator(renderer)
  const studio = new THREE.Scene()
  const panel = (w, h, color, k, pos, look) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(k), side: THREE.DoubleSide }))
    m.position.set(...pos); m.lookAt(...look); studio.add(m)
  }
  panel(6, 3, '#ffffff', 7, [-4, 5, 3], [0, 0, 0])
  panel(1.2, 6, '#ffffff', 4, [5, 1, 1], [0, 0, 0])
  panel(6, 3, '#ff1030', 0.9, [0, -4, 1], [0, 0, 0])   // a red bounce from below, not a red room
  panel(3, 2, '#ffffff', 1.5, [0, 2, 6], [0, 0, 0])
  scene.environment = pm.fromScene(studio, 0.03).texture

  const tl = new THREE.TextureLoader()
  const tex = (f) => { const t = tl.load(BASE + f); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t }

  // ---- the jar ----
  const R = 0.5, BODY_H = 1.28, LID_H = 0.3, LID_R = 0.525   // about 1 : 1.6 like the video's jar
  const jar = new THREE.Group(); scene.add(jar)
  const gloss = (map) => new THREE.MeshPhysicalMaterial({ color: '#ffffff', map, roughness: 0.32, clearcoat: 1, clearcoatRoughness: 0.04, envMapIntensity: 1.1 })
  const black = new THREE.MeshPhysicalMaterial({ color: '#0b0b0d', roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.04 })

  // label: the straight side, front of the art (u = 0.5) facing the camera
  const side = new THREE.Mesh(new THREE.CylinderGeometry(R, R, BODY_H, 128, 1, true, -Math.PI, Math.PI * 2), gloss(tex('label.webp')))
  side.position.y = BODY_H / 2; jar.add(side)
  // rounded base and shoulder (black glass)
  const lathe = (pts) => new THREE.LatheGeometry(pts.map(([x, y]) => new THREE.Vector2(x, y)), 128)
  const arc = (cx, cy, r, a0, a1, n) => Array.from({ length: n + 1 }, (_, i) => { const a = a0 + (a1 - a0) * i / n; return [cx + r * Math.cos(a), cy + r * Math.sin(a)] })
  const base = new THREE.Mesh(lathe([[0, -0.06], ...arc(R - 0.06, 0, 0.06, -Math.PI / 2, 0, 8)]), black); jar.add(base)
  const shoulder = new THREE.Mesh(lathe([...arc(R - 0.05, BODY_H, 0.05, 0, Math.PI / 2, 8), [R - 0.07, BODY_H + 0.05], [R - 0.07, BODY_H + 0.09]]), black); jar.add(shoulder)

  // inside: dark wall and floor, and a rim at the opening (it reads as a real jar with the lid off)
  const inside = new THREE.MeshStandardMaterial({ color: '#070709', roughness: 0.6, side: THREE.BackSide })
  const inner = new THREE.Mesh(new THREE.CylinderGeometry(R - 0.075, R - 0.075, BODY_H + 0.05, 64, 1, true), inside)
  inner.position.y = (BODY_H + 0.05) / 2 + 0.04; jar.add(inner)
  const innerFloor = new THREE.Mesh(new THREE.CircleGeometry(R - 0.075, 64), new THREE.MeshStandardMaterial({ color: '#050506', roughness: 0.7 }))
  innerFloor.rotation.x = -Math.PI / 2; innerFloor.position.y = 0.05; jar.add(innerFloor)
  const rim = new THREE.Mesh(new THREE.TorusGeometry(R - 0.07, 0.012, 10, 96), black)
  rim.rotation.x = Math.PI / 2; rim.position.y = BODY_H + 0.09; jar.add(rim)

  // lid: rolled edge + red-symbol top
  const lid = new THREE.Group(); lid.position.y = BODY_H + 0.04; jar.add(lid)
  const lidSide = new THREE.Mesh(lathe([[R - 0.04, 0], [LID_R, 0.02], ...arc(LID_R - 0.05, LID_H - 0.05, 0.05, 0, Math.PI / 2, 10), [0.38, LID_H]]), black)
  lid.add(lidSide)
  const lidUnder = new THREE.Mesh(new THREE.CircleGeometry(R - 0.035, 64), new THREE.MeshStandardMaterial({ color: '#0a0a0c', roughness: 0.5 }))
  lidUnder.rotation.x = Math.PI / 2; lidUnder.position.y = 0.002; lid.add(lidUnder)   // the lid's underside, seen when it lifts
  const lidTop = new THREE.Mesh(new THREE.CircleGeometry(0.44, 96), gloss(tex('lid.webp')))
  lidTop.rotation.x = -Math.PI / 2; lidTop.position.y = LID_H + 0.001; lid.add(lidTop)
  // ribs on the lid side
  const ribs = new THREE.Mesh(new THREE.CylinderGeometry(LID_R + 0.002, LID_R + 0.002, LID_H * 0.5, 96, 1, true),
    new THREE.MeshPhysicalMaterial({ color: '#0b0b0d', roughness: 0.45, clearcoat: 0.6, transparent: true, opacity: 0.6 }))
  ribs.position.y = LID_H * 0.42; lid.add(ribs)
  jar.position.y = -(BODY_H + LID_H) / 2

  // ---- backdrop: dim red symbol pattern far behind, red light pool on the floor ----
  const bgTex = tex('bg.webp'); bgTex.wrapS = bgTex.wrapT = THREE.RepeatWrapping; bgTex.repeat.set(3, 3)
  const bg = new THREE.Mesh(new THREE.PlaneGeometry(14, 14), new THREE.MeshBasicMaterial({ map: bgTex, color: new THREE.Color(0.38, 0.38, 0.38), toneMapped: false }))
  bg.position.set(0, 0.4, -6); scene.add(bg)
  // a second, closer and darker layer drifting the other way (depth as the backdrop moves)
  const bgTex2 = bgTex.clone(); bgTex2.repeat.set(2, 2); bgTex2.needsUpdate = true
  const bg2 = new THREE.Mesh(new THREE.PlaneGeometry(14, 14), new THREE.MeshBasicMaterial({ map: bgTex2, color: new THREE.Color(0.22, 0.22, 0.22), transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }))
  bg2.position.set(0, 0.4, -4.5); scene.add(bg2)
  const glow = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 256
    const g = c.getContext('2d'), gr = g.createRadialGradient(128, 128, 0, 128, 128, 128)
    gr.addColorStop(0, 'rgba(255,20,40,0.6)'); gr.addColorStop(0.45, 'rgba(200,0,25,0.22)'); gr.addColorStop(1, 'rgba(120,0,10,0)')
    g.fillStyle = gr; g.fillRect(0, 0, 256, 256)
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t
  })()
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(4.5, 4.5), new THREE.MeshBasicMaterial({ map: glow, transparent: true, depthWrite: false, toneMapped: false }))
  floor.rotation.x = -Math.PI / 2; floor.position.y = jar.position.y - 0.07; scene.add(floor)
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.6, 48), new THREE.MeshBasicMaterial({ color: '#000', transparent: true, opacity: 0.55, depthWrite: false }))
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = floor.position.y + 0.002; scene.add(shadow)
  scene.add(new THREE.HemisphereLight('#ffffff', '#401018', 0.12))

  // ---- logo above (from the video's last frames) ----
  const logoTex = tex('logo.png')
  const logo = new THREE.Mesh(new THREE.PlaneGeometry(0.95, 0.95 * 129 / 372), new THREE.MeshBasicMaterial({ map: logoTex, transparent: true, opacity: 0, depthWrite: false, toneMapped: false }))
  logo.position.y = (BODY_H + LID_H) / 2 + 0.42; scene.add(logo)

  // ---- buds (owner's model): inside the jar, fly out to hover around it when it opens ----
  const draco = new DRACOLoader().setDecoderPath(BASE + 'draco/')
  const buds = []                               // { obj, home: Vector3 (spot in the jar), hover: Vector3, rot: Vector3, ph }
  const HOVER = [[-0.95, 0.75, 0.25], [0.95, 0.55, 0.2], [-1.0, -0.05, 0.35], [1.0, -0.2, 0.3], [-0.55, 1.35, 0.1], [0.6, 1.3, 0.15]]
  new GLTFLoader().setDRACOLoader(draco).load(BASE + 'bud.glb', (g) => {
    const src = g.scene, b = new THREE.Box3().setFromObject(src), sz = b.getSize(new THREE.Vector3())
    const k = 0.52 / Math.max(sz.x, sz.y, sz.z)          // each bud about half the jar's width
    src.position.sub(b.getCenter(new THREE.Vector3()))
    HOVER.forEach((hp, i) => {
      const holder = new THREE.Group(), o = src.clone(true); holder.add(o); holder.scale.setScalar(k * (0.85 + 0.3 * ((i * 37) % 10) / 10))
      o.traverse((m) => { if (m.isMesh) m.material.envMapIntensity = 1.3 })
      const a = i / HOVER.length * Math.PI * 2
      buds.push({ obj: holder, home: new THREE.Vector3(Math.cos(a) * 0.16, 0.2 + (i % 3) * 0.17, Math.sin(a) * 0.16), hover: new THREE.Vector3(...hp),
        rot: new THREE.Vector3(Math.random() * 6, Math.random() * 6, Math.random() * 6), ph: i * 1.3 })
      holder.visible = false; scene.add(holder)
    })
  })
  let open = false, openK = 0                   // openK eases 0 (closed) <-> 1 (open)

  // ---- interaction ----
  let spinV = 0, dragging = false, lastX = 0, lastY = 0, downX = 0, downY = 0, downT = 0, tilt = 0, tiltTarget = 0
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2()
  const el = renderer.domElement
  el.style.touchAction = 'none'
  const TILT_MIN = -0.25, TILT_MAX = 0.75          // view elevation offset (radians): a bit below .. well above
  el.addEventListener('pointerdown', (e) => { dragging = true; lastX = downX = e.clientX; lastY = downY = e.clientY; downT = performance.now(); el.setPointerCapture(e.pointerId) })
  el.addEventListener('pointermove', (e) => {
    if (!dragging) return
    const dx = e.clientX - lastX, dy = e.clientY - lastY; lastX = e.clientX; lastY = e.clientY
    jar.rotation.y += dx * 0.012; spinV = dx * 0.012 * 60
    tiltTarget = THREE.MathUtils.clamp(tiltTarget + dy * 0.006, TILT_MIN, TILT_MAX)
  })
  el.addEventListener('wheel', (e) => { e.preventDefault(); tiltTarget = THREE.MathUtils.clamp(tiltTarget + THREE.MathUtils.clamp(e.deltaY, -100, 100) * 0.003, TILT_MIN, TILT_MAX) }, { passive: false })
  el.addEventListener('pointerup', (e) => {
    dragging = false
    if (Math.hypot(e.clientX - downX, e.clientY - downY) < 8 && performance.now() - downT < 400) {   // a tap
      const r = el.getBoundingClientRect(); ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1)
      ray.setFromCamera(ndc, camera)
      const hit = ray.intersectObject(jar, true).length || buds.some((b) => ray.intersectObject(b.obj, true).length)
      if (hit) open = !open
    }
  })
  el.addEventListener('pointercancel', () => { dragging = false })

  // ---- size ----
  function size() {
    const w = box.clientWidth, h = box.clientHeight
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix()
  }
  new ResizeObserver(size).observe(box); size()

  // ---- loop ----
  const camFrom = new THREE.Vector3(0, 1.9, 0.9), camTo = new THREE.Vector3(0, 0.55, 4.1)
  // pull back far enough that the jar (about 1.1 wide) and the logo above it (about 2.4 tall in all) fit
  let distClosed = 4, distOpen = 5
  function frameFit() {
    const vf = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))
    distClosed = Math.max(1.5 / vf, 0.75 / (vf * camera.aspect)) + 0.6
    distOpen = Math.max(1.65 / vf, 1.25 / (vf * camera.aspect)) + 0.6    // room for the buds either side
    camTo.set(0, 0.55, distClosed)
  }
  frameFit(); new ResizeObserver(frameFit).observe(box)
  const lookFrom = new THREE.Vector3(0, 0.6, 0), lookTo = new THREE.Vector3(0, 0.18, 0)
  const ease = (k) => 1 - Math.pow(1 - k, 3)
  let t = 0, last = performance.now(), visible = true
  new IntersectionObserver((es) => { visible = es[0].isIntersecting }).observe(box)
  function frame(now) {
    requestAnimationFrame(frame)
    const dt = Math.min(0.05, (now - last) / 1000); last = now
    if (!visible || document.hidden) return
    t += dt
    // entrance: close on the lid -> the whole jar
    const k = reduce ? 1 : ease(Math.min(1, t / 3.2))
    // open / close progress (1.1 s), used by the lid, the buds and the framing
    openK = THREE.MathUtils.clamp(openK + (open ? dt : -dt) / 1.1, 0, 1)
    const ok = openK < 0.5 ? 4 * openK ** 3 : 1 - Math.pow(-2 * openK + 2, 3) / 2
    // the view: orbit the look point at the base elevation plus tilt, distance growing when open
    tilt += (tiltTarget - tilt) * (1 - Math.pow(0.002, dt))
    const look = new THREE.Vector3().lerpVectors(lookFrom, lookTo, k)
    const d = distClosed + (distOpen - distClosed) * ok, el0 = Math.atan2(camTo.y - lookTo.y, distClosed) + tilt
    const orbit = new THREE.Vector3(0, look.y + Math.sin(el0) * d, Math.cos(el0) * d)
    camera.position.lerpVectors(camFrom, orbit, k)
    camera.lookAt(look)
    // logo fades in after the pull-back
    logo.material.opacity = Math.min(1, Math.max(0, (t - 3.4) / 1.2))
    logo.lookAt(camera.position)
    // turn: idle spin plus drag momentum
    if (!dragging) { spinV *= Math.pow(0.04, dt); jar.rotation.y += (reduce ? 0 : 0.63) * dt + spinV * dt }
    // backdrop drifts (two layers, opposite ways)
    if (!reduce) { bgTex.offset.x += dt * 0.012; bgTex.offset.y += dt * 0.006; bgTex2.offset.x -= dt * 0.02; bgTex2.offset.y += dt * 0.01
      bg.rotation.z = 0.05 * Math.sin(t * 0.15); bg2.rotation.z = -0.06 * Math.sin(t * 0.12 + 1) }
    // float and tilt
    const f = reduce ? 0 : 1
    jar.position.y = -(BODY_H + LID_H) / 2 + f * 0.035 * Math.sin(t * 1.1)
    jar.rotation.z = f * 0.035 * Math.sin(t * 0.7); jar.rotation.x = f * 0.03 * Math.sin(t * 0.9 + 1)
    shadow.scale.setScalar(1 - 0.06 * Math.sin(t * 1.1) * f)
    // lid: unscrews (twist), lifts off and floats above, tilted; reverses to close
    const lk = THREE.MathUtils.clamp(ok * 1.4, 0, 1)
    lid.position.y = BODY_H + 0.04 + 0.62 * lk + 0.03 * Math.sin(t * 1.6) * lk
    lid.rotation.set(0.32 * lk, -2.4 * lk, -0.18 * lk)
    // buds: from their spot inside the jar up out of the opening, then out to their hover spot; bob and turn
    jar.updateMatrixWorld()
    const mouth = new THREE.Vector3(0, BODY_H + 0.35, 0).applyMatrix4(jar.matrixWorld)
    buds.forEach((b, i) => {
      const bk = THREE.MathUtils.clamp((openK - 0.18 - i * 0.06) / 0.6, 0, 1), e = bk < 0.5 ? 4 * bk ** 3 : 1 - Math.pow(-2 * bk + 2, 3) / 2
      b.obj.visible = bk > 0
      if (!b.obj.visible) return
      const home = b.home.clone().applyMatrix4(jar.matrixWorld)
      const hov = b.hover.clone().add(new THREE.Vector3(0.02 * Math.sin(t * 0.9 + b.ph), 0.05 * Math.sin(t * 1.3 + b.ph), 0.02 * Math.cos(t * 0.8 + b.ph)))
      // two-stage path: home -> mouth (first 40%) -> hover spot
      if (e < 0.4) b.obj.position.lerpVectors(home, mouth, e / 0.4)
      else b.obj.position.lerpVectors(mouth, hov, (e - 0.4) / 0.6)
      b.obj.rotation.set(b.rot.x + t * 0.3, b.rot.y + t * 0.45, b.rot.z)
    })
    renderer.render(scene, camera)
  }
  requestAnimationFrame(frame)
  return { jar, lid, toggle: () => { open = !open }, get open() { return open } }
}

window.MBJar = { mount }
