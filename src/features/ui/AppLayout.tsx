import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import Footer from './Footer'
// import useScroll from '../hooks/useScroll'
// import VerticalNav from './VerticalNav'
import { useCartNumber } from '../../context/CartNumberContext'
import useCarts from '../cart/useCarts'
import useUser from '../../authentication/useUser'
import MobileMenu from './MobileMenu'
import { GiHamburgerMenu } from 'react-icons/gi'

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // const { scrollBoolean } = useScroll(100)
  const { setCartNumber } = useCartNumber()
  const { carts } = useCarts()
  const user = useUser()
  const [open, setOpen] = useState(false)

  // Effect to update cart number when cart items change
  useEffect(() => {
    if (user && carts) {
      // Filter user's cart items
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
    <div className="">
      <>
        <div className="container mx-auto p-5">
          <button onClick={() => setOpen(true)} className="lg:hidden">
            <GiHamburgerMenu className="w-8 h-8 text-textColor" />
          </button>
        </div>
        <Menu />
        <div
          className={`${
            open ? 'fixed' : 'hidden'
          } lg:hidden z-50 bg-sideBg w-[19rem] h-screen top-0 left-0 p-5 border-2 border-primary-0 `}
        >
          <div className="flex justify-end">
            <button
              onClick={() => setOpen(false)}
              className="text-textColor text-2xl font-bold p-2"
            >
              X
            </button>
          </div>
          <MobileMenu />
        </div>
      </>
      {/* {scrollBoolean ? <VerticalNav /> : null} */}
      {children}
      <Footer />
    </div>
  )
}

export default AppLayout
