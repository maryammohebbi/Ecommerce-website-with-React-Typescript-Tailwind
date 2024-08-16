import React from 'react'
import { logos } from './data'
import Title from '../ui/Title'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'

const Brands: React.FC = () => {
  return (
    <div className="container mb-36">
      <Title title="Brands" />
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={5}
        spaceBetween={30}
        navigation
        autoplay
        className="w-full h-36 cursor-pointer"
      >
        {logos.map((logo) => (
          <SwiperSlide
            key={logo.id}
            className="flex items-center justify-center w-12 h-full p-4 border-2 border-slate-400 bg-secondaryBg rounded-md shadow-2xl"
          >
            <img
              src={logo.imgUrl}
              alt={logo.title}
              className="h-full w-full object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Brands
