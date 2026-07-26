import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base is './' so the static build works on GitHub Pages subpaths and Vercel alike
export default defineConfig({
  plugins: [react()],
  base: './',
})
