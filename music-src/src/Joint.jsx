import { useRef, useMemo, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Vector3, Quaternion, Euler, CanvasTexture, SRGBColorSpace, AdditiveBlending, SpriteMaterial, Color } from 'three'

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
  const root = useRef(), ember = useRef(), glow = useRef(), light = useRef(), smoke = useRef([])

  const tex = useMemo(() => ({
    glow: radial([[0, 'rgba(255,190,90,1)'], [0.3, 'rgba(255,110,30,0.6)'], [1, 'rgba(255,60,0,0)']]),
    smoke: radial([[0, 'rgba(235,235,235,0.9)'], [0.5, 'rgba(225,225,225,0.35)'], [1, 'rgba(220,220,220,0)']]),
  }), [])
  const smokeMats = useMemo(() => Array.from({ length: SMOKE_N }, () =>
    new SpriteMaterial({ map: tex.smoke, transparent: true, depthWrite: false, opacity: 0 })), [tex])
  useEffect(() => () => { tex.glow.dispose(); tex.smoke.dispose(); smokeMats.forEach((m) => m.dispose()) }, [tex, smokeMats])

  const st = useRef({ held: false, lit: false, k: 0, t: 0, puff: 0, nextPuff: 2.5, acc: 0, next: 0,
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
    const f = 0.8 + 0.12 * Math.sin(s.t * 13) + 0.08 * Math.sin(s.t * 31 + 1)
    const heat = s.lit ? f * (1 + 1.4 * s.puff) : 0
    if (ember.current) ember.current.material.color.setRGB(0.18 + 1.1 * heat, 0.16 + 0.45 * heat, 0.14 + 0.1 * heat)
    if (glow.current) { glow.current.material.opacity = Math.min(1, 0.55 * heat); glow.current.scale.setScalar(0.022 * (1 + 0.5 * s.puff)) }
    if (light.current) { light.current.intensity = 1.8 * heat; light.current.distance = r.scale.x * 0.12 }

    // smoke: soft puffs from the tip, rising and curling in world space, growing and fading
    const S = r.scale.x
    tip.copy(TIP).applyMatrix4(r.matrixWorld)
    if (s.lit && r.visible) {
      s.acc += dt * (s.held ? 9 : 4) * (1 + 3 * s.puff)
      while (s.acc >= 1) {
        s.acc -= 1
        const q = s.parts[s.next]; s.next = (s.next + 1) % SMOKE_N
        q.life = 0; q.max = 2 + Math.random() * 1.4; q.p.copy(tip); q.ph = Math.random() * 6.28
        q.v.set((Math.random() - 0.5) * S * 0.01, S * (0.035 + Math.random() * 0.03) * (1 + s.puff), (Math.random() - 0.5) * S * 0.01)
        q.s0 = S * 0.006; q.s1 = S * (0.035 + Math.random() * 0.03) * (1 + 0.6 * s.puff)
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
      sp.scale.setScalar(q.s0 + (q.s1 - q.s0) * Math.sqrt(x))
      sp.material.opacity = 0.42 * Math.min(1, q.life / 0.15) * (1 - x) * (1 - x)
      sp.material.rotation = q.ph + q.life * 0.4
    })
  })

  return (
    <>
      <group ref={root} visible={false}>
        <primitive object={obj} />
        {/* the burning end: ember, glow, a little warm light */}
        <mesh ref={ember} position={TIP} raycast={() => null}>
          <sphereGeometry args={[0.0036, 12, 8]} />
          <meshBasicMaterial color={new Color(0.18, 0.16, 0.14)} toneMapped={false} />
        </mesh>
        <sprite ref={glow} position={TIP} scale={0.022} raycast={() => null}>
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
    </>
  )
}
