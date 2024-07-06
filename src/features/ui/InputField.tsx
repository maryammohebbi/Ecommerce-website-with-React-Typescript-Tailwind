import React from 'react'
import { UseFormRegister } from 'react-hook-form'
interface InputProps {
  type: string
  placeholder: string
  name: string
  register: UseFormRegister<any>
  required?: boolean
}
const InputField: React.FC<InputProps> = ({
  type,
  placeholder,
  register,
  name,
}) => {
  return (
    <input
      className="p-2 rounded-lg"
      {...register(name)}
      type={type}
      placeholder={placeholder}
    />
  )
}

export default InputField
