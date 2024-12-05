import React from 'react'
import { GoTrash } from 'react-icons/go'
import { Link } from 'react-router-dom'
import useProducts from '../products/useProducts'
import { Tooltip } from '@mui/material'
import { useCartNumber } from '../../context/CartNumberContext'

interface CartProduct {
  product: {
    productId: number
    quantity: number
    category: string
  }
  quantity: number
  onQuantityChange: (productId: number, newQuantity: number) => void
  onDelete: (productId: number) => void
}

const CartItem: React.FC<CartProduct> = ({
  product,
  quantity,
  onQuantityChange,
  onDelete,
}) => {
  const { products } = useProducts()
  const { setCartNumber } = useCartNumber() // Use context to update cart number

  const cartProduct = products?.find((p) => p.id === product.productId)

  const incrementQuantity = () => {
    const newQuantity = quantity + 1
    onQuantityChange(product.productId, newQuantity)

    // After updating the quantity, update the total cart number in the context
    updateCartNumber(1) // Add 1 to the cart number
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1
      onQuantityChange(product.productId, newQuantity)

      // After updating the quantity, update the total cart number in the context
      updateCartNumber(-1) // Subtract 1 from the cart number
    }
  }

  // Function to update the cart number in context
  const updateCartNumber = (quantityChange: number) => {
    setCartNumber((prevCartNumber) => prevCartNumber + quantityChange)
  }

  const handleDelete = () => {
    // Update the cart number by subtracting the current item's quantity before deletion
    updateCartNumber(-quantity) // Subtract the current item's quantity
    onDelete(product.productId)
  }
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-4 md:flex-row justify-center md:justify-between items-center p-4 border-2 border-slate-400 rounded-lg bg-slate-300 hover:bg-slate-400 transition-all duration-500 shadow-2xl">
        <div className="w-full md:w-[30%] h-[10rem] bg-white">
          <Link to={`/products/${cartProduct?.category}/${product.productId}`}>
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
        <Tooltip title="Delete product" placement="top" arrow>
          <button
            onClick={handleDelete} // Call handleDelete here
            className="w-full md:w-[14%] flex justify-center"
          >
            <GoTrash className="w-7 h-7 text-error" />
          </button>
        </Tooltip>
      </div>
    </div>
  )
}

export default CartItem
