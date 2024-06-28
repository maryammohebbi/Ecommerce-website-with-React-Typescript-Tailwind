import React from 'react'

const Login: React.FC = ({}) => {
  return (
    <div className="">
      <form className="flex flex-col gap-y-8">
        <input
          className="p-2 rounded-lg"
          type="text"
          placeholder="YOUR EMAIL OR USERNAME"
        />
        <input
          className="p-2 rounded-lg"
          type="password"
          placeholder="PASSWORD"
        />
        <button className="p-2 bg-green-300 rounded-lg text-lg font-semibold">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
