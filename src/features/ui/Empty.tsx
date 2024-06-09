import React from 'react'

interface SourceName {
  sourceName: string
}

const Empty: React.FC<SourceName> = ({ sourceName }) => {
  return (
    <div>
      <p className="text-xl text-textColor font-bold">
        There's no {sourceName} ...
      </p>
    </div>
  )
}

export default Empty
