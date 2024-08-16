import { useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import useCarts from './features/cart/useCarts'
import useUser from './authentication/useUser'
import { useCartNumber } from './context/CartNumberContext'
import App from './App'

// Initialize QueryClient only once
const queryClient = new QueryClient()

function AppWithCart() {
  const { setCartNumber } = useCartNumber()
  const { carts, isCartsLoading } = useCarts()
  const user = useUser()

  useEffect(() => {
    if (carts && user) {
      const userCarts = carts.filter((cart) => cart.userId === user.id)
      const cartNumber = userCarts.reduce(
        (acc, curr) => acc + curr.products.length,
        0
      )
      setCartNumber(cartNumber)
    }
  }, [carts, setCartNumber, user])

  if (isCartsLoading) return <div>Loading...</div>

  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )
}

export default AppWithCart
