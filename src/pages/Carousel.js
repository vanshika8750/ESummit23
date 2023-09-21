import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../css/Carousel.css';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import punit from '../images/Punit.png';
import shwetansh from "../images/Shwetansh.jpg";
import mayank from "../images/Mayank.jpg";
import gopal from "../images/Gopal.jpg";
import sahil from "../images/Sahil.jpg";
import sohail from "../images/Sohail.jpg";
import tejas from "../images/Tejas.jpg";
import yash from "../images/Yash.jpg";
import shubhangi from "../images/Shubhangi.jpg";
import nitin from "../images/Nitin.jpg";
import akshita from "../images/Akshita.jpg";
import ankita from "../images/Ankita.jpg";
import samridh from "../images/Samridh.jpg";

const Carousel = () => {
  return (
    <div className='container' id='team'>
        <h1 className='heading my-[10px] mt-20'>Team</h1>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
        <img src={punit} alt='slide_image'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={shwetansh} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mayank} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gopal} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sohail} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sahil} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tejas} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={yash} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ankita} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={akshita} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nitin} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={shubhangi} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={samridh} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )
}

export default Carousel