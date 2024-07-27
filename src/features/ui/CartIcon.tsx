import React, { useEffect, useState } from 'react'
import { BsCart4 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useCartNumber } from '../../context/CartNumberContext'

const CartIcon: React.FC = () => {
  const { cartNumber } = useCartNumber()
  const [localCartNumber, setLocalCartNumber] = useState(cartNumber) // Use local state to force re-render

  useEffect(() => {
    setLocalCartNumber(cartNumber) // Update local state whenever context changes
  }, [cartNumber])

  return (
    <Link to="checkout/cart">
      <button className="relative p-1">
        <BsCart4 className="w-7 h-7 text-textColor" />
        <span className="rounded-full bg-warning w-5 h-5 text-textColor absolute -top-1 -right-2 text-sm flex justify-center items-center">
          {localCartNumber}
        </span>
      </button>
    </Link>
  )
}

export default CartIcon
