import React from 'react'
import { Link } from 'react-router-dom'
import type { Product } from './useProducts'

const Product: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Link to={`${product.category}/${product.title}`}>
      <div className="w-full h-[30rem] bg-secondaryBg rounded-lg p-5 shadow-xl hover:scale-[1.01] duration-500 transition-all">
        <div className="w-[90%] h-[80%] p-2 bg-white container mx-auto rounded-lg shadow-2xl mb-1">
          <img
            src={product.image}
            alt={product.title}
            className=" w-full h-full object-scale-down"
          />
        </div>
        <p className="text-xl text-textColor text-center mb-1">
          {product.title}
        </p>
        <div className="flex justify-between">
          <span className="text-xl font-semibold">Price:</span>
          <span className="text-2xl font-semibold text-red-400">
            {product.price}
            <span className="text-white font-semibold"> $</span>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default Product
