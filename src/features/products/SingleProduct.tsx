import React from 'react'
import useSingleProduct from './useSingleProduct'
import Loader from '../ui/Loader'
import Empty from '../ui/Empty'

const SingleProduct: React.FC = () => {
  const { isSingleProductLoading, product } = useSingleProduct()

  if (isSingleProductLoading) return <Loader />
  if (!product) return <Empty sourceName="product" />

  //   console.log(product)

  return (
    <div>
      <p className="">{product.title}</p>
      <p>{product.price}</p>
    </div>
  )
}

export default SingleProduct
