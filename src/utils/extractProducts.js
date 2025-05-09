import { fileURLToPath } from 'url'
import { dirname } from 'path'
import fs from 'fs'

// Importer les données de tes produits
import productsList from '../data/products.js' // Adapter en fonction du chemin réel
import piecesList from '../data/pieces.js' // Adapter en fonction du chemin réel

// Utiliser import.meta.url pour obtenir __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Fonction d'extraction des informations nécessaires
const extractData = (products) => {
  return products.map((item) => ({
    id: item.id,
    libelle: item.libelle,
  }))
}

// Extraire les produits et pièces avec seulement id et libelle
const extractedProducts = [
  ...extractData(productsList),
  ...extractData(piecesList),
]

// Enregistrer ces informations dans un fichier JSON
const outputFilePath = `${__dirname}/extractedProducts.json`
fs.writeFileSync(outputFilePath, JSON.stringify(extractedProducts, null, 2))

console.log('Fichier JSON généré avec succès !')

// execute this commande in your terminal
// node --experimental-specifier-resolution=node extractProducts.js
