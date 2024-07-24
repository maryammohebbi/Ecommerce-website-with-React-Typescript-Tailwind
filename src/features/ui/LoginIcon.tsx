import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdLogIn } from 'react-icons/io'
import useUser from '../../authentication/useUser'

const LoginIcon: React.FC = ({}) => {
  const user = useUser()
  return (
    <div>
      {user ? (
        <p> Hi, {user.name.firstname} ! </p>
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
