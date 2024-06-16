import React from 'react'

import { Link } from 'react-router-dom'

type Props = {}

const Slider: React.FC<Props> = ({}) => {
  return (
    <div>
      <div className="w-full h-[calc(100vh-3rem)] bg-green-300">
        <Link to="products">
          <button className="p-2 bg-pink-200">Go to the shop</button>
        </Link>
      </div>
    </div>
  )
}

export default Slider
