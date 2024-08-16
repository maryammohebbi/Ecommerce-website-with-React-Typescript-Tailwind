import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Products from './pages/Products'
import AppLayout from './features/ui/AppLayout'
import { DarkModeProvider } from './context/DarkModeContext'
import SingleProduct from './features/products/SingleProduct'
import Auth from './pages/Auth'
import { Toaster } from 'react-hot-toast'
import Cart from './pages/Cart'
import { CartNumberProvider } from './context/CartNumberContext'
import Profile from './features/user/Profile'
import NotFound404 from './features/ui/NotFound404'

const queryClient = new QueryClient()

function App() {
  return (
    <DarkModeProvider>
      <CartNumberProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <AppLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="products/:id" element={<SingleProduct />} />
              {/* <Route path="products/:category" element={<Products />} /> */}
              <Route path="checkout/cart" element={<Cart />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound404 />} />
            </Routes>
          </AppLayout>
        </QueryClientProvider>
      </CartNumberProvider>
    </DarkModeProvider>
  )
}

export default App
