// import React from 'react'

import type {Product} from "./useProducts"

function Product({product}: {product: Product}) {
  return (
    <div>
        <div className="w-full h-[25rem] bg-secondaryBg rounded-lg p-3">
            <div className="w-[90%] h-[80%] p-2 bg-white container mx-auto rounded-lg mb-1">
                <img 
                    src={product.image} 
                    alt={product.title}
                    className=" w-full h-full object-scale-down"
                />
            </div>
            <p className="text-lg text-textColor font-bold text-center mb-1">
                {product.title}
            </p>
            <div className="flex justify-between">
                <span className="text-lg font-bold">Price:</span>
                <span className="text-lg font-bold text-red-400">{product.price} $</span>
            </div>
        </div>
    </div>
  )
}

export default Product