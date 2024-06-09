import React from 'react'

type TitleProps = {
  title: string
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="container p-5 flex flex-col items-center ">
      <h3 className="text-2xl font-bold mb-8 text-textColor">{title}</h3>
    </div>
  )
}

export default Title
