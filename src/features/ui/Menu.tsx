import LogoTheme from '../ui/LogoTheme'
import DarkModeToggle from './DarkModeToggle'
import CartIcon from './CartIcon'
import LoginIcon from './LoginIcon'
import { Link } from 'react-router-dom'
import { Tooltip } from '@mui/material'

type Props = {}

const Menu: React.FC<Props> = ({}) => {
  return (
    <div className="flex flex-col gap-y-4 xl:flex-row justify-between w-full  items-center py-12 px-24 ">
      <LogoTheme />
      <div className="flex xl:gap-x-[65px] md:gap-x-16 gap-x-8  items-center justify-between transition-all  ">
        <div>
          <Link to="/" className="md:menu-font">
            Home
          </Link>
        </div>

        <div>
          <h1 className="md:menu-font">search</h1>
        </div>
        <Tooltip title="Theme" placement="bottom" arrow>
          <div>
            <DarkModeToggle />
          </div>
        </Tooltip>
        <Tooltip title="Cart" placement="bottom" arrow>
          <div>
            <CartIcon />
          </div>
        </Tooltip>
        <div className="sm:btn btn-primary rounded-[7px]">
          <LoginIcon />
        </div>
      </div>
    </div>
  )
}

export default Menu
