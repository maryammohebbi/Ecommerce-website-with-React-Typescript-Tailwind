import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'

const AuthContainer: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="container mx-auto flex flex-col items-center">
      <div className="flex flex-col gap-y-9 w-72 md:w-96 bg-secondaryBg rounded-2xl p-5 mt-12 shadow-2xl border-2 border-primary">
        {open ? <SignUp /> : <Login />}
        <button className="text-black text-lg" onClick={() => setOpen(!open)}>
          {open ? 'Already have an account?' : "Don't you have an account yet?"}
        </button>
      </div>
    </div>
  )
}

export default AuthContainer
