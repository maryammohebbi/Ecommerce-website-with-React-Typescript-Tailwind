import React from 'react'

import useCategories from './useCategories'
import Category from './Category'
import Empty from '../ui/Empty'

const CategoryContainer: React.FC = () => {
  const { categories } = useCategories()

  if (!categories) return <Empty sourceName="category" />

  return (
    <div className="w-full">
      <Category categories={categories} />
    </div>
  )
}

export default CategoryContainer
