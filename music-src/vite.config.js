import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// built into ../music/ and served from kidgonemad.github.io/metrobloomin/music/
export default defineConfig({ plugins: [react()], base: './', build: { outDir: '../music', emptyOutDir: true, chunkSizeWarningLimit: 2000 } })
