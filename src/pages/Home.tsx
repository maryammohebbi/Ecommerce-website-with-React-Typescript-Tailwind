import React from 'react'
import Banner from '../features/home/Banner'
import Categories from '../features/home/Categories'
import Brands from '../features/home/Brands'
import letsExplore from '../../public/LET’S EXPLORE UNIQUE CLOTHES..png'
import daghter from '../../public/daghter.png'
import seconddaughter from '../../public/Subject.png'
import payday from '../../public/PAYDAY SALE NOW.png'

type Props = {}

const Home: React.FC<Props> = ({}) => {
  return (
    <>
      <Banner
        borderColor="border-primary-100"
        order="order-0"
        bannerColor="bg-secondary-200"
        image={daghter}
        banner={letsExplore}
        description="Live for Influential and Innovative fashion!"
      />
      <Categories />
      <Brands />
      <Banner
        borderColor="border-seondary-0"
        order="order-1"
        bannerColor="bg-primary-100"
        image={seconddaughter}
        banner={payday}
        description="Spend minimal $100 get 30% off
        voucher code for your next purchase"
      />
    </>
  )
}

export default Home
