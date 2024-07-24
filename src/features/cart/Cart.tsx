import React from 'react'
import CartItem from './CartItem'
import { AiTwotoneCloseSquare } from 'react-icons/ai'
import { TbNumber } from 'react-icons/tb'

interface Cart {
  cart: {
    id: number
    userId: number
    date: string
    products: [
      {
        productId: number
        quantity: number
      }
    ]
    __v: number
  }
  cartNumber: number
}

const Cart: React.FC<Cart> = ({ cart, cartNumber }) => {
  const { products } = cart

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-textColor font-bold flex gap-x-1 items-center">
          Cart <TbNumber className="w-5 h-5" /> : {cartNumber}
        </span>
        <button>
          <AiTwotoneCloseSquare className="w-8 h-8" />
        </button>
      </div>
      <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-8 ">
        <div className="lg:w-4/5 h-auto bg-slate-200 border-2 border-secondary p-3 rounded-lg flex flex-col gap-y-3">
          {products.map((product, index) => (
            <CartItem key={index + 1} product={product} />
          ))}
        </div>
        <div className="lg:w-1/5 h-52 bg-slate-300 border-2 border-secondary p-3 rounded-lg">
          <div className="p-2 border-2 border-gray-500 mb-12 h-[50%] flex items-center rounded-lg">
            <span className="font-black">Total Price: </span>
            <span className="text-lg">&nbsp; 234,808 $</span>
          </div>
          <button className="p-2 bg-emerald-500 rounded-lg shadow-2xl text-lg text-textColor w-full">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
