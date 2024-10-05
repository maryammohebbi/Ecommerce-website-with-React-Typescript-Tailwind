import React from 'react'
import { Link } from 'react-router-dom'
import type { Product } from './useProducts'
import truncateText from '../../utils/textSlicer'

interface ProductProps {
  product: Product
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <Link to={`${product.id}`}>
      <div className="w-full h-[30rem] bg-secondaryBg rounded-lg p-6 shadow-md border bg-primary-0 hover:scale-105 transition-transform duration-300">
        <div className="w-[90%] h-[80%] p-2 bg-white container mx-auto rounded-lg shadow-2xl mb-2">
          <img
            src={product.image || '/fallback-image.jpg'}
            alt={product.title || 'Product Image'}
            className="w-full h-full object-scale-down"
          />
        </div>
        <p className=" text-textColor text-center mb-2 font-bold text-md title-shadow">
          {truncateText(product.title ?? 'Untitled Product', 30)}
        </p>
        <div className="flex justify-between items-center px-4">
          <span className="text-xl font-semibold title-shadow">Price:</span>
          <span className="text-2xl font-semibold text-secondary-100">
            {product.price}
            <span className="text-secondary-100 font-semibold title-shadow ">
              {' '}
              $
            </span>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
