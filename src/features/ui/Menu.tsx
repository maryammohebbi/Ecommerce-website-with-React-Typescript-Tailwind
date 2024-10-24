import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Tooltip } from '@mui/material'
import LogoTheme from '../ui/LogoTheme'
import DarkModeToggle from './DarkModeToggle'
import CartIcon from './CartIcon'
import LoginIcon from './LoginIcon'
import { FiSearch } from 'react-icons/fi'

const Menu: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchTerm) {
      // Redirect to the products page with the search query
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`)
    }
  }

  return (
    <div className="flex flex-col gap-y-6 xl:flex-row justify-between w-full  items-center md:px-24 md:py-8 p-8">
      <LogoTheme />
      <div className="flex xl:gap-x-[65px] md:gap-x-16 gap-x-8  items-center justify-between transition-all ">
        <div>
          <Link to="/" className=" text-sm text-secondary-100 md:menu-font">
            Home
          </Link>
        </div>

        <form
          onSubmit={handleSearchSubmit}
          className="flex gap-x-2 relative items-center"
        >
          <input
            className="border-2 rounded-xl p-3 "
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="absolute right-2">
            <FiSearch className="w-7 h-7 " />
          </button>
        </form>

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
