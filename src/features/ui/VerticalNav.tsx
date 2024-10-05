import { Link } from 'react-router-dom'
import { HiOutlineHome } from 'react-icons/hi'
import { HiOutlineSearch } from 'react-icons/hi'

import DarkModeToggle from './DarkModeToggle'
import CartIcon from './CartIcon'
import { Fade } from 'react-awesome-reveal'

type Props = {}
const VerticalNav: React.FC<Props> = () => {
  return (
    <div className="flex flex-col fixed right-0 gap-y-8 h-full justify-start items-start z-[1000]">
      <Fade direction="right">
        <div className="vertical-nav">
          <Link to="/" className="md:menu-font  ">
            <HiOutlineHome className="w-6  h-6 rotate-180 " />
          </Link>
        </div>
      </Fade>
      <Fade direction="right">
        <div className="vertical-nav">
          <div>
            <HiOutlineSearch className="w-6  h-6 rotate-180 text-secondary-100 " />
          </div>
        </div>
      </Fade>
      <Fade direction="right">
        <div className="vertical-nav">
          <DarkModeToggle rotate=" rotate-180" />
        </div>
      </Fade>
      <Fade direction="right">
        {' '}
        <div className="vertical-nav">
          <CartIcon rotate="rotate-180" />
        </div>
      </Fade>
    </div>
  )
}
export default VerticalNav
