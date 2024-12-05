import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Tooltip } from '@mui/material'
import LogoTheme from '../ui/LogoTheme'
import DarkModeToggle from './DarkModeToggle'
import CartIcon from './CartIcon'
import LoginIcon from './LoginIcon'

import useUser from '../../authentication/useUser'
import { useCartNumber } from '../../context/CartNumberContext'
import useCarts from '../cart/useCarts'
import Search from './Search'

const Menu: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { user } = useUser()
  const { setCartNumber } = useCartNumber()
  const { carts } = useCarts()

  useEffect(() => {
    // Update logged in state based on user data
    setIsLoggedIn(!!user)

    // Update cart number based on user carts
    if (user && carts) {
      const userCart = carts.find((cart) => cart.userId === user?.id)
      const totalItems = userCart
        ? userCart.products.reduce((acc, product) => acc + product.quantity, 0)
        : 0

      setCartNumber(totalItems)
    } else {
      // Reset cart number when user logs out
      setCartNumber(0)
    }
  }, [user, carts, setCartNumber])

  const handleLogout = () => {
    // Clear user state
    setIsLoggedIn(false)
    // Reset cart number if needed
    setCartNumber(0)
  }

  return (
    <div className="sticky top-0 left-0 right-0 bg-sideBg w-full z-20">
      <div className="container mx-auto hidden lg:flex flex-col gap-y-6 xl:flex-row justify-between w-full items-center md:px-24 md:py-8 p-8">
        <LogoTheme />
        <div className="flex xl:gap-x-[65px] md:gap-x-16 gap-x-8 items-center justify-between transition-all ">
          <div>
            <Link to="/" className="text-sm text-secondary-100 md:menu-font">
              Home
            </Link>
          </div>

          <Search />

          <Tooltip title="Theme" placement="bottom" arrow>
            <div>
              <DarkModeToggle rotate="rotate-0" />
            </div>
          </Tooltip>
          <Tooltip title="Cart" placement="bottom" arrow>
            <div>
              <CartIcon rotate="rotate-0" />
            </div>
          </Tooltip>
          <div className="">
            <LoginIcon isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
