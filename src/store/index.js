import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '@/store/slices/cartSlice'
import authReducer from '@/store/slices/authSlice'
import orderReducer from '@/store/slices/orderSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    order: orderReducer,
  },
})

export default store
