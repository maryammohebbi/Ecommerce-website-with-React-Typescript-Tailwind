import React from 'react'
import InputField from '../features/ui/InputField'
import { useForm } from 'react-hook-form'

const SignUp: React.FC = ({}) => {
  const {
    register,
    formState: { errors },
  } = useForm()
  return (
    <div className="">
      <form className="flex flex-col gap-y-8">
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
          name="phoneNumber"
          validationSchema={{
            required: 'Phone number is necessary',
            minLength: {
              value: 9,
              message: 'Phone number must be at least 9 characters',
            },
          }}
        />
        <button className="p-2 bg-green-300 rounded-lg text-lg font-semibold">
          SignUp
        </button>
      </form>
    </div>
  )
}

export default SignUp
