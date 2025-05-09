import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import fs from 'fs'

import path from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const productsList = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, './src/utils/extractedProducts.json'),
    'utf-8'
  )
)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://rijdenx.com',
      staticRoutes: [
        '/shop',
        '/contact-us',
        '/about-us',
        // '/faq',
      ],
      dynamicRoutes: productsList.map((item) => {
        const formattedLibelle = item.libelle.replace(/\s+/g, '-')
        return `/product/${item.id}/${formattedLibelle}`
      }),
    }),
  ],
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
