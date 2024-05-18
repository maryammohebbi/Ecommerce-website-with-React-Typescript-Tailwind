// import React from 'react'
import CategoryContainer from '../categories/CategoryContainer'
import Menu from '../ui/Menu'
import Slider from './Slider'

type Props = {}

function Home({}: Props) {
  return (
    <div>
        <Menu/>
        <Slider/>
        <CategoryContainer/>
    </div>
  )
}

export default Home