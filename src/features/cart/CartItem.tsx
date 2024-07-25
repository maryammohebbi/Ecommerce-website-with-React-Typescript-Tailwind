import React from 'react'
import { GoTrash } from 'react-icons/go'
import { Link } from 'react-router-dom'
import useProducts from '../products/useProducts'

interface CartProduct {
  product: {
    productId: number
    quantity: number
  }
  quantity: number
  onQuantityChange: (productId: number, newQuantity: number) => void
}

const CartItem: React.FC<CartProduct> = ({
  product,
  quantity,
  onQuantityChange,
}) => {
  const { products } = useProducts()

  const cartProduct = products?.find((p) => p.id === product.productId)

  // const [prodQuantity, setProdQuantity] = useState(product.quantity)

  // const incrementQuantity = () => {
  //   setProdQuantity((prevQuantity) => prevQuantity + 1)
  // }

  // const decrementQuantity = () => {
  //   setProdQuantity((prevQuantity) =>
  //     prevQuantity > 1 ? prevQuantity - 1 : prevQuantity
  //   )
  // }

  const incrementQuantity = () => {
    onQuantityChange(product.productId, quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      onQuantityChange(product.productId, quantity - 1)
    }
  }

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-4 md:flex-row justify-center md:justify-between items-center p-4 border-2 border-slate-400 rounded-lg bg-slate-300 hover:bg-slate-400 transition-all duration-500 shadow-2xl">
        <div className="w-full md:w-[30%] h-[10rem] bg-white">
          <Link to={`/products/${cartProduct?.id}`}>
            <img
              src={cartProduct?.image}
              alt={cartProduct?.title}
              className="w-full h-full object-scale-down"
            />
          </Link>
        </div>

        <div className="flex flex-col w-full md:w-[50%] p-2 gap-y-4">
          <div>
            <span className="font-black">Title:</span>
            <span className="font-semibold">&nbsp; {cartProduct?.title}</span>
          </div>
          <div>
            <span className="font-black">Price:</span>
            <span className="font-semibold">
              &nbsp; {((cartProduct?.price ?? 0) * quantity).toFixed(2)} $
            </span>
          </div>
        </div>

        <div className="flex gap-x-2 items-center justify-center w-full md:w-[15%]">
          <button
            onClick={decrementQuantity}
            className="border-2 border-slate-500 w-7 h-7 rounded-md flex items-center justify-center font-black shadow-2xl"
          >
            -
          </button>
          <span className="font-black text-xl">{quantity}</span>
          <button
            onClick={incrementQuantity}
            className="border-2 border-slate-500 w-7 h-7 rounded-md flex items-center justify-center font-black shadow-2xl"
          >
            +
          </button>
        </div>
        <button className="w-full md:w-[14%] flex justify-center">
          <GoTrash className="w-7 h-7 text-error" />
        </button>
      </div>
    </div>
  )
}

export default CartItem
