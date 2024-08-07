import React from 'react'
import { UseFormRegister } from 'react-hook-form'
interface InputProps {
  type: string
  label: string
  name: string
  register: UseFormRegister<any>
  required?: boolean
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
  errors: any
}
const InputField: React.FC<InputProps> = ({
  type,
  label,
  register,
  name,
  validationSchema,
  errors,
  required,
}) => {
  return (
    <div>
      <label className="text-slate-200 block">
        {label} {required && <span className="text-red-500 text-xl">*</span>}
      </label>
      <input
        className="p-2 rounded-lg w-full text-black"
        {...register(name, validationSchema)}
        type={type}
      />
      {errors && errors[name] && (
        <span className="text-red-400 block text-lg mt-1">
          {errors[name]?.message}
        </span>
      )}
    </div>
  )
}

export default InputField
