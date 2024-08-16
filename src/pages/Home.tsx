import React from 'react'
import Slider from '../features/home/Slider'
import Categories from '../features/home/Categories'
import Brands from '../features/home/Brands'
import Services from '../features/home/Services'

type Props = {}

const Home: React.FC<Props> = ({}) => {
  return (
    <>
      <Slider />
      <Categories />
      <Brands />
      <Services />
    </>
  )
}

export default Home
