import React from 'react'
import Cart from './Cart'
import useUser from '../../authentication/useUser'
import useCarts from './useCarts'
import Loader from '../ui/Loader'
import Empty from '../ui/Empty'

const CartContainer: React.FC = ({}) => {
  const user = useUser()
  const { carts, isCartsLoading } = useCarts()

  const userCart = carts?.filter((cart) => cart.userId === user?.id)

  if (isCartsLoading) return <Loader />
  if (!userCart) return <Empty sourceName="cart" />

  return (
    <div className="container p-5 flex flex-col gap-y-2">
      {userCart.map((cart, index) => (
        <Cart key={cart.id} cart={cart} cartNumber={index + 1} />
      ))}
    </div>
  )
}

export default CartContainer
