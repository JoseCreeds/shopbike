import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

import path from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      bootstrap: path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  build: {
    sourcemap: false, // Désactive les source maps pour éviter ces erreurs
  },
})
