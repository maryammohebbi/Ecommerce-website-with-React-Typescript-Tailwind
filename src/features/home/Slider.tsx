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
      <div className="w-full h-[calc(100vh-3rem)] mb-20">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          navigation
          autoplay
          loop={true}
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
            <button className="p-2 bg-slate-500/65 z-50 absolute top-[50%] left-[40%] w-28 h-14 text-sm sm:w-40 sm:h-20 sm:text-lg md:w-96 md:h-28 md:text-4xl font-semibold rounded-lg">
              GO TO THE SHOP
            </button>
          </Link>
        </Swiper>
      </div>
    </div>
  )
}

export default Slider
