// import React from 'react'

type Title = {
    title: string
}

function Title({title}: Title) {
  return (
    <div className="container p-5 flex flex-col items-center ">
        <h3 className="text-2xl font-bold mb-8 text-textColor">{title}</h3>
    </div>
  )
}

export default Title