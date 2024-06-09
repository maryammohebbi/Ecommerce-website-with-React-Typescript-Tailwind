import React from 'react'
import CategoryContainer from '../categories/CategoryContainer'
import Title from '../ui/Title'

const Categories: React.FC = () => {
  return (
    <div className="container p-5 flex flex-col items-center ">
      <Title title="Product Categories" />
      <CategoryContainer />
    </div>
  )
}

export default Categories
