import React from 'react'
import { BsCart4 } from 'react-icons/bs'

const CartIcon: React.FC = ({}) => {
  return (
    <button className="relative p-1">
      <BsCart4 className="w-7 h-7 text-textColor" />
      <span className="rounded-full bg-warning w-5 h-5 text-textColor absolute -top-1 -right-2 text-sm flex justify-center items-center">
        2
      </span>
    </button>
  )
}

export default CartIcon
