import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdLogIn } from 'react-icons/io'

const LoginIcon: React.FC = ({}) => {
  return (
    <div>
      <Link to="/auth">
        <div className="text-textColor flex gap-x-1 justify-center items-center">
          <span>Login</span>
          <IoMdLogIn className="w-5 h-5" />
        </div>
      </Link>
    </div>
  )
}

export default LoginIcon
