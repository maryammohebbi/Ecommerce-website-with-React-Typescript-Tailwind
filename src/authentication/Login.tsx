import React from 'react'
import InputField from '../features/ui/InputField'

const Login: React.FC = ({}) => {
  return (
    <div className="">
      <form className="flex flex-col gap-y-8">
        <InputField type="text" placeholder="YOUR EMAIL OR USERNAME" />
        <InputField type="password" placeholder="PASSWORD" />
        <button className="p-2 bg-green-300 rounded-lg text-lg font-semibold">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
