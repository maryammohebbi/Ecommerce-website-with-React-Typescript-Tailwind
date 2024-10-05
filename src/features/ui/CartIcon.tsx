import React from 'react'
import { BsCart4 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useCartNumber } from '../../context/CartNumberContext'
import { scrollToTop } from '../../utils/topOfPage'
type Prop = {
  rotate: string
}
const CartIcon: React.FC<Prop> = ({ rotate }) => {
  const { cartNumber } = useCartNumber()
  return (
    <Link to="checkout/cart" onClick={scrollToTop}>
      <button className="relative p-1">
        <BsCart4 className={` w-6 h-6 menu-font ${rotate} `} />
        <span className={`rounded-full  bg-warning w-5 h-5 menu-font absolute top-4 right-6 text-sm flex justify-center items-center ${rotate}`}>
          {cartNumber}
        </span>
      </button>
    </Link>
  )
}

export default CartIcon
