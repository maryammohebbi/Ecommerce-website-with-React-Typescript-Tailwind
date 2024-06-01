// import React from 'react';

import useCategories from "./useCategories"
import Category from "./Category"


const CategoryContainer = () => {
  const { isCategoriesLoading, categories } = useCategories()

  if (isCategoriesLoading) return <p>Loading...</p>
  if (!categories) return <p>No categories available</p>

  return (
    <div className="container p-5 flex flex-col items-center ">
      <h3>Product Categories</h3>
      <Category categories={categories}/>
    </div>
  );
}



export default CategoryContainer;
