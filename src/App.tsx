import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Products from './pages/Products'
import AppLayout from './features/ui/AppLayout'
import { DarkModeProvider } from './context/DarkModeContext'
import SingleProduct from './features/products/SingleProduct'
import Cart from './features/cart/Cart'
import Login from './authentication/Login'

const queryClient = new QueryClient()

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<SingleProduct />} />
            {/* <Route path="products/:category" element={<Products />} /> */}
            <Route path="checkout/cart" element={<Cart />} />
            <Route path="/auth" element={<Login />} />
          </Routes>
        </AppLayout>
      </QueryClientProvider>
    </DarkModeProvider>
  )
}

export default App
