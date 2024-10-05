import React from 'react'
import Menu from './Menu'
import Footer from './Footer'
import useScroll from '../hooks/useScroll'
import VerticalNav from './VerticalNav'

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { scrollBoolean } = useScroll(100)

  return (
    <>
    <Menu /> 
      {scrollBoolean ?  <VerticalNav /> : null}
      {children}
      <Footer />
    </>
  )
}

export default AppLayout
