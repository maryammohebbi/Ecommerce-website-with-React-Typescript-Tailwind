import React from 'react'
import { UseFormRegister, FieldErrors } from 'react-hook-form'

interface InputFieldProps {
  name: string
  label: string
  type: string
  required?: boolean
  register: UseFormRegister<any>
  errors: any
  validationSchema: {
    required: string
    minLength?: {
      value: number
      message: string
    }
    pattern?: {
      value: RegExp
      message: string
    }
  }
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  type,
  register,
  errors,
  validationSchema,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-slate-200 block">{label}</label>
      <input
        className="p-2 border rounded-md text-black"
        type={type}
        {...register(name, validationSchema)}
      />
      {errors[name] && <p className="text-red-600">{errors[name]?.message}</p>}
    </div>
  )
}

export default InputField
