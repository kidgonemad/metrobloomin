import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMemo, useEffect, useRef } from 'react'
import { VideoTexture, SRGBColorSpace, LinearFilter, Color, MeshStandardMaterial, MeshBasicMaterial, CanvasTexture, Mesh, PlaneGeometry, Box3, Vector3 } from 'three'
import TvScreenMaterial from './TvScreenMaterial'
import useChannelStore from './store'
import TVUI from './TVUI'
import { startStatic, stopStatic } from './sound'

// The TV file from kidgonemad/lucki, unchanged (assets/tv-optimized.glb). Only the TV is shown:
// the stand, VCR, guitar strap and set dressing are hidden below.
const BASE = import.meta.env.BASE_URL
const DRACO = BASE + 'draco/'   // local decoder (drei would otherwise fetch it from Google's CDN)
const GLB_URL = BASE + 'assets/tv-optimized.glb'
useGLTF.preload(GLB_URL, DRACO)

// The picture is the screen's own light, like a real CRT: almost all glow, very little lit
// surface. Light falling on it only greys the video out.
const SCREEN_GLOW = 1.0
const SCREEN_LIT = 0.06

export default function Model({ onReady, ...props }) {
  const { scene } = useGLTF(GLB_URL, DRACO)
  const videoRef = useRef(null)
  const materialRef = useRef(null)
  const tvuiRef = useRef(null)
  const powerTargetRef = useRef(0)

  const screenMesh = useMemo(() => {
    let found = null
    scene.traverse((child) => {
      if (child.isMesh && child.material && child.material.name === 'TVScreen') found = child
    })
    // just the TV: hide every top-level part that doesn't hold the screen
    for (const part of scene.children) {
      let hasScreen = false
      part.traverse((o) => { if (o === found) hasScreen = true })
      part.visible = hasScreen
    }
    // pointer input goes to the remote only
    scene.traverse((o) => { if (o.isMesh) o.raycast = () => {} })
    return found
  }, [scene])

  // Tint the white TV casing materials charcoal
  useMemo(() => {
    const blackMats = new Set(['TVfront', 'Electronics plastic', 'White'])
    scene.traverse((child) => {
      if (child.isMesh && child.material && blackMats.has(child.material.name)) child.material.color = new Color(0x3a3a3a)   // charcoal
    })
    // The badge, buttons and AV jacks share the front's material (fully metallic, tinted charcoal), which
    // turned them into dull dark shapes. Each gets its own finish. (three.js drops the '.' from glTF names.)
    const part = (name) => { const o = scene.getObjectByName(name); return o && o.isMesh ? o : null }
    // Panasonic badge: its 3D letters are too thin to draw cleanly at screen size (they turned into a white
    // smear), so it is replaced by a crisp printed label of the same size, in the same spot
    const badge = part('defaultMaterial008')
    if (badge) {
      scene.updateMatrixWorld(true)
      const box = new Box3().setFromObject(badge), size = box.getSize(new Vector3()), mid = box.getCenter(new Vector3())
      const cw = 1024, ch = Math.max(64, Math.round(cw * size.y / size.x))
      const c = document.createElement('canvas'); c.width = cw; c.height = ch
      const g = c.getContext('2d')
      g.fillStyle = '#d6d6d6'; g.textAlign = 'center'; g.textBaseline = 'middle'
      let fs = ch * 0.9; g.font = `900 ${fs}px "Arial Black", "Helvetica Neue", Helvetica, Arial, sans-serif`
      const tw = g.measureText('Panasonic').width; if (tw > cw * 0.98) { fs *= cw * 0.98 / tw; g.font = `900 ${fs}px "Arial Black", "Helvetica Neue", Helvetica, Arial, sans-serif` }
      g.fillText('Panasonic', cw / 2, ch / 2)
      const tex = new CanvasTexture(c); tex.colorSpace = SRGBColorSpace; tex.anisotropy = 8
      const label = new Mesh(new PlaneGeometry(size.x, size.y), new MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false }))
      // place it in the badge's parent space: centred on the badge, just in front of the TV's face (+Z)
      const parent = badge.parent
      label.position.copy(parent.worldToLocal(new Vector3(mid.x, mid.y, box.max.z + size.y * 0.05)))
      parent.getWorldQuaternion(label.quaternion).invert()
      parent.getWorldScale(label.scale); label.scale.set(1 / label.scale.x, 1 / label.scale.y, 1 / label.scale.z)
      label.name = 'PanasonicLabel'
      parent.add(label)
      badge.visible = false
    }
    const buttons = part('defaultMaterial002')   // power + front buttons: glossy black plastic
    if (buttons) buttons.material = new MeshStandardMaterial({ name: 'Buttons', color: 0x161616, metalness: 0, roughness: 0.5 })
    const jacks = part('defaultMaterial005')     // AV jacks: the texture's own yellow / white / red rings and metal pins
    if (jacks) { jacks.material = jacks.material.clone(); jacks.material.name = 'Jacks'; jacks.material.color = new Color(0xffffff) }
  }, [scene])

  useEffect(() => { if (onReady) onReady(scene) }, [])

  useEffect(() => {
    if (!screenMesh) return

    let mounted = true

    // --- Create video element ---
    const video = document.createElement('video')
    video.crossOrigin = 'anonymous'
    video.loop = false
    video.muted = true
    video.playsInline = true
    video.style.display = 'none'
    document.body.appendChild(video)
    videoRef.current = video

    // --- Create video texture ---
    const videoTexture = new VideoTexture(video)
    videoTexture.colorSpace = SRGBColorSpace
    videoTexture.minFilter = LinearFilter
    videoTexture.magFilter = LinearFilter

    // --- Create CRT material ---
    const crtMat = new TvScreenMaterial({
      map: videoTexture,
      emissiveMap: videoTexture,
      emissive: '#ffffff',
      emissiveIntensity: SCREEN_GLOW,
      roughness: 0.4,
      metalness: 0.0,
      envMapIntensity: 0.02,   // a hint of the room on the glass; more greys the picture out
    })
    crtMat.toneMapped = false  // the picture keeps the video's own colours
    materialRef.current = crtMat
    screenMesh.material = crtMat

    // --- Timers ---
    const timers = []
    function clearTimers() {
      timers.forEach(clearTimeout)
      timers.length = 0
    }

    // --- Helpers ---
    function setScreenTexture(texture, isVideo) {
      crtMat.map = texture
      crtMat.mapFlipY = isVideo ? 1.0 : 0.0
      crtMat.needsUpdate = true
    }

    function turnOff() {
      clearTimers()
      powerTargetRef.current = 0
      useChannelStore.setState({ phase: 'off', noSignal: false, buffering: false })
      // Let the CRT squeeze animation play, then clean up
      timers.push(setTimeout(() => {
        video.pause()
        video.removeAttribute('src')
        video.load()
        setScreenTexture(videoTexture, true)
        crtMat.color.setScalar(0.0)
        crtMat.noSignal = 0
        crtMat.staticAmount = 0
        crtMat.emissiveIntensity = 0
      }, 400))
    }

    function startIntro() {
      clearTimers()
      crtMat.power = 0
      powerTargetRef.current = 1
      crtMat.color.setScalar(SCREEN_LIT)
      crtMat.emissiveIntensity = SCREEN_GLOW
      crtMat.noSignal = 1.0
      crtMat.staticAmount = 0.04
      setScreenTexture(videoTexture, true)
      useChannelStore.getState().setPhase('intro')
      video.loop = false
      video.src = BASE + 'intro-leaf.mp4'   // Metro Bloomin leaf appears out of thin air
      video.load()
      video.play().catch(() => {
        if (mounted) enterChannelsMode()
      })
    }

    function enterChannelsMode() {
      if (!mounted) return
      clearTimers()
      crtMat.color.setScalar(SCREEN_LIT)
      crtMat.emissiveIntensity = SCREEN_GLOW
      useChannelStore.setState({ phase: 'channels', buffering: false })
      setScreenTexture(videoTexture, true)
      video.loop = false
      const src = useChannelStore.getState().channels[useChannelStore.getState().currentChannel]
      crtMat.staticAmount = 0.04
      crtMat.noSignal = 1.0
      if (src) {
        video.src = src
        video.load()
        video.play().then(() => {
          if (!mounted) return
          crtMat.noSignal = 0.0
          useChannelStore.setState({ noSignal: false })
        }).catch(() => {
          if (!mounted) return
          crtMat.noSignal = 1.0
          useChannelStore.setState({ noSignal: true })
        })
      } else {
        useChannelStore.setState({ noSignal: true })
      }
    }

    // --- Video events ---
    function glitchThen(cb) {
      crtMat.noSignal = 1.0
      crtMat.staticAmount = 0.5
      timers.push(setTimeout(() => { if (mounted) cb() }, 600))
    }

    const onEnded = () => {
      if (!mounted) return
      const phase = useChannelStore.getState().phase
      if (phase === 'intro') {
        useChannelStore.getState().setPhase('glitch')
        glitchThen(() => enterChannelsMode())
      } else if (phase === 'channels') {
        useChannelStore.getState().nextChannel()
      }
    }

    const onWaiting = () => {
      if (useChannelStore.getState().phase === 'channels') {
        useChannelStore.setState({ buffering: true })
      }
    }

    const onPlaying = () => {
      if (!mounted) return
      if (useChannelStore.getState().phase === 'intro') {
        crtMat.noSignal = 0.0
      }
      useChannelStore.setState({ buffering: false })
    }

    const onError = () => {
      if (!mounted) return
      if (useChannelStore.getState().phase === 'intro') {
        enterChannelsMode()
      }
    }

    video.addEventListener('ended', onEnded)
    video.addEventListener('waiting', onWaiting)
    video.addEventListener('playing', onPlaying)
    video.addEventListener('error', onError)

    // --- Start with TV off ---
    turnOff()

    // --- Subscribe to store ---
    const unsub = useChannelStore.subscribe((s, prev) => {
      if (!mounted) return

      // Power toggle
      if (s.tvOn !== prev.tvOn) {
        if (s.tvOn) startIntro()
        else turnOff()
        return
      }

      // Volume / mute sync — works in all active phases
      if (s.phase !== 'off') {
        if (s.isMuted !== prev.isMuted) video.muted = s.isMuted
        if (s.volume !== prev.volume) video.volume = s.volume
      }

      // Channel change — only in channels mode
      if (s.phase !== 'channels') return

      if (s.currentChannel !== prev.currentChannel) {
        const url = s.channels[s.currentChannel]
        const hiss = s.isMuted ? null : startStatic(0.16 * s.volume)
        if (!url) {
          crtMat.noSignal = 1.0
          useChannelStore.setState({ noSignal: true })
          video.pause()
          return
        }
        crtMat.noSignal = 1.0
        crtMat.staticAmount = 0.3
        useChannelStore.setState({ noSignal: false })
        video.src = url
        video.load()
        video.play().then(() => {
          if (!mounted) return
          crtMat.noSignal = 0.0
          crtMat.staticAmount = 0.04
          stopStatic(hiss)
        }).catch(() => {
          if (!mounted) return
          crtMat.noSignal = 1.0
          crtMat.staticAmount = 0.04
          useChannelStore.setState({ noSignal: true })
          stopStatic(hiss)
        })
      }
    })

    return () => {
      mounted = false
      unsub()
      clearTimers()
      video.removeEventListener('ended', onEnded)
      video.removeEventListener('waiting', onWaiting)
      video.removeEventListener('playing', onPlaying)
      video.removeEventListener('error', onError)
      video.pause()
      video.removeAttribute('src')
      video.load()
      document.body.removeChild(video)
      videoTexture.dispose()
      crtMat.dispose()
    }
  }, [screenMesh])

  useFrame((_, delta) => {
    if (!materialRef.current) return
    materialRef.current.time += delta
    // Animate CRT power on/off
    const target = powerTargetRef.current
    const current = materialRef.current.power
    const diff = target - current
    if (Math.abs(diff) > 0.001) materialRef.current.power = current + Math.sign(diff) * Math.min(Math.abs(diff), delta * 3.5)
    else if (current !== target) materialRef.current.power = target
    if (tvuiRef.current) materialRef.current.tvUiTexture = tvuiRef.current
  })

  // tap the TV: switch it on (or off)
  const onClick = (e) => { e.stopPropagation(); useChannelStore.getState().togglePower() }

  return (
    <>
      <primitive object={scene} onClick={onClick}
        onPointerOver={() => { document.body.style.cursor = 'pointer' }} onPointerOut={() => { document.body.style.cursor = 'default' }} {...props} />
      <TVUI ref={tvuiRef} />
    </>
  )
}
