import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
//import { toast } from 'react-toastify'

// Créer un async thunk pour l'enregistrement
export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })

      if (!response.status === 201) {
        throw new Error('Registrierung fehlgeschlagen')
      }

      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// Créer un async thunk pour la connexion
export const loginUser = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(
          `Fehler ${response.status}: ${
            errorData.message || 'Ein Fehler ist aufgetreten'
          }`
        )
      }

      const data = await response.json()
      //toast.success(data)

      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const userData = JSON.parse(localStorage.getItem('userData')) || {}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: userData.user || null,
    loading: false,
    error: null,
    token: userData.token || null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userData')
      state.user = null
      state.token = null
    },
  },
  extraReducers: (builder) => {
    builder
      // Pour l'enregistrement
      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.token = action.payload.token
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      // Pour la connexion
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.token = action.payload.token
        localStorage.setItem(
          'userData',
          JSON.stringify({ user: state.user, token: state.token })
        )
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { logout } = authSlice.actions

export default authSlice.reducer
