// import React from 'react'

import ProductsContainer from '../features/products/ProductsContainer'
import Menu from '../features/ui/Menu'
import Title from '../features/ui/Title'

type Props = {}

function Products({}: Props) {
  return (
    <div>
      <Menu />
      <Title title="Products" />
      <ProductsContainer />
    </div>
  )
}

export default Products
