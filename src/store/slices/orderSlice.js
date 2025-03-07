import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
//import { toast } from 'react-toastify'

export const sendMessage = createAsyncThunk(
  'order/sendMessage',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/contact-admin`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )

      if (!response.ok) {
        throw new Error('Ein Fehler ist beim Senden der Nachricht aufgetreten')
      }

      const data = await response.json()
      return data // La réponse de l'API
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const newOrder = createAsyncThunk(
  'order/newOrder',
  async (OrderData, { rejectWithValue }) => {
    try {
      //toast.success(JSON.stringify(OrderData))
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/new-order`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(OrderData),
        }
      )

      if (!response.ok) {
        throw new Error('Ein Fehler ist bei der Bestellung aufgetreten!')
      }

      const data = await response.json()
      return data // La réponse de l'API
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    message: null,
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //contact part
      .addCase(sendMessage.pending, (state) => {
        state.loading = true
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.loading = false
        state.message = action.payload
        //toast.success('Message envoyé avec succès !')
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      // order part
      .addCase(newOrder.pending, (state) => {
        state.loading = true
      })
      .addCase(newOrder.fulfilled, (state, action) => {
        state.loading = false
        state.message = action.payload
        //toast.success('Message envoyé avec succès !')
      })
      .addCase(newOrder.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default orderSlice.reducer
