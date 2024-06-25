import React from 'react'
import { BsCart4 } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const CartIcon: React.FC = ({}) => {
  return (
    <Link to="checkout/cart">
      <button className="relative p-1">
        <BsCart4 className="w-7 h-7 text-textColor" />
        <span className="rounded-full bg-warning w-5 h-5 text-textColor absolute -top-1 -right-2 text-sm flex justify-center items-center">
          2
        </span>
      </button>
    </Link>
  )
}

export default CartIcon
