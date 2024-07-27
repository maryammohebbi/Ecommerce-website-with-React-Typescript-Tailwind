import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdLogIn } from 'react-icons/io'
import useUser from '../../authentication/useUser'
import { IoIosLogOut } from 'react-icons/io'
import toast from 'react-hot-toast'
// import { Tooltip } from '@mui/material'

const LoginIcon: React.FC = ({}) => {
  const user = useUser()
  const navigate = useNavigate()
  return (
    <div>
      {user ? (
        <div className="relative group">
          <span className="cursor-pointer">Hi, {user.name.firstname} !</span>
          <div
            className="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-500 
            absolute top-full -left-6 w-28 flex flex-col gap-y-2 p-2 border-2 border-secondary rounded bg-secondaryBg text-white"
          >
            <Link to="/profile">Your Profile</Link>
            <button
              className="flex items-center gap-x-1 hover:text-red-400 transition-all duration-500"
              onClick={() => {
                // setUser(null)
                navigate('/')
                toast(`See you next time, ${user.name.firstname} 👋`)
              }}
            >
              Logout <IoIosLogOut className="w-5 h-5 " />
            </button>
          </div>
        </div>
      ) : (
        <Link to="/auth">
          <div className="text-textColor flex gap-x-1 justify-center items-center">
            <span>Login</span>
            <IoMdLogIn className="w-5 h-5" />
          </div>
        </Link>
      )}
    </div>
  )
}

export default LoginIcon
