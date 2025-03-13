import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/spoonacular': {
        target: 'https://api.spoonacular.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/spoonacular/, '')
      }
    }
  }
})