import React from 'react'
import InputField from '../features/ui/InputField'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { getLoginInfo } from '../features/services/authService'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { decodeToken } from '../features/services/tokenService'

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
      const { token } = await mutateAsync({ userName, password })
      // const token = response.token

      // Store the token in local storage
      localStorage.setItem('userToken', token)

      // Decode the token to get the user ID
      const { userId } = decodeToken(token)

      // Store the user ID in local storage
      localStorage.setItem('userId', userId.toString())

      toast.success(`Welcome ${userName}!`)
      navigate('/')
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || 'Login failed.'
      toast.error(errorMessage)
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
