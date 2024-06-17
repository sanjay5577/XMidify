import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './swiper.css';

import grouppic1 from "../assets/Group 10.png";
import grouppic2 from "../assets/Group 11.png";
import grouppic3 from "../assets/Group 12.png";

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img  src={grouppic1} alt="doctorgroup1" /></SwiperSlide>
        <SwiperSlide><img  src={grouppic2} alt="doctorgroup2" /></SwiperSlide>
        <SwiperSlide><img  src={grouppic3} alt="doctorgroup3" /></SwiperSlide>
        <SwiperSlide><img  src={grouppic1} alt="doctorgroup1" /></SwiperSlide>
        <SwiperSlide><img  src={grouppic2} alt="doctorgroup2" /></SwiperSlide>
      </Swiper>
    </>
  );
}
