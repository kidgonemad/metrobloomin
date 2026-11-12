import { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { CanvasTexture, SRGBColorSpace } from 'three'

// The TV's entrance: it drops in from above the frame, slightly tilted, crash-lands
// (squash, screen shake, dust puff), bounces twice and settles. Then onLanded fires
// and the set switches on.
//
// `rest` is the TV's bounding box measured at rest ({ base: [x, y, z], size: [w, h, d] }),
// null until the model has loaded. Everything pivots on the middle of the TV's base,
// so the tilt and the squash happen where it touches the ground.

const FALL_S = 0.55          // time from the top of the frame to the ground
const BOUNCE = 0.26          // how much speed survives each impact
const BOUNCES = 2            // small hops after the crash before it stays down
const TILT = [-0.09, 0, 0.14] // lean on the way down (x, y, z radians)

// soft round blob: rgb at full strength in the middle, fading smoothly (no visible rim) to nothing
function radialTexture(rgb) {
  const c = document.createElement('canvas')
  c.width = c.height = 128
  const g = c.getContext('2d')
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64)
  ;[[0, 1], [0.25, 0.8], [0.5, 0.42], [0.75, 0.12], [1, 0]].forEach(([at, a]) => grad.addColorStop(at, `rgba(${rgb},${a})`))
  g.fillStyle = grad
  g.fillRect(0, 0, 128, 128)
  const t = new CanvasTexture(c)
  t.colorSpace = SRGBColorSpace
  return t
}

const DUST = 40

export default function CrashIn({ rest, onImpact, onLanded, children }) {
  const outer = useRef()
  const inner = useRef()
  const shadow = useRef()
  const dust = useRef([])
  const sim = useRef(null)

  const shadowTex = useMemo(() => radialTexture('0,0,0'), [])
  const dustTex = useMemo(() => radialTexture('196,189,176'), [])   // light dusty beige
  useEffect(() => () => { shadowTex.dispose(); dustTex.dispose() }, [shadowTex, dustTex])

  // a fixed spray pattern: every particle heads outward along the ground, a few kick up
  const spray = useMemo(() => Array.from({ length: DUST }, (_, i) => {
    const a = (i / DUST) * Math.PI * 2 + Math.random() * 0.4
    const z = Math.sin(a)
    // out to the sides and back; only a little toward the camera so it never clouds the screen
    return { dx: Math.cos(a), dz: z > 0 ? z * 0.35 : z * 0.8, up: 0.1 + Math.random() * 0.45, speed: 0.6 + Math.random() * 0.7, size: 0.8 + Math.random() * 0.9 }
  }), [])

  // start the drop once the resting position is known
  useEffect(() => {
    if (!rest) return
    const h = rest.size[1]
    const height = h * 3.2                      // starts well above the top of the frame
    const g = (2 * height) / (FALL_S * FALL_S)
    sim.current = { y: height, vy: 0, g, bounces: 0, landedAt: -1, impactAt: -1, t: 0, done: false, firedLanded: false }
  }, [rest])

  useFrame((_, delta) => {
    const s = sim.current
    if (!rest || !s || !outer.current) return
    const dt = Math.min(delta, 1 / 30)
    s.t += dt
    const [w, h, d] = rest.size

    // --- fall and bounces ---
    if (s.landedAt < 0) {
      s.vy -= s.g * dt
      s.y += s.vy * dt
      if (s.y <= 0) {
        s.y = 0
        if (s.impactAt < 0) { s.impactAt = s.t; onImpact && onImpact() }
        if (s.bounces < BOUNCES) { s.vy = -s.vy * BOUNCE * (s.bounces ? 0.6 : 1); s.bounces++ }
        else { s.vy = 0; s.landedAt = s.t }
      }
    }
    const since = s.impactAt < 0 ? -1 : s.t - s.impactAt

    // --- tilt: leans while falling, rocks after the crash and settles flat ---
    const rock = since < 0 ? 1 : Math.exp(-6 * since) * Math.cos(16 * since) * 0.5
    outer.current.rotation.set(TILT[0] * rock, TILT[1], TILT[2] * rock)
    outer.current.position.set(rest.base[0], rest.base[1] + s.y, rest.base[2])

    // --- squash on impact, springing back ---
    const sq = since < 0 ? 0 : 0.1 * Math.exp(-9 * since) * Math.cos(22 * since)
    outer.current.scale.set(1 + sq * 0.5, 1 - sq, 1 + sq * 0.5)

    // --- shadow: small and faint while high up, full once down ---
    if (shadow.current) {
      const near = 1 - Math.min(1, s.y / (h * 3.2))
      shadow.current.position.set(rest.base[0], rest.base[1] + 0.002, rest.base[2])
      shadow.current.scale.set(w * (0.7 + 0.6 * near), d * (0.9 + 0.9 * near), 1)
      shadow.current.material.opacity = 0.08 + 0.32 * near * near
    }

    // --- dust puff along the ground from the impact ---
    dust.current.forEach((m, i) => {
      if (!m) return
      if (since < 0 || since > 1.2) { m.visible = false; return }
      const p = spray[i], k = 1 - Math.exp(-3.5 * since)   // fast out, slowing down
      m.visible = true
      m.position.set(
        rest.base[0] + p.dx * w * (0.45 + 0.55 * k * p.speed),
        rest.base[1] + h * 0.03 + p.up * h * 0.14 * k,
        rest.base[2] + p.dz * d * (0.6 + 0.9 * k * p.speed),
      )
      m.scale.setScalar(w * 0.2 * p.size * (0.6 + 1.2 * k))      // billows as it spreads
      m.material.opacity = 0.42 * (1 - since / 1.2) ** 1.5
    })

    if (s.landedAt >= 0 && !s.firedLanded && s.t - s.landedAt > 0.25) {
      s.firedLanded = true
      onLanded && onLanded()
    }
  })

  const base = rest ? rest.base : [0, 0, 0]
  return (
    <>
      {/* pivot on the TV's base: outer sits there, inner moves the model back so nothing jumps */}
      <group ref={outer} visible={!!rest}>
        <group ref={inner} position={[-base[0], -base[1], -base[2]]}>
          {children}
        </group>
      </group>
      {rest && (
        <mesh ref={shadow} rotation={[-Math.PI / 2, 0, 0]} renderOrder={-1}>
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial map={shadowTex} transparent depthWrite={false} opacity={0} />
        </mesh>
      )}
      {rest && spray.map((_, i) => (
        <sprite key={i} ref={(m) => { dust.current[i] = m }} visible={false}>
          <spriteMaterial map={dustTex} transparent depthWrite={false} opacity={0} />
        </sprite>
      ))}
    </>
  )
}
