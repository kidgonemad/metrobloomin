import { useRef, useMemo, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Vector3, Vector2, Quaternion, Euler, CanvasTexture, SRGBColorSpace, AdditiveBlending, SpriteMaterial, ShaderMaterial, LatheGeometry } from 'three'

// The joint (owner's model). It rests across the ashtray's rim (anchorRef, set by Ashtray.jsx) and rides in with
// it. Tap it: it flies up to a first-person spot at lower left, as if held by an invisible hand: lit, ember
// glowing, smoke curling off the tip, swaying, and every few seconds a "pull" (the ember flares, a puff of smoke).
// Tap again: it flies back to the tray and keeps smouldering there.
//
// Model: 7.9 cm long along +X, the burnt (ash) end at +X.

const BASE = import.meta.env.BASE_URL
const DRACO = BASE + 'draco/'
const URL = BASE + 'assets/joint.glb'
useGLTF.preload(URL, DRACO)

const LEN = 0.079                         // model length (m)
const TIP = new Vector3(0.0405, 0, 0)     // the burning end, in model space
const FLY_S = 0.9                         // tray <-> hand
const DIST = 0.6                          // hand distance in front of the camera (scene units): close, like it's yours
const SMOKE_N = 56
const SPARK_N = 8

// the cherry: a cap over the joint's burnt end. Grey ash with glowing cracks that brighten toward the tip and flare
// on a pull; a charred ring where it meets the paper.
const cherryGeo = (() => {
  const g = new LatheGeometry([[0.0037, 0.0334], [0.0036, 0.0356], [0.0032, 0.0379], [0.0025, 0.0398], [0.0015, 0.0411], [0.0001, 0.0416]].map(([r, y]) => new Vector2(r, y)), 28)
  g.rotateZ(-Math.PI / 2)   // lathe axis (y) -> the joint's axis (x)
  return g
})()
const cherryMat = () => new ShaderMaterial({
  uniforms: { uHeat: { value: 0 }, uTime: { value: 0 } },
  vertexShader: `varying vec3 vP; varying vec3 vN; void main(){ vP = position; vN = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: `
    uniform float uHeat; uniform float uTime; varying vec3 vP; varying vec3 vN;
    float h(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
    float n3(vec3 p){ vec3 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
      return mix(mix(mix(h(i), h(i+vec3(1,0,0)), f.x), mix(h(i+vec3(0,1,0)), h(i+vec3(1,1,0)), f.x), f.y),
                 mix(mix(h(i+vec3(0,0,1)), h(i+vec3(1,0,1)), f.x), mix(h(i+vec3(0,1,1)), h(i+vec3(1,1,1)), f.x), f.y), f.z); }
    void main(){
      float a = clamp((vP.x - 0.0338) / 0.0082, 0.0, 1.0);            // 0 at the paper, 1 at the tip
      vec3 q = vP * 760.0;
      float n = 0.6 * n3(q) + 0.4 * n3(q * 2.3 + 7.0);
      float ridge = 1.0 - abs(2.0 * n - 1.0);                          // thin lines = cracks in the ash
      float crack = smoothstep(0.66, 0.9, ridge);
      float flick = 0.75 + 0.25 * n3(vec3(vP.yz * 900.0, uTime * 2.5));
      float ember = (crack * (0.3 + 0.7 * a) + smoothstep(0.62, 1.0, a) * 0.8) * smoothstep(0.08, 0.3, a);   // cracks + a glowing core at the end
      ember += max(0.0, uHeat - 1.0) * 0.55 * smoothstep(0.15, 0.6, a) * (0.4 + 0.6 * n);   // a pull lights the whole cherry
      vec3 ash = mix(vec3(0.03, 0.029, 0.028), vec3(0.16, 0.155, 0.15), n3(q * 0.5 + 3.0)) * (0.6 + 0.4 * max(0.0, vN.y * 0.6 + 0.6));   // dark grey, lighter flecks
      ash = mix(vec3(0.006), ash, smoothstep(0.02, 0.22, a + (n - 0.5) * 0.12));           // charred, ragged ring
      vec3 hot = mix(vec3(1.0, 0.22, 0.02), vec3(1.0, 0.78, 0.3), clamp(uHeat - 0.9, 0.0, 1.0));
      vec3 c = ash * (1.0 - 0.6 * clamp(ember, 0.0, 1.0)) + hot * ember * flick * min(uHeat, 1.0) * 1.7;
      gl_FragColor = vec4(c, 1.0);
      #include <colorspace_fragment>
    }`,
})

// a thin wisp of smoke: a few soft blobs along a wavering vertical line
function wispTexture() {
  const c = document.createElement('canvas'); c.width = 64; c.height = 160
  const g = c.getContext('2d')
  for (let i = 0; i < 9; i++) {
    const y = 14 + i * 16, x = 32 + Math.sin(i * 1.3) * 9, r = 9 + (i % 3) * 4
    const gr = g.createRadialGradient(x, y, 0, x, y, r * 1.6)
    gr.addColorStop(0, 'rgba(232,232,236,0.5)'); gr.addColorStop(0.5, 'rgba(226,226,230,0.18)'); gr.addColorStop(1, 'rgba(220,220,225,0)')
    g.fillStyle = gr; g.fillRect(0, 0, 64, 160)
  }
  const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace
  return t
}

function radial(stops) {
  const c = document.createElement('canvas'); c.width = c.height = 64
  const g = c.getContext('2d'), grad = g.createRadialGradient(32, 32, 0, 32, 32, 32)
  stops.forEach(([at, col]) => grad.addColorStop(at, col))
  g.fillStyle = grad; g.fillRect(0, 0, 64, 64)
  const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace
  return t
}

const ease = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2)

export default function Joint({ anchorRef }) {
  const { scene } = useGLTF(URL, DRACO)
  const obj = useMemo(() => {
    const o = scene.clone(true)
    o.traverse((m) => { if (m.isMesh) m.raycast = () => {} })   // the hit box below takes the taps
    return o
  }, [scene])
  const { camera, size } = useThree()
  const root = useRef(), glow = useRef(), halo = useRef(), light = useRef(), smoke = useRef([]), sparks = useRef([])
  const cherry = useMemo(cherryMat, [])

  const tex = useMemo(() => ({
    glow: radial([[0, 'rgba(255,190,90,1)'], [0.3, 'rgba(255,110,30,0.6)'], [1, 'rgba(255,60,0,0)']]),
    smoke: wispTexture(),
  }), [])
  const smokeMats = useMemo(() => Array.from({ length: SMOKE_N }, () =>
    new SpriteMaterial({ map: tex.smoke, transparent: true, depthWrite: false, opacity: 0 })), [tex])
  const sparkMats = useMemo(() => Array.from({ length: SPARK_N }, () =>
    new SpriteMaterial({ map: tex.glow, transparent: true, depthWrite: false, opacity: 0, blending: AdditiveBlending, toneMapped: false })), [tex])
  useEffect(() => () => { tex.glow.dispose(); tex.smoke.dispose(); smokeMats.forEach((m) => m.dispose()); sparkMats.forEach((m) => m.dispose()); cherry.dispose() }, [tex, smokeMats, sparkMats, cherry])

  const st = useRef({ held: false, lit: false, k: 0, t: 0, puff: 0, nextPuff: 2.5, acc: 0, next: 0, sparked: false,
    sp: Array.from({ length: SPARK_N }, () => ({ life: -1, p: new Vector3(), v: new Vector3() })),
    parts: Array.from({ length: SMOKE_N }, () => ({ life: -1, max: 1, p: new Vector3(), v: new Vector3(), s0: 0, s1: 0, ph: 0 })) })
  const tmp = useMemo(() => ({ pA: new Vector3(), qA: new Quaternion(), sA: new Vector3(), pB: new Vector3(), qB: new Quaternion(),
    qS: new Quaternion(), e: new Euler(), tip: new Vector3(), up: new Vector3() }), [])
  // held like a hand would: the lit end up, to the right and away from you
  const hold = useMemo(() => new Quaternion().setFromUnitVectors(new Vector3(1, 0, 0), new Vector3(0.62, 0.36, -0.7).normalize()), [])

  const toggle = (e) => {
    e.stopPropagation(); e.nativeEvent?.stopPropagation()
    const s = st.current; s.held = !s.held
    if (s.held) { s.lit = true; s.nextPuff = s.t + 1.6 }
  }
  // like the remote's buttons: act on pointerdown, and keep the click that follows off the canvas
  const swallow = (e) => e.nativeEvent?.stopPropagation()
  const hover = {
    onPointerOver: () => (document.body.style.cursor = 'pointer'),
    onPointerOut: () => (document.body.style.cursor = 'auto'),
  }

  // read by the site tests: the joint's world position and where it is on screen
  useEffect(() => {
    window.__jointPos = () => root.current && root.current.position.toArray()
    window.__jointScreen = () => { const r = root.current; if (!r) return null; const v = r.position.clone().project(camera); return [(v.x + 1) / 2 * size.width, (1 - v.y) / 2 * size.height] }
  }, [camera, size])
  useFrame((_, delta) => {
    const s = st.current, a = anchorRef.current, r = root.current
    if (!a || !r) return
    const dt = Math.min(delta, 1 / 30); s.t += dt
    const { pA, qA, sA, pB, qB, qS, e, tip } = tmp

    // on the tray: follow the anchor (it rides in with the ashtray, hidden until the ashtray shows)
    let shown = true; a.traverseAncestors((o) => { if (o.visible === false) shown = false })
    a.updateWorldMatrix(true, false); a.matrixWorld.decompose(pA, qA, sA)

    // in the hand: pinned in front of the camera, lower left, swaying
    const aspect = size.width / size.height, phone = aspect < 1
    const h = 2 * Math.tan(((camera.fov || 45) * Math.PI) / 360) * DIST, w = h * aspect
    const sc = Math.min(0.72 * w, 0.6 * h) / LEN          // big in frame: held right in front of you
    const sw = (hz, ph) => Math.sin(s.t * hz * Math.PI * 2 + ph)
    pB.set(-w * (phone ? 0.12 : 0.2) + h * 0.012 * sw(0.21, 0), -h * (phone ? 0.04 : 0.24) + h * 0.014 * sw(0.17, 1) - h * 0.01 * s.puff, -DIST)
      .applyQuaternion(camera.quaternion).add(camera.position)
    e.set(0.05 * sw(0.23, 2), 0.06 * sw(0.13, 3), 0.07 * sw(0.19, 4) + 0.08 * s.puff); qS.setFromEuler(e)
    qB.copy(camera.quaternion).multiply(hold).multiply(qS)

    // fly between them (eased, on a small arc)
    s.k = Math.min(1, Math.max(0, s.k + ((s.held ? 1 : -1) * dt) / FLY_S))
    const u = ease(s.k)
    r.position.lerpVectors(pA, pB, u)
    r.position.y += Math.sin(Math.PI * u) * pA.distanceTo(pB) * 0.12
    r.quaternion.slerpQuaternions(qA, qB, u)
    r.scale.setScalar(sA.x + (sc - sA.x) * u)
    r.visible = shown || s.k > 0

    // the ember: flickers; a "pull" every few seconds while held (flares, then a puff of smoke)
    if (s.lit && s.held && s.t > s.nextPuff) { s.nextPuff = s.t + 4 + Math.random() * 2.5; s.puffT = s.t }
    const pt = s.puffT ? s.t - s.puffT : 99
    s.puff = pt < 0.8 ? pt / 0.8 : pt < 2 ? 1 - (pt - 0.8) / 1.2 : 0
    // uneven flicker (several unrelated rates), flaring on a pull
    const f = 0.78 + 0.1 * Math.sin(s.t * 7.3) + 0.07 * Math.sin(s.t * 17.1 + 1) + 0.05 * Math.sin(s.t * 29.7 + 2)
    const heat = s.lit ? f * (1 + 1.3 * s.puff) : 0
    cherry.uniforms.uHeat.value = heat; cherry.uniforms.uTime.value = s.t
    if (glow.current) { glow.current.material.opacity = Math.min(1, 0.5 * heat); glow.current.scale.setScalar(0.011 * (1 + 0.6 * s.puff)) }
    if (halo.current) { halo.current.material.opacity = Math.min(0.5, 0.1 * heat + 0.25 * s.puff); halo.current.scale.setScalar(0.03 * (1 + 0.5 * s.puff)) }
    if (light.current) { light.current.intensity = 1.6 * heat; light.current.distance = r.scale.x * 0.12 }

    // smoke: soft puffs from the tip, rising and curling in world space, growing and fading
    const S = r.scale.x
    tip.copy(TIP).applyMatrix4(r.matrixWorld)
    if (s.lit && r.visible) {
      s.acc += dt * (s.held ? 9 : 4) * (1 + 3 * s.puff)
      while (s.acc >= 1) {
        s.acc -= 1
        const q = s.parts[s.next]; s.next = (s.next + 1) % SMOKE_N
        q.life = 0; q.max = 2.4 + Math.random() * 1.6; q.p.copy(tip); q.ph = Math.random() * 6.28
        q.v.set((Math.random() - 0.5) * S * 0.006, S * (0.03 + Math.random() * 0.02) * (1 + 0.8 * s.puff), (Math.random() - 0.5) * S * 0.006)
        q.s0 = S * 0.004; q.s1 = S * (0.016 + Math.random() * 0.014) * (1 + 1.2 * s.puff)   // thin; a pull's puff is fuller
      }
    }
    s.parts.forEach((q, i) => {
      const sp = smoke.current[i]; if (!sp) return
      if (q.life < 0) { sp.visible = false; return }
      q.life += dt
      if (q.life > q.max) { q.life = -1; sp.visible = false; return }
      const x = q.life / q.max
      q.p.addScaledVector(q.v, dt)
      q.p.x += Math.sin(q.life * 2.2 + q.ph) * S * 0.006 * dt * 6     // curl
      sp.visible = true
      sp.position.copy(q.p)
      const wd = q.s0 + (q.s1 - q.s0) * Math.sqrt(x)
      sp.scale.set(wd, wd * (2.2 + 1.5 * x), 1)                       // a wisp: tall and thin, stretching as it rises
      sp.material.opacity = 0.5 * Math.min(1, q.life / 0.2) * (1 - x) * (1 - x)
      sp.material.rotation = Math.sin(q.ph + q.life * 0.8) * 0.35
    })

    // sparks: a few tiny embers pop off the cherry at the peak of a pull, fall and fade
    if (s.puff > 0.85 && !s.sparked) { s.sparked = true
      for (let k = 0; k < 3; k++) { const q = s.sp.find((z) => z.life < 0); if (!q) break
        q.life = 0; q.p.copy(tip); q.v.set((Math.random() - 0.5) * S * 0.05, S * (0.02 + Math.random() * 0.04), (Math.random() - 0.5) * S * 0.05) } }
    if (s.puff < 0.1) s.sparked = false
    s.sp.forEach((q, i) => {
      const sp = sparks.current[i]; if (!sp) return
      if (q.life < 0) { sp.visible = false; return }
      q.life += dt; if (q.life > 0.9) { q.life = -1; sp.visible = false; return }
      q.v.y -= S * 0.16 * dt; q.p.addScaledVector(q.v, dt)
      sp.visible = true; sp.position.copy(q.p); sp.scale.setScalar(S * 0.0035)
      sp.material.opacity = 1 - q.life / 0.9
    })
  })

  return (
    <>
      <group ref={root} visible={false}>
        <primitive object={obj} />
        {/* the burning end: ember, glow, a little warm light */}
        <mesh geometry={cherryGeo} material={cherry} raycast={() => null} />
        {/* a small tight glow on the tip and a faint wide halo */}
        <sprite ref={glow} position={TIP} scale={0.011} raycast={() => null}>
          <spriteMaterial map={tex.glow} transparent opacity={0} depthWrite={false} blending={AdditiveBlending} toneMapped={false} />
        </sprite>
        <sprite ref={halo} position={TIP} scale={0.03} raycast={() => null}>
          <spriteMaterial map={tex.glow} transparent opacity={0} depthWrite={false} blending={AdditiveBlending} toneMapped={false} />
        </sprite>
        <pointLight ref={light} position={TIP} color="#ff7a2a" intensity={0} decay={2} />
        {/* tap target: on the tray it covers the whole ashtray (the joint itself is small on a phone) */}
        <mesh position={[0.012, -0.02, 0]} onPointerDown={toggle} onClick={swallow} {...hover}>
          <boxGeometry args={[0.15, 0.07, 0.13]} />
          <meshBasicMaterial transparent opacity={0} depthWrite={false} colorWrite={false} />
        </mesh>
      </group>
      {smokeMats.map((m, i) => (
        <sprite key={i} ref={(el) => { smoke.current[i] = el }} material={m} visible={false} raycast={() => null} />
      ))}
      {sparkMats.map((m, i) => (
        <sprite key={'s' + i} ref={(el) => { sparks.current[i] = el }} material={m} visible={false} raycast={() => null} />
      ))}
    </>
  )
}
