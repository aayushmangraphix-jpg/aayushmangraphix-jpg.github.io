import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User site: https://aayushmangraphix-jpg.github.io/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
})
