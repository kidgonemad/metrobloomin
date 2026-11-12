import { useRef, useMemo, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { CanvasTexture, SRGBColorSpace } from 'three'

// The vintage metal ashtray (owner's model): once the TV has landed it slides in from off-screen left,
// eases past its spot a touch and settles, with a little spin as it skids. It sits on the floor just in
// front of the TV's lower-left corner (visible on desktop, and on phones in the space left of the remote).
// `rest` is the TV's box at rest ({ base, size }), as in CrashIn.

const BASE = import.meta.env.BASE_URL
const DRACO = BASE + 'draco/'
const URL = BASE + 'assets/ashtray.glb'
useGLTF.preload(URL, DRACO)

const MODEL_W = 0.127      // the model's own width (it is modelled in metres, base at y = 0)
const TV_H_M = 0.45        // a small CRT is about 45 cm tall: sets the ashtray's scale against the TV
const SLIDE_S = 1.4        // slide duration
const DELAY_S = 0.35       // after the TV lands

function shadowTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 128
  const g = c.getContext('2d'), grad = g.createRadialGradient(64, 64, 0, 64, 64, 64)
  ;[[0, 0.55], [0.5, 0.3], [1, 0]].forEach(([at, a]) => grad.addColorStop(at, `rgba(0,0,0,${a})`))
  g.fillStyle = grad; g.fillRect(0, 0, 128, 128)
  const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace
  return t
}

// ease out with a small overshoot, like something skidding to a stop
function easeOutBack(x) { const c = 1.2, c3 = c + 1; return 1 + c3 * Math.pow(x - 1, 3) + c * Math.pow(x - 1, 2) }

export default function Ashtray({ rest, landed, anchorRef }) {
  const { scene } = useGLTF(URL, DRACO)
  const { size } = useThree()
  const phone = size.width < size.height
  const obj = useMemo(() => {
    const o = scene.clone(true)
    o.traverse((m) => { if (m.isMesh) m.raycast = () => {} })   // taps go to the remote
    return o
  }, [scene])
  const group = useRef()
  const shadow = useRef()
  const shadowTex = useMemo(shadowTexture, [])
  useEffect(() => () => shadowTex.dispose(), [shadowTex])
  const clock = useRef(-1)
  useEffect(() => { if (landed) clock.current = -DELAY_S }, [landed])

  // its place and size, from the TV
  const place = useMemo(() => {
    if (!rest) return null
    const [bx, by, bz] = rest.base, [w, h, d] = rest.size
    const scale = (h / TV_H_M) * 1.25                      // real size against the TV, a touch larger to read
    const aw = MODEL_W * scale
    return {
      scale, aw,
      x: bx - w * (phone ? 0.3 : 0.34), y: by, z: bz + d * 0.5 + aw * (phone ? 3.0 : 1.4),   // on the floor, in front of the TV's lower-left (nearer you)
      from: bx - w * 2.6,                                    // well off-screen left
    }
  }, [rest, phone])

  useFrame((_, delta) => {
    if (!place || !group.current) return
    let k = 0
    if (clock.current > -1e8 && landed) {
      clock.current += Math.min(delta, 1 / 30)
      k = clock.current <= 0 ? 0 : Math.min(1, clock.current / SLIDE_S)
    }
    const e = easeOutBack(k)
    const x = place.from + (place.x - place.from) * e
    group.current.visible = landed && clock.current > 0
    group.current.position.set(x, place.y, place.z)
    group.current.rotation.set(0, 0.5 + (1 - e) * 2.2, 0)   // spins as it skids, settles at a slight angle
    group.current.scale.setScalar(place.scale)
    if (shadow.current) {
      shadow.current.visible = group.current.visible
      // a soft upright ellipse just behind the base (like the TV's): a floor plane turns into a streak
      // when the camera sits almost level with the floor (phones)
      shadow.current.position.set(x, place.y, place.z - place.aw * 0.35)
      shadow.current.scale.set(place.aw * 1.7, place.aw * 0.28, 1)
    }
  })

  if (!place) return null
  return (
    <>
      <group ref={group} visible={false}>
        <primitive object={obj} />
        {/* where the joint rests (Joint.jsx): across the rim, its lit end (+X) turned in and dipping into the bowl */}
        <group ref={anchorRef} position={[0.032, 0.047, 0.012]} rotation={[0, Math.PI * 0.85, -0.14]} />
      </group>
      <mesh ref={shadow} visible={false} renderOrder={-1}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial map={shadowTex} transparent depthWrite={false} />
      </mesh>
    </>
  )
}
