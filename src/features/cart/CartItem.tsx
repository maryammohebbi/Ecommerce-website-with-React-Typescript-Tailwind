import React from 'react'
import { GoTrash } from 'react-icons/go'
import { Link } from 'react-router-dom'

const CartItem: React.FC = ({}) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex justify-between p-4 border-2 border-slate-400 rounded-lg bg-slate-300 hover:bg-slate-400 transition-all duration-500 shadow-2xl">
        <div>
          <img src="" alt="" />
        </div>
        <Link to="/products">
          <div className="flex flex-col">
            <div>
              <span className="font-black">Title:</span>
              <span className="font-semibold">&nbsp; product name</span>
            </div>
            <div>
              <span className="font-black">Price:</span>
              <span className="font-semibold">&nbsp; 284.99 $</span>
            </div>
          </div>
        </Link>
        <div className="flex gap-x-2 items-center">
          <button className="border-2 border-slate-500 w-7 h-7 rounded-md flex items-center justify-center font-black shadow-2xl">
            -
          </button>
          <span className="font-black text-xl">1</span>
          <button className="border-2 border-slate-500 w-7 h-7 rounded-md flex items-center justify-center font-black shadow-2xl">
            +
          </button>
        </div>
        <button>
          <GoTrash className="w-7 h-7 text-error" />
        </button>
      </div>
    </div>
  )
}

export default CartItem
