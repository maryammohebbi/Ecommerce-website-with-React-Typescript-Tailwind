import React from 'react'
interface InutProps {
  type: string
  placeholder: string
}
const InputField: React.FC<InutProps> = ({ type, placeholder }) => {
  return (
    <input className="p-2 rounded-lg" type={type} placeholder={placeholder} />
  )
}

export default InputField
