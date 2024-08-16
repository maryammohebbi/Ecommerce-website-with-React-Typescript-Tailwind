import React from 'react'
import Menu from './Menu'
import Footer from './Footer'

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  )
}

export default AppLayout
