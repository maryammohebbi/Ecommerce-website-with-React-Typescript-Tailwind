import React from 'react'
import InputField from '../features/ui/InputField'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { getLoginInfo } from '../features/services/authService'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

type Inputs = {
  userName: string
  password: string
}

const Login: React.FC = ({}) => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const { isPending, mutateAsync } = useMutation({
    mutationFn: getLoginInfo,
  })

  const loginHandler = async ({ userName, password }: Inputs) => {
    try {
      await mutateAsync({ userName, password })
      toast.success('Welcome!')
      navigate('/')
      console.log(`welcome ${userName}`)
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
          name="userName"
          register={register}
          errors={errors}
          type="text"
          label="YOUR USERNAME"
          validationSchema={{
            required: 'Email is necessary',
          }}
          required
        />
        <InputField
          name="password"
          register={register}
          type="password"
          label="YOUR PASSWORD"
          errors={errors}
          validationSchema={{
            required: 'Password is necessary',
          }}
          required
        />
        <button className="p-2 bg-green-300 rounded-lg text-lg font-semibold">
          {isPending ? 'Please wait...' : 'Login'}
        </button>
      </form>
    </div>
  )
}

export default Login
