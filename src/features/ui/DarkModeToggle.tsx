import React from 'react'
import { GiUbisoftSun } from 'react-icons/gi'
import { PiMoonStarsLight } from 'react-icons/pi'
import { useDarkMode } from '../../context/DarkModeContext'

const DarkModeToggle: React.FC = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode()
  return (
    <div>
      <button className="" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? (
          <GiUbisoftSun className="w-8 h-8" />
        ) : (
          <PiMoonStarsLight className="w-8 h-8" />
        )}
      </button>
    </div>
  )
}

export default DarkModeToggle
