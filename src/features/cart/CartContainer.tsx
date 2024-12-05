import React, { useState, useCallback, useEffect } from 'react'
import useUser from '../../authentication/useUser'
import useCarts from './useCarts'
import Empty from '../ui/Empty'
import toast from 'react-hot-toast'
import Cart, { CartProps } from './Cart'
import Loader from '../ui/Loader'

const CartContainer: React.FC = () => {
  const { user } = useUser()
  const { carts, isCartsLoading } = useCarts()

  const [userCarts, setUserCarts] = useState<CartProps['cart'][]>([])

  const getUserCarts = useCallback(() => {
    if (carts && user) {
      const filteredCarts = carts.filter((cart) => cart.userId === user.id)
      setUserCarts(filteredCarts)
    }
  }, [carts, user])

  useEffect(() => {
    getUserCarts()
  }, [getUserCarts])

  const handleDeleteCart = useCallback((cartId: number) => {
    setUserCarts((prevCarts) => prevCarts.filter((cart) => cart.id !== cartId))
    toast.success('Cart deleted successfully')
  }, [])

  const handleUpdateCartProducts = useCallback(
    (
      cartId: number,
      updatedProducts: {
        productId: number
        quantity: number
        category: string
      }[]
    ) => {
      setUserCarts((prevCarts) =>
        prevCarts.map((cart) =>
          cart.id === cartId ? { ...cart, products: updatedProducts } : cart
        )
      )
    },
    []
  )

  if (isCartsLoading) return <Loader />
  if (!userCarts || userCarts.length === 0) return <Empty sourceName="cart" />

  return (
    <div className="container p-5 flex flex-col gap-y-2">
      {userCarts.map((cart, index) => (
        <Cart
          key={cart.id}
          cart={cart}
          cartNo={index + 1}
          onDelete={handleDeleteCart}
          onUpdateProducts={handleUpdateCartProducts}
        />
      ))}
    </div>
  )
}

export default CartContainer
