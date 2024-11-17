import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    target: 'esnext', 
    esbuild: {
      
      rollupOptions: {
        input: './src/main.jsx',
        output: {
          dir: 'dist', 
          format: 'es', 
        },
      },
    },
  },
})
