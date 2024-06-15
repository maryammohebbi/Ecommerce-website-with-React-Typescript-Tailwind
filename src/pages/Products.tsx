import React from 'react'
import ProductsContainer from '../features/products/ProductsContainer'
import Title from '../features/ui/Title'

type Props = {}

const Products: React.FC<Props> = ({}) => {
  return (
    <div>
      <Title title="Products" />
      <ProductsContainer />
    </div>
  )
}

export default Products
