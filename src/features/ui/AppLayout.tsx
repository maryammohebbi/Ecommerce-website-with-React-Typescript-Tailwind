import React, { useEffect } from 'react'
import Menu from './Menu'
import Footer from './Footer'
import useScroll from '../hooks/useScroll'
import VerticalNav from './VerticalNav'
import { useCartNumber } from '../../context/CartNumberContext'
import useCarts from '../cart/useCarts' // Importing your cart logic
import useUser from '../../authentication/useUser' // Importing user logic

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { scrollBoolean } = useScroll(100)
  const { setCartNumber } = useCartNumber() // Accessing the setter for cart number
  const { carts } = useCarts() // Assuming useCarts fetches the cart data
  const user = useUser() // Assuming useUser gets the current user data

  // Effect to update cart number when cart items change
  useEffect(() => {
    if (user && carts) {
      // Filter user's cart items (assuming carts is an array of cart objects)
      const userCart = carts.find((cart) => cart.userId === user?.id)

      // Calculate total number of items in the user's cart
      const totalItems = userCart
        ? userCart.products.reduce((acc, product) => acc + product.quantity, 0)
        : 0

      // Update the cart number in context
      setCartNumber(totalItems)
    }
  }, [carts, user, setCartNumber]) // Run effect when carts or user change

  return (
    <div className="h-screen">
      <Menu />
      {scrollBoolean ? <VerticalNav /> : null}
      {children}
      <Footer />
    </div>
  )
}

export default AppLayout
