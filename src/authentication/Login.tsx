import React from 'react'

const Login: React.FC = ({}) => {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <div className="w-96 bg-secondaryBg rounded-2xl p-5 mt-12 shadow-2xl border-2 border-primary">
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
        <p>Don't you have an account yet?</p>
      </div>
    </div>
  )
}

export default Login
