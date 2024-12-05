import React, { useEffect, useState } from 'react'
import { useCartNumber } from '../../context/CartNumberContext'
import useCarts from '../cart/useCarts'
import useUser from '../../authentication/useUser'
import Menu from './Menu'
import Footer from './Footer'
import MobileMenu from './MobileMenu'
import { GiHamburgerMenu } from 'react-icons/gi'

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { setCartNumber } = useCartNumber()
  const { carts } = useCarts()
  const { user } = useUser()
  const [open, setOpen] = useState(false)

  // Effect to update cart number when cart items change
  useEffect(() => {
    if (user && carts) {
      const userCart = carts.find((cart) => cart.userId === user?.id)
      const totalItems = userCart
        ? userCart.products.reduce((acc, product) => acc + product.quantity, 0)
        : 0
      setCartNumber(totalItems) // Always set the total dynamically
    }
  }, [carts, user, setCartNumber])

  return (
    <div>
      <div className="container mx-auto p-5">
        <button onClick={() => setOpen(true)} className="lg:hidden">
          <GiHamburgerMenu className="w-8 h-8 text-textColor" />
        </button>
      </div>
      <Menu />
      {open && (
        <div className="fixed lg:hidden z-50 bg-sideBg w-[19rem] h-screen top-0 left-0 p-5 border-2 border-primary-0">
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
      )}
      {children}
      <Footer />
    </div>
  )
}

export default AppLayout
