import React from 'react'
import { useLocation } from 'react-router-dom'
import ProductsContainer from '../features/products/ProductsContainer'
import Title from '../features/ui/Title'

const Products: React.FC = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const searchTerm = searchParams.get('search') || ''

  return (
    <div>
      <Title title="Products" />
      <ProductsContainer searchTerm={searchTerm} />
    </div>
  )
}

export default Products
