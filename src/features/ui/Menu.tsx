import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import CartIcon from './CartIcon'
import LoginIcon from './LoginIcon'

type Props = {}

const Menu: React.FC<Props> = ({}) => {
  return (
    <div className="border-b-2 border-t-2 border-secondary">
      <div className="container flex justify-between p-2 text-textColor">
        <div className="text-textColor">
          <CartIcon />
        </div>
        <div>
          <LoginIcon />
        </div>
        <div>search</div>
        <div>
          <DarkModeToggle />
        </div>
      </div>
    </div>
  )
}

export default Menu
