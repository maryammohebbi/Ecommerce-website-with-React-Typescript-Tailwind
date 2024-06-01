// import React from 'react'

import CategoryContainer from "../categories/CategoryContainer"

type Props = {}

function Categories({}: Props) {
  return (
    <div className="container p-5 flex flex-col items-center ">
        <h3 className="text-2xl font-bold mb-8 text-textColor">Product Categories</h3>
        <CategoryContainer/>
    </div>
  )
}

export default Categories