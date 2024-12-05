import React from 'react'
import Empty from '../ui/Empty'
import useProducts from './useProducts'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard'
import LoaderProducts from '../ui/LoaderProducts'

interface ProductsContainerProps {
  searchTerm: string
}

const ProductsContainer: React.FC<ProductsContainerProps> = ({
  searchTerm,
}) => {
  const { isProductsLoading, products } = useProducts()
  const { category } = useParams()

  const filteredProducts = category
    ? products?.filter((product) => product.category === category)
    : products // Show all products if no category

  // Further filter products by search term if it exists
  const searchedProducts = filteredProducts?.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (isProductsLoading) return <LoaderProducts />
  if (!searchedProducts || searchedProducts.length === 0)
    return <Empty sourceName="product" />

  return (
    <div className="container p-5 flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
        {searchedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductsContainer
