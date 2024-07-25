import React, { ReactNode, createContext, useContext, useState } from 'react'

interface CartNumber {
  cartNumber: number
  setCartNumber: (total: number) => void
}

const CartNumberContext = createContext<CartNumber | undefined>(undefined)

export const CartNumberProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartNumber, setCartNumber] = useState(0)
  return (
    <CartNumberContext.Provider value={{ cartNumber, setCartNumber }}>
      {children}
    </CartNumberContext.Provider>
  )
}

export const useCartNumber = (): CartNumber => {
  const context = useContext(CartNumberContext)

  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider')
  }

  return context
}
