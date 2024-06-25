import React from 'react'
import CartItem from './CartItem'

const Cart: React.FC = ({}) => {
  return (
    <div className="container p-5">
      <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-8 ">
        <div className="lg:w-4/5 h-auto bg-slate-200 border-2 border-secondary p-3 rounded-lg">
          <CartItem />
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
