import React from 'react'

import useCategories from './useCategories'
import Category from './Category'
import Loader from '../ui/Loader'
import Empty from '../ui/Empty'

const CategoryContainer: React.FC = () => {
  const { isCategoriesLoading, categories } = useCategories()

  if (isCategoriesLoading) return <Loader />
  if (!categories) return <Empty sourceName="category" />

  return (
    <div>
      <Category categories={categories} />
    </div>
  )
}

export default CategoryContainer
