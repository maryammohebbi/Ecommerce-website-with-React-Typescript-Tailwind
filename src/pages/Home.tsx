import React from 'react'
import Slider from '../features/home/Slider'
import Categories from '../features/home/Categories'

type Props = {}

const Home: React.FC<Props> = ({}) => {
  return (
    <>
      <Slider />
      <Categories />
    </>
  )
}

export default Home
