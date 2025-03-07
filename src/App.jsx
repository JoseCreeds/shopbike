import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProtectedRoute from '@/components/ProtectedRoute'
import Home from '@/pages/Home'
import Contact from '@/pages/Contact'
import AboutUs from '@/pages/AboutUs'
import Faq from '@/pages/Faq'
import Signup from '@/pages/Signup'
import Login from '@/pages/Login'
import Cart from '@/pages/Cart'
import Checkout from '@/pages/Checkout'
import Account from '@/pages/Account'
import OrderCompleted from '@/pages/OrderCompleted'
import ProductDetail from '@/pages/ProductDetail'
import Shop from '@/pages/Shop'

import TermCondition from '@/pages/Term_Condition'
import Pc from '@/pages/Pc'
import Pe from '@/pages/Pe'
import Pp from '@/pages/Pp'
import Pr from '@/pages/Pr'

import NotFound from '@/pages/NotFound'

//import 'ionicons/css/ionicons.min.css'

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/*start publics route */}
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/my-account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route path="/order-completed" element={<OrderCompleted />} />
        <Route path="/ugc" element={<TermCondition />} />
        <Route path="/pc" element={<Pc />} />
        <Route path="/pe" element={<Pe />} />
        <Route path="/pp" element={<Pp />} />
        <Route path="/pr" element={<Pr />} />
        <Route
          path="/product/:id/:libelle"
          element={<ProductDetail key={window.location.pathname} />}
        />
        <Route path="/shop" element={<Shop />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
