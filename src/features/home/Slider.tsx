// import React from 'react';
import SwiperCore from 'swiper/core';
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation]);

type Props = {};

function Slider({}: Props) {
  return (
    <div>
      <Swiper navigation={true}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;