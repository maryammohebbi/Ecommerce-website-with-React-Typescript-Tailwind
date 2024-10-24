import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import { AiTwotoneCloseSquare } from 'react-icons/ai'
import { TbNumber } from 'react-icons/tb'
import useProducts from '../products/useProducts'
import { Tooltip } from '@mui/material'
import Empty from '../ui/Empty'
import { useCartNumber } from '../../context/CartNumberContext'

export interface CartProps {
  cart: {
    id: number
    userId: number
    date: string
    products: {
      productId: number
      quantity: number
    }[]
    __v: number
  }
  cartNo: number
  onDelete: (cartId: number) => void
  onUpdateProducts: (
    cartId: number,
    updatedProducts: { productId: number; quantity: number }[]
  ) => void
}

const Cart: React.FC<CartProps> = ({
  cart,
  cartNo,
  onDelete,
  onUpdateProducts,
}) => {
  const { products: productList } = useProducts()
  const { setCartNumber } = useCartNumber()
  const [cartProducts, setCartProducts] = useState(cart.products)
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({})

  // Initialize quantities on mount and when cartProducts change
  useEffect(() => {
    const initialQuantities = cartProducts.reduce((acc, product) => {
      acc[product.productId] = product.quantity
      return acc
    }, {} as { [key: number]: number })
    setQuantities(initialQuantities)
  }, [cartProducts])

  // Update the cart number and products on change
  useEffect(() => {
    const totalItems = cartProducts.reduce(
      (total, product) => total + product.quantity,
      0
    )
    setCartNumber(totalItems)
    onUpdateProducts(cart.id, cartProducts)
  }, [cartProducts, cart.id, onUpdateProducts, setCartNumber])

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    // Update quantities and cartProducts when quantity changes
    if (newQuantity < 0) return // Prevent negative quantities

    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }))

    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.productId === productId
          ? { ...product, quantity: newQuantity }
          : product
      )
    )
  }

  const handleDeleteProduct = (productId: number) => {
    setCartProducts((prevProducts) =>
      prevProducts.filter((product) => product.productId !== productId)
    )
  }

  const handleDeleteCart = () => {
    // This function handles deleting the entire cart and updating the cart number
    onDelete(cart.id)
    setCartNumber(0) // Set cart number to 0 since the cart is deleted
  }

  const totalPrice = cartProducts.reduce((acc, product) => {
    const productDetails = productList?.find((p) => p.id === product.productId)
    return (
      acc + (productDetails?.price ?? 0) * (quantities[product.productId] || 0)
    )
  }, 0)

  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-textColor font-bold flex gap-x-1 items-center">
          Cart <TbNumber className="w-5 h-5" /> : {cartNo}
        </span>
        <Tooltip title="Delete cart" placement="top" arrow>
          <button onClick={handleDeleteCart}>
            <AiTwotoneCloseSquare className="w-8 h-8" />
          </button>
        </Tooltip>
      </div>
      <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-8 w-full">
        <div className="lg:w-[70%] h-auto bg-slate-200 border-2 border-secondary p-3 rounded-lg flex flex-col gap-y-3">
          {cartProducts.length === 0 ? (
            <Empty sourceName="product" />
          ) : (
            cartProducts.map((product, index) => (
              <CartItem
                key={index + 1}
                product={product}
                quantity={quantities[product.productId]}
                onQuantityChange={handleQuantityChange}
                onDelete={handleDeleteProduct}
              />
            ))
          )}
        </div>
        <div className="lg:w-[30%] h-52 bg-slate-300 border-2 border-secondary p-3 rounded-lg">
          <div className="p-2 border-2 border-gray-500 mb-12 h-[50%] flex items-center rounded-lg">
            <span className="font-black">Total Price: </span>
            <span className="text-lg">&nbsp; {totalPrice.toFixed(2)} $</span>
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
