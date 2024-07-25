import React, { useEffect } from 'react'
import Cart from './Cart'
import useUser from '../../authentication/useUser'
import useCarts from './useCarts'
import Loader from '../ui/Loader'
import Empty from '../ui/Empty'
import { useCartNumber } from '../../context/CartNumberContext'

const CartContainer: React.FC = ({}) => {
  const user = useUser()
  const { carts, isCartsLoading } = useCarts()
  const { setCartNumber } = useCartNumber()

  const userCarts = carts?.filter((cart) => cart.userId === user?.id)

  useEffect(() => {
    if (userCarts) {
      const productsLength = userCarts.reduce(
        (acc, curr) => acc + curr.products.length,
        0
      )
      setCartNumber(productsLength)
    }
  }, [userCarts, setCartNumber])

  if (isCartsLoading) return <Loader />
  if (!userCarts || userCarts.length === 0) return <Empty sourceName="cart" />

  return (
    <div className="container p-5 flex flex-col gap-y-2">
      {userCarts.map((cart, index) => (
        <Cart key={cart.id} cart={cart} cartNo={index + 1} />
      ))}
    </div>
  )
}

export default CartContainer
