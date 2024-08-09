import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import CartIcon from './CartIcon'
import LoginIcon from './LoginIcon'
import { Link } from 'react-router-dom'
import { Tooltip } from '@mui/material'

type Props = {}

const Menu: React.FC<Props> = ({}) => {
  return (
    <div className="bg-bgMenu border-b-2 border-t-2 border-secondary sticky top-0 z-50">
      <div className="container flex justify-between p-2 text-textColor">
        <div>
          <Link to="/">Home</Link>
        </div>

        <div>
          <LoginIcon />
        </div>
        <div>search</div>
        <Tooltip title="Theme" placement="bottom" arrow>
          <div>
            <DarkModeToggle />
          </div>
        </Tooltip>
        <Tooltip title="Cart" placement="bottom" arrow>
          <div className="text-textColor">
            <CartIcon />
          </div>
        </Tooltip>
      </div>
    </div>
  )
}

export default Menu
