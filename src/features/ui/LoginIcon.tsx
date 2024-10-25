import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdLogIn } from 'react-icons/io'
import useUser from '../../authentication/useUser'
import { IoIosLogOut } from 'react-icons/io'
import toast from 'react-hot-toast'
import { CgProfile } from 'react-icons/cg'

const LoginIcon: React.FC = ({}) => {
  const [user, setUser] = useUser()
  const navigate = useNavigate()

  const handleLogout = () => {
    setUser(null)
    navigate('/')
    toast(`See you next time, ${user?.name.firstname} 👋`)
  }

  return (
    <div>
      {user ? (
        <div className="relative group">
          <span className="cursor-pointer flex items-center gap-x-1 text-secondary-0 text-[10px] sm:text-[15px] transition-all md:text-[20px]">
            <CgProfile className="w-5 h-5 text-secondary-0 " /> Hi,{' '}
            {user.name.firstname} !
          </span>
          <div
            className="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-500 
            absolute top-9 -left-3 w-32 flex flex-col gap-y-2 p-2 border-2 border-secondary rounded bg-gray-300 text-black"
          >
            <Link to="/profile">Your Profile</Link>
            <button
              className="flex items-center gap-x-1 hover:text-red-400 transition-all duration-500"
              onClick={handleLogout}
            >
              Logout <IoIosLogOut className="sm:w-5 sm:h-5 w-2 h-2 " />
            </button>
          </div>
        </div>
      ) : (
        <Link to="/auth">
          <div className="text-textColor flex gap-x-1 justify-center items-center">
            <span className="text-secondary-0 text-sm md:text-xl">Login</span>
            <IoMdLogIn className="w-5 h-5 text-secondary-0" />
          </div>
        </Link>
      )}
    </div>
  )
}

export default LoginIcon
