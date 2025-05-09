import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from '@/store'
import { LoadingProvider } from '@/utils/context/LoadingContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <LoadingProvider>
          <App />

          {/* Ajout du ToastContainer pour afficher les notifications */}
          <ToastContainer
            position="top-right"
            autoClose={3000} // Ferme après 3s
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light" // Tu peux mettre "dark" aussi
          />
        </LoadingProvider>
      </HelmetProvider>
    </Provider>
  </StrictMode>
)
