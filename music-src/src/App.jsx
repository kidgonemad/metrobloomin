import { Suspense, useRef, useState, useCallback, useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { CameraControls, Environment, Lightformer } from '@react-three/drei'
import { Box3, Vector3, MathUtils } from 'three'
import Model from './Model'
import RemoteHud from './RemoteHud'
import CrashIn from './CrashIn'
import Ashtray from './Ashtray'
import Joint from './Joint'
import useChannelStore from './store'
import './App.css'

// Lights: the six soft light panels the Shopify Editions TV is lit with, at their exact positions
// (the owner's pick over lucki's studio HDR: no glare on the screen). No other lights, like that scene.
const mobile = () => window.innerWidth / window.innerHeight < 1
function SceneLights() {
  const panel = (intensity, scale, position, target) => (
    <Lightformer form="rect" color="#e8eefd" intensity={intensity} scale={scale} position={position} target={target} />
  )
  return (
    <Environment resolution={256}>
      {panel(2.8, [4, 1.5], [-5, 0, 5], [5, 0, 0])}
      {panel(2.8, [4, 2.5], [5, 0, 5], [-5, 0, 0])}
      {panel(6.5, [4, 4], [-1, 4, 5], [0, 0, 0])}
      {panel(6.5, [4, 4], [0, -5, 5], [0, 0, 0])}
      {panel(3, [8, 2.5], [0, 0, 5], [0, 0, 0])}
      {panel(6.5, [2, 4.5], [-0.5, -2, 5], [0, 0, 0])}
    </Environment>
  )
}

// The TV's box at rest: only the parts that are shown (the stand, VCR and strap are hidden in Model.jsx).
// Measured once, before the drop moves it.
function measureTv(model) {
  let tv = null
  model.traverse((o) => { if (o.name === 'tv') tv = o })
  const all = new Box3()
  model.children.forEach((part) => { if (part.visible) all.expandByObject(part) })
  return { tv: tv ? new Box3().setFromObject(tv) : null, all }
}

// Frames the TV: camera straight in front of the screen, close enough to fill the view; orbit only sideways.
function useFrameTv(controlsRef, boxRef) {
  const { camera, size } = useThree()
  return useCallback(() => {
    const ctrl = controlsRef.current
    const box = boxRef.current
    if (!ctrl || !box) return
    const c = box.getCenter(new Vector3()), s = box.getSize(new Vector3())
    // the screen faces +Z in world space for this model (the original close-up looks down -Z at it)
    const aspect = size.width / size.height
    const fitH = s.y / 2 / Math.tan(MathUtils.degToRad(camera.fov / 2))
    const fitW = s.x / 2 / Math.tan(MathUtils.degToRad(camera.fov / 2)) / aspect
    const dist = Math.max(fitH, fitW) * (aspect < 1 ? 1.55 : 1.45) + s.z / 2
    // phones: the remote fills the bottom of the screen, so the TV sits in the top part
    const visH = 2 * dist * Math.tan(MathUtils.degToRad(camera.fov / 2))
    const dy = aspect < 1 ? visH * 0.17 : 0
    // free the limits first, so a re-frame (resize) isn't clamped to the old locked spot
    ctrl.minAzimuthAngle = -Infinity; ctrl.maxAzimuthAngle = Infinity
    ctrl.minPolarAngle = 0; ctrl.maxPolarAngle = Math.PI
    ctrl.minDistance = 0; ctrl.maxDistance = Infinity
    ctrl.setLookAt(c.x, c.y + s.y * 0.05 - dy, c.z + dist, c.x, c.y - dy, c.z, false)
    // a little side-to-side tilt only: no up/down, no zoom
    ctrl.minAzimuthAngle = ctrl.azimuthAngle - MathUtils.degToRad(12)
    ctrl.maxAzimuthAngle = ctrl.azimuthAngle + MathUtils.degToRad(12)
    ctrl.minPolarAngle = ctrl.maxPolarAngle = ctrl.polarAngle
    ctrl.minDistance = ctrl.maxDistance = ctrl.distance
  }, [camera, size, controlsRef, boxRef])
}

function Rig({ controlsRef, onReady, onLanded, landed }) {
  const boxRef = useRef(null)
  const frameTv = useFrameTv(controlsRef, boxRef)
  const [rest, setRest] = useState(null)
  const trayAnchor = useRef(null)
  useEffect(() => { frameTv() }, [frameTv])   // re-frame on resize
  return (
    <>
    <SceneLights />
    <CrashIn rest={rest} onLanded={onLanded}>
      <Model onReady={(model) => {
        requestAnimationFrame(() => {
          const m = measureTv(model)
          boxRef.current = m.tv
          frameTv()
          const c = m.all.getCenter(new Vector3()), s = m.all.getSize(new Vector3())
          setRest({ base: [c.x, m.all.min.y, c.z], size: [s.x, s.y, s.z] })
          onReady()
        })
      }} />
    </CrashIn>
    {/* the ashtray slides in from the left once the TV has landed */}
    <Ashtray rest={rest} landed={landed} anchorRef={trayAnchor} />
    {/* the joint rests on the ashtray; tap it to pick it up (first person, lit) and again to put it back */}
    <Joint anchorRef={trayAnchor} />
    </>
  )
}

export default function App() {
  const controlsRef = useRef()
  const [loaded, setLoaded] = useState(false)
  const [landed, setLanded] = useState(false)

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

  // switch the TV on once it has crash-landed (muted, so the browser allows it); the leaf intro plays first
  useEffect(() => { if (landed) { const t = setTimeout(() => { if (!useChannelStore.getState().tvOn) useChannelStore.getState().togglePower() }, 300); return () => clearTimeout(t) } }, [landed])

  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, 0, 10], fov: 35 }} shadows={!mobile()} dpr={mobile() ? [1, 1.5] : [1, 2]}
        gl={{ antialias: !mobile(), toneMapping: 3 }}>
        <color attach="background" args={['#ebebe8']} />
        <Suspense fallback={null}>
          <Rig controlsRef={controlsRef} onReady={() => setLoaded(true)} onLanded={() => setLanded(true)} landed={landed} />
        </Suspense>
        <CameraControls ref={controlsRef} makeDefault smoothTime={0.35} draggingSmoothTime={0.15}
          mouseButtons={{ left: 1, middle: 0, right: 0, wheel: 0 }} touches={{ one: 32, two: 0, three: 0 }} />
        {/* lucki's three.js remote, held in front of the camera (bottom right); rises in after the TV lands */}
        {landed && <RemoteHud />}
      </Canvas>
      {!loaded && <div className="loading">LOADING</div>}
    </div>
  )
}
