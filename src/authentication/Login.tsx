import React from 'react'
import InputField from '../features/ui/InputField'
import { useForm } from 'react-hook-form'

type Inputs = {
  name: string
  password: string
}

const Login: React.FC = ({}) => {
  const { register, handleSubmit } = useForm<Inputs>()

  const loginReqHandler = () => {}

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(loginReqHandler)}
        className="flex flex-col gap-y-8"
      >
        <InputField
          name="userName"
          register={register}
          required
          type="text"
          placeholder="YOUR EMAIL OR USERNAME"
        />
        <InputField
          name="password"
          register={register}
          required
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
