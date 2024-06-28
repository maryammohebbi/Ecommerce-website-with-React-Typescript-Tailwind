import React, { useState } from 'react'
import Login from './Login'

const AuthContainer: React.FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="container mx-auto flex flex-col items-center">
      <div className="flex flex-col gap-y-9 w-96 bg-secondaryBg rounded-2xl p-5 mt-12 shadow-2xl border-2 border-primary">
        <Login />
        <button onClick={() => setOpen(!open)}>
          {open
            ? 'Already have and account?'
            : "Don't you have an account yet?"}
        </button>
      </div>
    </div>
  )
}

export default AuthContainer
