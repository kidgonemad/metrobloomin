import { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { CanvasTexture, SRGBColorSpace, Quaternion } from 'three'
import { CRASH_T, CRASH_POS, CRASH_ROT } from './crashKeys'

// The TV's entrance, played as is from the Shopify Editions Winter '25 TV (see crashKeys.js):
// it falls straight down, crash-lands, rocks back, hops twice and settles (about 1.1 s).
// Then onLanded fires and the set switches on.
//
// `rest` is the TV's bounding box at rest ({ base: [x, y, z], size: [w, h, d] }), null until the
// model has loaded. The keyframes pivot on the middle of the TV's base, as in the original.

const END = CRASH_T[CRASH_T.length - 1]
const SHADOW_DELAY = 0.3   // the original's shadow fades in 300 ms after the drop starts...
const SHADOW_FADE = 0.3    // ...over 300 ms, growing from half size

function shadowTexture() {
  const c = document.createElement('canvas')
  c.width = c.height = 128
  const g = c.getContext('2d')
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64)
  ;[[0, 1], [0.35, 0.7], [0.7, 0.2], [1, 0]].forEach(([at, a]) => grad.addColorStop(at, `rgba(0,0,0,${a})`))
  g.fillStyle = grad
  g.fillRect(0, 0, 128, 128)
  const t = new CanvasTexture(c)
  t.colorSpace = SRGBColorSpace
  return t
}

const qa = new Quaternion(), qb = new Quaternion()

export default function CrashIn({ rest, onLanded, children }) {
  const outer = useRef()
  const shadow = useRef()
  const clock = useRef(-1)
  const fired = useRef(false)
  const shadowTex = useMemo(shadowTexture, [])
  useEffect(() => () => shadowTex.dispose(), [shadowTex])
  useEffect(() => { if (rest) clock.current = 0 }, [rest])

  useFrame((_, delta) => {
    if (!rest || clock.current < 0 || !outer.current) return
    clock.current += Math.min(delta, 1 / 30)
    const t = Math.min(clock.current, END)

    // linear interpolation between the two keyframes around t, like the original clip
    let i = 0
    while (i < CRASH_T.length - 2 && CRASH_T[i + 1] < t) i++
    const k = Math.min(1, Math.max(0, (t - CRASH_T[i]) / (CRASH_T[i + 1] - CRASH_T[i])))
    const h = rest.size[1]
    const p = (n) => (CRASH_POS[i * 3 + n] + (CRASH_POS[(i + 1) * 3 + n] - CRASH_POS[i * 3 + n]) * k) * h
    outer.current.position.set(rest.base[0] + p(0), rest.base[1] + p(1), rest.base[2] + p(2))
    qa.fromArray(CRASH_ROT, i * 4)
    qb.fromArray(CRASH_ROT, (i + 1) * 4)
    outer.current.quaternion.slerpQuaternions(qa, qb, k)

    if (shadow.current) {
      const f = Math.min(1, Math.max(0, (clock.current - SHADOW_DELAY) / SHADOW_FADE))
      const s = 0.5 + 0.5 * f
      // like the original's shadow image: a soft flat ellipse facing the viewer, centred on the
      // base line just behind the TV (a floor plane would turn into a thin streak when seen level)
      shadow.current.position.set(rest.base[0], rest.base[1], rest.base[2] - rest.size[2] * 0.45)
      shadow.current.scale.set(rest.size[0] * 1.45 * s, rest.size[1] * 0.16 * s, 1)
      shadow.current.material.opacity = 0.4 * f
    }

    if (!fired.current && clock.current >= END) {
      fired.current = true
      onLanded && onLanded()
    }
  })

  const base = rest ? rest.base : [0, 0, 0]
  return (
    <>
      {/* pivot on the TV's base: outer sits there, inner moves the model back so nothing jumps */}
      <group ref={outer} visible={!!rest}>
        <group position={[-base[0], -base[1], -base[2]]}>{children}</group>
      </group>
      {rest && (
        <mesh ref={shadow} renderOrder={-1}>
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial map={shadowTex} transparent depthWrite={false} opacity={0} />
        </mesh>
      )}
    </>
  )
}
