import React from 'react'
import CartItem from './CartItem'
import { AiTwotoneCloseSquare } from 'react-icons/ai'
import { TbNumber } from 'react-icons/tb'
import useProducts from '../products/useProducts'

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
  cartNo: number
}

const Cart: React.FC<Cart> = ({ cart, cartNo }) => {
  const { products } = cart
  const { products: productList } = useProducts()

  const totalPrice = products.reduce((acc, product) => {
    const productDetails = productList?.find((p) => p.id === product.productId)
    return acc + (productDetails?.price ?? 0) * product.quantity
  }, 0)

  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-textColor font-bold flex gap-x-1 items-center">
          Cart <TbNumber className="w-5 h-5" /> : {cartNo}
        </span>
        <button>
          <AiTwotoneCloseSquare className="w-8 h-8" />
        </button>
      </div>
      <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-8 w-full">
        <div className="lg:w-[70%] h-auto bg-slate-200 border-2 border-secondary p-3 rounded-lg flex flex-col gap-y-3">
          {products.map((product, index) => (
            <CartItem key={index + 1} product={product} />
          ))}
        </div>
        <div className="lg:w-[30%] h-52 bg-slate-300 border-2 border-secondary p-3 rounded-lg">
          <div className="p-2 border-2 border-gray-500 mb-12 h-[50%] flex items-center rounded-lg">
            <span className="font-black">Total Price: </span>
            <span className="text-lg">&nbsp; {totalPrice} $</span>
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
