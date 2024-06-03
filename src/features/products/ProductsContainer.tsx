// import React from 'react'

import Empty from "../ui/Empty"
import Loader from "../ui/Loader"
import Product from "./Product"
import useProducts from "./useProducts"

type Props = {}

function ProductsContainer({}: Props) {
    const {isProductsLoading, products} = useProducts()

    if (isProductsLoading) return <Loader/>
    if(!products) return <Empty sourceName="product"/>

  return (
    <div className="container p-5 flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                products.map((product)=> (
                    <Product key={product.id} product={product}/>
                ))
            }
        </div>
    </div>
  )
}

export default ProductsContainer