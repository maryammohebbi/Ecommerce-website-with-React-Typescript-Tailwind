import React, { useState } from 'react'
import { GiUbisoftSun } from 'react-icons/gi'
import { PiMoonStarsLight } from 'react-icons/pi'

type Props = {}

const DarkModeToggle = (props: Props) => {
  const [toggle, setToggle] = useState(true)
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? <GiUbisoftSun /> : <PiMoonStarsLight />}
      </button>
    </div>
  )
}

export default DarkModeToggle
