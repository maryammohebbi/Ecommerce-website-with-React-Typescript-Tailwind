import React from 'react'
// import Menu from '../features/ui/Menu'
import Slider from '../features/home/Slider'
import Categories from '../features/home/Categories'

type Props = {}

const Home: React.FC<Props> = ({}) => {
  return (
    <>
      {/* <Menu /> */}
      <Slider />
      <Categories />
    </>
  )
}

export default Home
