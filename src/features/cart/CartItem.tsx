import React from 'react'
import { GoTrash } from 'react-icons/go'
import { Link } from 'react-router-dom'
import useProducts from '../products/useProducts'

interface CartProduct {
  product: {
    productId: number
    quantity: number
  }
}

const CartItem: React.FC<CartProduct> = ({ product }) => {
  const { products } = useProducts()

  const cartProduct = products?.find((p) => p.id === product.productId)
  // const cartProducts = products?.filter((p) => p.id === product.productId)

  // console.log(cartProducts)

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex justify-between items-center p-4 border-2 border-slate-400 rounded-lg bg-slate-300 hover:bg-slate-400 transition-all duration-500 shadow-2xl">
        <div className="w-[30%] h-[10rem] bg-white">
          <Link to={`/products/${cartProduct?.id}`}>
            <img
              src={cartProduct?.image}
              alt={cartProduct?.title}
              className="w-full h-full object-scale-down"
            />
          </Link>
        </div>

        <div className="flex flex-col bg-pink-100">
          <div>
            <span className="font-black">Title:</span>
            <span className="font-semibold">&nbsp; {cartProduct?.title}</span>
          </div>
          <div>
            <span className="font-black">Price:</span>
            <span className="font-semibold">
              &nbsp; {(cartProduct?.price ?? 0) * product.quantity} $
            </span>
          </div>
        </div>

        <div className="flex gap-x-2 items-center">
          <button className="border-2 border-slate-500 w-7 h-7 rounded-md flex items-center justify-center font-black shadow-2xl">
            -
          </button>
          <span className="font-black text-xl">{product.quantity}</span>
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
