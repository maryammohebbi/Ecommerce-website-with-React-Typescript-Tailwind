import React from 'react'
import { Link } from 'react-router-dom'

const AllProducts: React.FC = () => {
  return (
    <div className="lg:hidden container mx-auto flex justify-center items-center">
      <Link to="/products">
        <button className="text-black bg-purple-600 p-5 rounded-lg font-bold shadow-xl">
          See All Products Here
        </button>
      </Link>
    </div>
  )
}

export default AllProducts
