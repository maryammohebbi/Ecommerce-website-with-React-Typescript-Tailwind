// import React from 'react'

import useCategories from "./useCategories"

// interface Props {}
const CategoryContainer= ()=> {
    const {isCategoriesLoading, categories} = useCategories()

    // if (isCategoriesLoading) return <p> Loading...</p>
    
    if (isCategoriesLoading) return <p>Loading...</p>;
    if (!categories) return <p>No categories available</p>;

  return (
    <div>
      {
        categories.map((category: string) => (
          <p key={category}>{category}</p>
        ))
      }
    </div>
  )
}

export default CategoryContainer