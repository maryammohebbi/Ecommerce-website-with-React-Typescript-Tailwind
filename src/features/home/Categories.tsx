import React from 'react'
import CategoryContainer from '../categories/CategoryContainer'

const Categories: React.FC = () => {
  return (
    <div className=" my-12 w-full bg-primary-100 flex flex-col items-center justify-between h-[186px]  ">
      <CategoryContainer />
    </div>
  )
}

export default Categories
