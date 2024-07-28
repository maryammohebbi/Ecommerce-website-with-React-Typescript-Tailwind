import React from 'react'
import InputField from '../features/ui/InputField'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { signUpUserApi } from '../features/services/authService'

interface SingUpUser {
  email: string
  userName: string
  password: string
  phone: string
}

const SignUp: React.FC = ({}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SingUpUser>()

  const navigate = useNavigate()

  const { mutate: signup, isPending: isSigningUp } = useMutation({
    mutationFn: signUpUserApi,
  })

  const onSubmitSignup = (data: SingUpUser) => {
    try {
      signup(data)
      toast.success(`Welcome ${data.userName}`)
      navigate('/')
    } catch (error) {
      toast.error('Singup failed, please try again.')
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmitSignup)}
        className="flex flex-col gap-y-8"
      >
        <InputField
          type="text"
          label="EMAIL"
          required
          register={register}
          errors={errors}
          name="email"
          validationSchema={{
            required: 'Email is necessary',
            minLength: {
              value: 5,
              message: 'Email must be at least 5 characters',
            },
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: 'Email is not valid',
            },
          }}
        />
        <InputField
          type="text"
          label="USERNAME"
          required
          register={register}
          errors={errors}
          name="userName"
          validationSchema={{
            required: 'username is necessary',
            minLength: {
              value: 5,
              message: 'Username must be at least 5 characters',
            },
          }}
        />
        <InputField
          type="password"
          label="PASSWORD"
          required
          register={register}
          errors={errors}
          name="password"
          validationSchema={{
            required: 'Password is necessary',
            minLength: {
              value: 5,
              message: 'Password must be at least 5 characters',
            },
          }}
        />
        <InputField
          type="number"
          label="PHONE NUMBER"
          required
          register={register}
          errors={errors}
          name="phone"
          validationSchema={{
            required: 'Phone number is necessary',
            minLength: {
              value: 9,
              message: 'Phone number must be at least 9 characters',
            },
          }}
        />
        <button className="p-2 bg-green-300 rounded-lg text-lg font-semibold">
          {isSigningUp ? 'Please wait...' : 'SignUp'}
        </button>
      </form>
    </div>
  )
}

export default SignUp
