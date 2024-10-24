import React from 'react'
import Empty from '../ui/Empty'
import Loader from '../ui/Loader'
import useProducts from './useProducts'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard'

const ProductsContainer: React.FC = () => {
  const { isProductsLoading, products } = useProducts()
  const { category } = useParams()

  const filteredProducts = category
    ? products?.filter((product) => product.category === category)
    : products // Show all products if no category

  if (isProductsLoading) return <Loader />
  if (!products) return <Empty sourceName="product" />

  return (
    <div className="container p-5 flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductsContainer
