import React from 'react'
import InputField from '../features/ui/InputField'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { getLoginInfo } from '../features/services/authService'
import toast from 'react-hot-toast'

type Inputs = {
  email: string
  password: string
  required?: boolean
}

const Login: React.FC = ({}) => {
  const { register, handleSubmit } = useForm<Inputs>()

  const { isPending, mutateAsync } = useMutation({
    mutationFn: getLoginInfo,
  })

  const loginHandler = async (data: Inputs) => {
    try {
      await mutateAsync(data)
      toast.success('Welcome!')
    } catch (error) {
      toast.error('Your login failed.')
    }
  }

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="flex flex-col gap-y-8"
      >
        <InputField
          name="email"
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
          {isPending ? 'Logining...' : 'Login'}
        </button>
      </form>
    </div>
  )
}

export default Login
