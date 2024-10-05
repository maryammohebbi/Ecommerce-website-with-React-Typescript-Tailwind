import React from 'react'
import { GiUbisoftSun } from 'react-icons/gi'
import { PiMoonStarsLight } from 'react-icons/pi'
import { useDarkMode } from '../../context/DarkModeContext'
type Prop = {
  rotate: string
}
const DarkModeToggle: React.FC<Prop> = ({ rotate }) => {
  const { isDarkMode, setIsDarkMode } = useDarkMode()
  return (
    <div>
      <button className="" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? (
          <GiUbisoftSun className={`w-6 h-6 menu-fon ${rotate} text-secondary-100  `} />
        ) : (
          <PiMoonStarsLight className={`w-6 h-6 menu-fon ${rotate}   `} />
        )}
      </button>
    </div>
  )
}

export default DarkModeToggle
