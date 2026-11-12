import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<App />)

// no page zoom on the TV page (iPhone ignores user-scalable=no, so pinch and double-tap are stopped here)
;['gesturestart', 'gesturechange'].forEach((e) => document.addEventListener(e, (ev) => ev.preventDefault(), { passive: false }))
document.addEventListener('touchmove', (ev) => { if (ev.touches.length > 1) ev.preventDefault() }, { passive: false })
let lastTap = 0
document.addEventListener('touchend', (ev) => { const t = Date.now(); if (t - lastTap < 300) ev.preventDefault(); lastTap = t }, { passive: false })
