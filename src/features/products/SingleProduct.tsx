import React from 'react'
import useSingleProduct from './useSingleProduct'
import Loader from '../ui/Loader'
import Empty from '../ui/Empty'
// import { useCartNumber } from '../../context/CartNumberContext'

const SingleProduct: React.FC = () => {
  const { isSingleProductLoading, product } = useSingleProduct()
  // const { setCartNumber } = useCartNumber()

  const cartAddNumber = () => {
    // setCartNumber((prev) => prev + 1)
  }

  if (isSingleProductLoading) return <Loader />
  if (!product) return <Empty sourceName="product" />

  return (
    <div className="container p-5">
      <div className="flex flex-col">
        <div className="w-full h-[80%] flex flex-col lg:flex-row gap-y-4 lg:gap-x-4">
          <div className="lg:w-2/5 lg:h-[36rem] bg-white border-2 border-primary rounded-lg p-2 shadow-2xl">
            <img
              className="w-full h-full object-scale-down rounded-lg"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="lg:w-3/5 lg:h-[36rem] flex flex-col gap-y-20 border-2 border-primary rounded-lg p-5 shadow-2xl">
            <div className="flex flex-col gap-y-10">
              <div>
                <span className="text-textColor text-lg font-bold">
                  Title:{' '}
                </span>
                <span className="text-secondary text-lg font-semibold">
                  {product.title}
                </span>
              </div>
              <div>
                <span className="text-textColor text-lg font-bold">
                  Price:{' '}
                </span>
                <span className="text-secondary text-lg font-semibold">
                  {product.price} $
                </span>
              </div>
              <div>
                <span className="text-textColor text-lg font-bold">
                  Description:
                </span>
                <span className="text-secondary text-lg font-semibold">
                  {product.description}
                </span>
              </div>
              <div>
                <span className="text-textColor text-lg font-bold">
                  Category:
                </span>
                <span className="text-secondary text-lg font-semibold">
                  {product.category}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <button
                onClick={cartAddNumber}
                className="px-3 py-2 bg-emerald-500 rounded-lg w-32 text-textColor text-lg font-semibold shadow-2xl border-2 border-green-900"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
