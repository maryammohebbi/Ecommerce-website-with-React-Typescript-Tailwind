// import React from 'react'
import CategoryContainer from '../features/categories/CategoryContainer'
import Menu from '../features/ui/Menu'
import Slider from '../features/home/Slider'

type Props = {}

function Home({}: Props) {
  return (
    <>
        <Menu/>
        <Slider/>
        <CategoryContainer/>
    </>
  )
}

export default Home