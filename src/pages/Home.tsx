// import React from 'react'
import Menu from '../features/ui/Menu'
import Slider from '../features/home/Slider'
import Categories from '../features/home/Categories'

type Props = {}

function Home({}: Props) {
  return (
    <>
        <Menu/>
        <Slider/>
        <Categories/>
    </>
  )
}

export default Home