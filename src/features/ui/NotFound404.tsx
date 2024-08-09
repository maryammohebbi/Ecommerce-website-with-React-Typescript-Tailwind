import React from 'react'
import { Link } from 'react-router-dom'

const NotFound404: React.FC = () => {
  return (
    <div className="container">
      <div className="flex justify-center items-center gap-x-2 h-screen">
        <div className="flex flex-col items-center gap-y-4">
          <p className="sm:hidden text-textColor text-2xl font-bold">404</p>
          <p className="text-textColor text-2xl font-bold">
            Opps! Page Not Found!
          </p>
          <Link to="/">
            <button className="bg-secondary px-3 py-2 text-black rounded-lg font-semibold">
              GO Back To Home Page
            </button>
          </Link>
        </div>
        <div className="hidden sm:flex max-w-sm md:max-w-lg lg:max-w-xl h-[70%]">
          <img
            className="w-full h-full"
            src="/404notfound.png"
            alt="Not-Found"
          />
        </div>
      </div>
    </div>
  )
}

export default NotFound404
