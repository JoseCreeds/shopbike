import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
//import ls from '@/utils/setWithExpiration'

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cart')) || [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      )

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.cartItems.push({ ...product, quantity: 1 })
      }

      // Mettre à jour localStorage
      localStorage.setItem('cart', JSON.stringify(state.cartItems))
      //alert('Nouveau produit ajouté au panier')

      //toast.success(`${product.libelle} ajouté au panier !`)
      toast.success(`Neues Produkt wurde zum Warenkorb hinzugefügt!`)
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      )
      localStorage.setItem('cart', JSON.stringify(state.cartItems))
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const item = state.cartItems.find((item) => item.id === id)
      if (item) {
        item.quantity = quantity
      }

      // Mise à jour du localStorage après modification
      localStorage.setItem('cart', JSON.stringify(state.cartItems))
    },
    clearCart: (state) => {
      localStorage.setItem('cartBackup', JSON.stringify(state.cartItems))
      //86400000
      //ls.setWithExpiration('cartBackup', JSON.stringify(state.cartItems), 15000)
      state.cartItems = []
      localStorage.setItem('cart', JSON.stringify([]))
    },
  },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions
export default cartSlice.reducer
