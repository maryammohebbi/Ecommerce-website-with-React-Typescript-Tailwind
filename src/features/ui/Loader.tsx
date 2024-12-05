import React from 'react'
import { BallTriangle } from 'react-loader-spinner'

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <BallTriangle
        height={60}
        width={60}
        radius={5}
        color="#8617c0"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}

export default Loader
