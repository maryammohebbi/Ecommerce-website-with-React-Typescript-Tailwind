import React from 'react'
interface InutProps {
  type: string
  placeholder: string
}
const InputField: React.FC<InutProps> = ({ type, placeholder, register, name }) => {
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
