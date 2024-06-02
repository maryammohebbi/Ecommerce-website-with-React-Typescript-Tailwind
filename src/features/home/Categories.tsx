// import React from 'react'

import CategoryContainer from "../categories/CategoryContainer"
import Title from "../ui/Title"

type Props = {}

function Categories({}: Props) {
  return (
    <div className="container p-5 flex flex-col items-center ">
        <Title title="Product Categories"/>
        <CategoryContainer/>
    </div>
  )
}

export default Categories