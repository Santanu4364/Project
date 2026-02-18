import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Only use the subfolder path for production (GitHub Pages), use root '/' for dev
  base: mode === 'production' ? '/birthday-wisher/' : '/',
}))
