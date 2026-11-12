import { Suspense, useRef, useState, useCallback, useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { CameraControls, Environment, Lightformer } from '@react-three/drei'
import { Box3, Vector3, MathUtils } from 'three'
import Model from './Model'
import RemoteHud from './RemoteHud'
import useChannelStore from './store'
import './App.css'

// Lights: no network-loaded HDR; a few soft light panels give the TV its reflections.
function SceneLights() {
  return (
    <>
      <color attach="background" args={['#ebebe8']} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 8, 5]} intensity={1.4} />
      <directionalLight position={[-3, 4, -5]} intensity={0.4} />
      <Environment resolution={256}>
        <Lightformer form="rect" intensity={2} position={[0, 4, 6]} scale={[10, 4, 1]} />
        <Lightformer form="rect" intensity={1} position={[-6, 2, 2]} rotation-y={Math.PI / 2} scale={[6, 4, 1]} />
        <Lightformer form="rect" intensity={1} position={[6, 2, 2]} rotation-y={-Math.PI / 2} scale={[6, 4, 1]} />
      </Environment>
    </>
  )
}

// Frames the TV: camera straight in front of the screen, close enough to fill the view; orbit only sideways.
function useFrameTv(controlsRef) {
  const { scene, camera, size } = useThree()
  return useCallback(() => {
    const ctrl = controlsRef.current
    let tv = null
    scene.traverse((o) => { if (o.name === 'tv') tv = o })
    if (!ctrl || !tv) return
    const box = new Box3().setFromObject(tv), c = box.getCenter(new Vector3()), s = box.getSize(new Vector3())
    // the screen faces +Z in world space for this model (the original close-up looks down -Z at it)
    const aspect = size.width / size.height
    const fitH = s.y / 2 / Math.tan(MathUtils.degToRad(camera.fov / 2))
    const fitW = s.x / 2 / Math.tan(MathUtils.degToRad(camera.fov / 2)) / aspect
    const dist = Math.max(fitH, fitW) * (aspect < 1 ? 1.55 : 1.45) + s.z / 2
    // phones: the remote fills the bottom of the screen, so the TV sits in the top part
    const visH = 2 * dist * Math.tan(MathUtils.degToRad(camera.fov / 2))
    const dy = aspect < 1 ? visH * 0.17 : 0
    ctrl.setLookAt(c.x, c.y + s.y * 0.05 - dy, c.z + dist, c.x, c.y - dy, c.z, false)
    ctrl.minAzimuthAngle = ctrl.azimuthAngle - MathUtils.degToRad(25)
    ctrl.maxAzimuthAngle = ctrl.azimuthAngle + MathUtils.degToRad(25)
    ctrl.minPolarAngle = ctrl.polarAngle - MathUtils.degToRad(10)
    ctrl.maxPolarAngle = ctrl.polarAngle + MathUtils.degToRad(8)
  }, [scene, camera, size, controlsRef])
}

function Rig({ controlsRef, onReady }) {
  const frameTv = useFrameTv(controlsRef)
  const ready = useRef(false)
  useEffect(() => { if (ready.current) frameTv() }, [frameTv])   // re-frame on resize
  return (
    <Model onReady={() => {
      ready.current = true
      requestAnimationFrame(() => { frameTv(); onReady() })
    }} />
  )
}

export default function App() {
  const controlsRef = useRef()
  const [loaded, setLoaded] = useState(false)

  // Keyboard, same keys as the original lucki-tv
  useEffect(() => {
    const onKey = (e) => {
      const s = useChannelStore.getState()
      if (e.key === 'o' || e.key === 'O') return s.togglePower()
      if (e.key === 'm' || e.key === 'M') return s.toggleMute()
      if (s.phase === 'off') return
      if (e.key === '+' || e.key === '=') return s.volumeUp()
      if (e.key === '-' || e.key === '_') return s.volumeDown()
      if (s.phase !== 'channels') return
      if (e.key === 'ArrowUp') { e.preventDefault(); s.nextChannel() }
      if (e.key === 'ArrowDown') { e.preventDefault(); s.prevChannel() }
      const d = parseInt(e.key); if (!isNaN(d)) s.enterChannelNumber(d)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // switch the TV on once it has loaded (muted, so the browser allows it); the leaf intro plays first
  useEffect(() => { if (loaded) { const t = setTimeout(() => { if (!useChannelStore.getState().tvOn) useChannelStore.getState().togglePower() }, 500); return () => clearTimeout(t) } }, [loaded])

  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, 0, 10], fov: 35 }} gl={{ antialias: true, toneMapping: 3 }} dpr={[1, 2]}>
        <SceneLights />
        <Suspense fallback={null}>
          <Rig controlsRef={controlsRef} onReady={() => setLoaded(true)} />
        </Suspense>
        <CameraControls ref={controlsRef} makeDefault smoothTime={0.35} draggingSmoothTime={0.15}
          mouseButtons={{ left: 1, middle: 0, right: 0, wheel: 0 }} touches={{ one: 32, two: 0, three: 0 }} />
        {/* lucki's three.js remote, held in front of the camera (bottom right) */}
        {loaded && <RemoteHud />}
      </Canvas>
      {!loaded && <div className="loading">LOADING</div>}
    </div>
  )
}
