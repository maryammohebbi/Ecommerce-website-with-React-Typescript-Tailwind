import React, { useEffect, useState } from 'react'
import Cart from './Cart'
import useUser from '../../authentication/useUser'
import useCarts from './useCarts'
import Loader from '../ui/Loader'
import Empty from '../ui/Empty'
import { useCartNumber } from '../../context/CartNumberContext'
import toast from 'react-hot-toast'

const CartContainer: React.FC = () => {
  const user = useUser()
  const { carts, isCartsLoading } = useCarts()
  const { setCartNumber } = useCartNumber()

  // const userCarts = carts?.filter((cart) => cart.userId === user?.id)

  // const userCartDel = userCarts?.filter(cart => cart.id !== id)

  // const cartDel = (cartId: number) => {
  //   const userCartDel = userCarts?.filter((cart) => cart.id !== cartId)
  //   return userCartDel
  // }
  const [userCarts, setUserCarts] = useState(
    carts?.filter((cart) => cart.userId === user?.id) || []
  )

  useEffect(() => {
    if (carts) {
      setUserCarts(carts.filter((cart) => cart.userId === user?.id))
    }
  }, [carts, user])

  useEffect(() => {
    if (userCarts) {
      const productsLength = userCarts.reduce(
        (acc, curr) => acc + curr.products.length,
        0
      )
      setCartNumber(productsLength)
    }
  }, [userCarts, setCartNumber])

  const handleDeleteCart = (cartId: number) => {
    setUserCarts((prevCarts) => prevCarts.filter((cart) => cart.id !== cartId))
    toast.success('Cart deleted successfully')
  }

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
        />
      ))}
    </div>
  )
}

export default CartContainer
