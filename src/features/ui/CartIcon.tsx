import React from 'react'
import { BsCart4 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useCartNumber } from '../../context/CartNumberContext'

const CartIcon: React.FC = ({}) => {
  const { cartNumber } = useCartNumber()
  return (
    <Link to="checkout/cart">
      <button className="relative p-1">
        <BsCart4 className=" w-7 h-7 menu-font" />
        <span className="rounded-full bg-warning w-5 h-5 menu-font absolute -top-1 -right-2 text-sm flex justify-center items-center">
          {cartNumber}
        </span>
      </button>
    </Link>
  )
}

export default CartIcon
