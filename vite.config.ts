import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 8000,
    open: true,
    // Lets phones / other PCs on your Wi‑Fi open http://YOUR_LAN_IP:8000
    host: true,
  },
  preview: {
    host: '0.0.0.0',
    // Railway (and similar hosts) set PORT for the public HTTPS URL
    port: (() => {
      const p = Number(process.env.PORT)
      return Number.isFinite(p) && p > 0 ? p : 4173
    })(),
    strictPort: false,
  },
})
