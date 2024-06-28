import React from 'react'
import InputField from '../features/ui/InputField'

const SignUp: React.FC = ({}) => {
  return (
    <div className="">
      <form className="flex flex-col gap-y-8">
        <InputField type="text" placeholder="EMAIL" />
        <InputField type="text" placeholder="USERNAME" />
        <InputField type="password" placeholder="PASSWORD" />
        <InputField type="number" placeholder="PHONE NUMBER" />
        <button className="p-2 bg-green-300 rounded-lg text-lg font-semibold">
          SignUp
        </button>
      </form>
    </div>
  )
}

export default SignUp
