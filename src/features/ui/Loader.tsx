import React from 'react'

import { LineWave } from 'react-loader-spinner'

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center">
      <LineWave
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  )
}

export default Loader
