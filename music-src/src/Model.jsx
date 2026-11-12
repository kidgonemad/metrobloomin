import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMemo, useEffect, useRef } from 'react'
import { VideoTexture, SRGBColorSpace, LinearFilter, Color } from 'three'
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

  // Tint the white TV casing materials to black
  useMemo(() => {
    const blackMats = new Set(['TVfront', 'Electronics plastic', 'White'])
    scene.traverse((child) => {
      if (child.isMesh && child.material && blackMats.has(child.material.name)) child.material.color = new Color(0x000000)
    })
  }, [scene])

  useEffect(() => { if (onReady) onReady() }, [])

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
      emissiveIntensity: 0.5,
      roughness: 0.4,
      metalness: 0.0,
    })
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
      crtMat.color.setScalar(1.0)
      crtMat.emissiveIntensity = 0.5
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
      crtMat.color.setScalar(1.0)
      crtMat.emissiveIntensity = 0.5
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
