// import React from 'react';
// import SwiperCore from 'swiper/core';
// import { Navigation } from 'swiper/modules'
// import { Swiper, SwiperSlide } from 'swiper/react';

import { Link } from "react-router-dom";

// SwiperCore.use([Navigation]);

type Props = {};

function Slider({}: Props) {
  return (
    <div>
      {/* <Swiper navigation={true}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper> */}
      <div className="w-full h-[calc(100vh-3rem)] bg-green-300">
          <Link to="products">
            <button className="p-2 bg-pink-200">
              Go to the shop
            </button>
          </Link>
      </div>
    </div>
  );
}

export default Slider;