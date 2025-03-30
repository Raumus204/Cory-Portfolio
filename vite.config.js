// filepath: c:\Users\enacr\coding\React-Project\vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000,
    open: true,
    host: '0.0.0.0', // Bind to all network interfaces
  },
  build: {
    outDir: 'dist',
  },
})