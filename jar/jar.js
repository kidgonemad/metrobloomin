// The Metro Bloomin jar: a glossy black weed jar wrapped in the skinned-leaf artwork (label.webp, baked from
// the owner's art), red-symbol lid (lid.webp), on a dim red symbol backdrop, like the end of the owner's video.
// Self-contained: MBJar.mount(container) puts the 3D jar into any element.
//   - entrance: starts close on the lid and pulls back to the whole jar; then the logo fades in above it
//   - idle: slow turn, gentle float and tilt
//   - drag: spin it (with momentum); tap it: the lid pops up with a twist and settles back
import * as THREE from './vendor/three.module.min.js'

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

  // lid: rolled edge + red-symbol top
  const lid = new THREE.Group(); lid.position.y = BODY_H + 0.04; jar.add(lid)
  const lidSide = new THREE.Mesh(lathe([[R - 0.04, 0], [LID_R, 0.02], ...arc(LID_R - 0.05, LID_H - 0.05, 0.05, 0, Math.PI / 2, 10), [0.38, LID_H]]), black)
  lid.add(lidSide)
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

  // ---- interaction ----
  let spinV = 0, dragging = false, lastX = 0, downX = 0, downY = 0, downT = 0, popT = -1
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2()
  const el = renderer.domElement
  el.style.touchAction = 'pan-y'
  el.addEventListener('pointerdown', (e) => { dragging = true; lastX = downX = e.clientX; downY = e.clientY; downT = performance.now(); el.setPointerCapture(e.pointerId) })
  el.addEventListener('pointermove', (e) => { if (!dragging) return; const dx = e.clientX - lastX; lastX = e.clientX; jar.rotation.y += dx * 0.012; spinV = dx * 0.012 * 60 })
  el.addEventListener('pointerup', (e) => {
    dragging = false
    if (Math.hypot(e.clientX - downX, e.clientY - downY) < 8 && performance.now() - downT < 400) {   // a tap
      const r = el.getBoundingClientRect(); ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1)
      ray.setFromCamera(ndc, camera)
      if (ray.intersectObject(jar, true).length) popT = 0
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
  function frameFit() {
    const vf = THREE.MathUtils.degToRad(camera.fov / 2), fitH = 1.5 / Math.tan(vf), fitW = 0.75 / (Math.tan(vf) * camera.aspect)
    camTo.set(0, 0.55, Math.max(fitH, fitW) + 0.6)
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
    camera.position.lerpVectors(camFrom, camTo, k)
    const look = new THREE.Vector3().lerpVectors(lookFrom, lookTo, k)
    camera.lookAt(look)
    // logo fades in after the pull-back
    logo.material.opacity = Math.min(1, Math.max(0, (t - 3.4) / 1.2))
    logo.lookAt(camera.position)
    // turn: idle spin plus drag momentum
    if (!dragging) { spinV *= Math.pow(0.04, dt); jar.rotation.y += (reduce ? 0 : 0.63) * dt + spinV * dt }
    // float and tilt
    const f = reduce ? 0 : 1
    jar.position.y = -(BODY_H + LID_H) / 2 + f * 0.035 * Math.sin(t * 1.1)
    jar.rotation.z = f * 0.035 * Math.sin(t * 0.7); jar.rotation.x = f * 0.03 * Math.sin(t * 0.9 + 1)
    shadow.scale.setScalar(1 - 0.06 * Math.sin(t * 1.1) * f)
    // lid pop: up with a twist, then settles back
    if (popT >= 0) {
      popT += dt
      const p = popT < 0.45 ? ease(popT / 0.45) : Math.max(0, 1 - ease((popT - 1.1) / 0.6))
      lid.position.y = BODY_H + 0.04 + 0.32 * p
      lid.rotation.y = 1.6 * p
      if (popT > 1.8) { popT = -1; lid.position.y = BODY_H + 0.04; lid.rotation.y = 0 }
    }
    renderer.render(scene, camera)
  }
  requestAnimationFrame(frame)
  return { jar, lid }
}

window.MBJar = { mount }
