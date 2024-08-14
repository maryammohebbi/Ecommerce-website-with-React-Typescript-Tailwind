import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'
import { slides } from './data'

type Props = {}

const Slider: React.FC<Props> = ({}) => {
  return (
    <div>
      <div className="w-full h-[calc(100vh-3rem)]">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          navigation
          autoplay
          className="w-full h-full relative"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="">
              <img
                className="w-full h-full object-cover"
                src={slide.imgUrl}
                alt={slide.title}
              />
            </SwiperSlide>
          ))}
          <Link to="/products">
            <button className="p-2 bg-pink-200 z-50 absolute top-0 right-0">
              Go to the shop
            </button>
          </Link>
        </Swiper>
      </div>
    </div>
  )
}

export default Slider
