import React from 'react'
import Menu from './Menu'

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
    </>
  )
}

export default AppLayout
