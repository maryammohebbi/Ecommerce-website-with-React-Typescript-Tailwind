import React, { createContext, useContext, useEffect } from 'react'
import useLocalStorage from '../features/hooks/useLocalStorage'

interface DarkModeContextProps {
  children: React.ReactNode
}
interface DarkModeState {
  isDarkMode: boolean
  setIsDarkMode: (newIsDarkMode: boolean) => void
}

const DarkModeContext = createContext<DarkModeState>({
  isDarkMode: false,
  setIsDarkMode: () => {},
})

export const DarkModeProvider: React.FC<DarkModeContextProps> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage(
    'isDarkMode'
    // window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode')
      document.documentElement.classList.remove('light-mode')
    } else {
      document.documentElement.classList.remove('dark-mode')
      document.documentElement.classList.add('light-mode')
    }
  }, [isDarkMode])

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export function useDarkMode() {
  const context = useContext(DarkModeContext)

  if (context === null) {
    throw new Error('useDarkMode must be used within a DarkModeProvider')
  }

  return context
}
