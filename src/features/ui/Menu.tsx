import LogoTheme from '../ui/LogoTheme'
import DarkModeToggle from './DarkModeToggle'
import CartIcon from './CartIcon'
import LoginIcon from './LoginIcon'
import { Link } from 'react-router-dom'
import { Tooltip } from '@mui/material'

type Props = {}

const Menu: React.FC<Props> = ({}) => {
  return (
    <div className="flex flex-col gap-y-6 xl:flex-row justify-between w-full  items-center md:px-24 md:py-8 p-8">
      <LogoTheme />
      <div className="flex xl:gap-x-[65px] md:gap-x-16 gap-x-8  items-center justify-between transition-all ">
        <div>
          <Link to="/" className=" text-sm text-secondary-100 md:menu-font">
            Home
          </Link>
        </div>

        <div>
          <input
            className="border-2 rounded-xl p-3"
            type="text"
            placeholder="Search..."
          />
        </div>
        <Tooltip title="Theme" placement="bottom" arrow>
          <div>
            <DarkModeToggle rotate="rotate-0" />
          </div>
        </Tooltip>
        <Tooltip title="Cart" placement="bottom" arrow>
          <div>
            <CartIcon rotate="rotate-0" />
          </div>
        </Tooltip>
        <div className="sm:btn btn-primary rounded-[7px] ">
          <LoginIcon />
        </div>
      </div>
    </div>
  )
}

export default Menu
