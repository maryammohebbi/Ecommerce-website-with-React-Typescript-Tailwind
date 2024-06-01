// import React from 'react'

interface SourceName{
    sourceName: string
}

function Empty({sourceName}: SourceName) {
  return (
    <div>
        <p className="text-xl text-textColor font-bold">There's no {sourceName} ...</p>
    </div>
  )
}

export default Empty