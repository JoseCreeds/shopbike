import productsList from './src/data/products.js'
import piecesList from './src/data/pieces.js'

const allProducts = [...productsList, ...piecesList]

export function generateSitemapRoutes() {
  return allProducts.map((item) => {
    const formattedLibelle = item.libelle.replace(/\s+/g, '-')
    return `/product/${item.id}/${formattedLibelle}`
  })
}
