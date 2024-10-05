import React from 'react'
import useSingleProduct from './useSingleProduct'
import Loader from '../ui/Loader'
import Empty from '../ui/Empty'
import truncateText from '../../pages/utils/textSlicer'
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
        <div className="w-full h-[80%] flex flex-col lg:flex-row gap-y-4 lg:gap-x-4 p-4">
          <div className="lg:w-2/5 lg:h-[36rem] bg-primary-200 border-2 border-primary rounded-lg   shadow-lg p-8 ">
            <img
              className="w-full h-full object-scale-down rounded-lg"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="lg:w-3/5 lg:h-[36rem] flex flex-col gap-y-4 border-2 border-primary rounded-lg shadow-2xl p-8">
            <div className="flex flex-col  gap-y-4 md:gap-20">
              <div>
                <span className="text-textColor text-lg font-bold">
                  Title:{' '}
                </span>
                <span className="text-secondary text-lg font-semibold">
                  {truncateText(product.title, 20)}
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
                  {truncateText(product.description, 60)}
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
                className="btn text-secondary-0 my-8"
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
