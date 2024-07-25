import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdLogIn } from 'react-icons/io'
import useUser from '../../authentication/useUser'
import { IoIosLogOut } from 'react-icons/io'
import toast from 'react-hot-toast'

const LoginIcon: React.FC = ({}) => {
  const user = useUser()
  const navigate = useNavigate()
  return (
    <div>
      {user ? (
        <div className="flex gap-x-2 items-center">
          <span>Hi, {user.name.firstname} !</span>
          <button
            onClick={() => {
              // setUser(null)
              navigate('/')
              toast(`See you next time, ${user.name.firstname} 👋`)
            }}
          >
            <IoIosLogOut className="w-5 h-5"></IoIosLogOut>
          </button>
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
