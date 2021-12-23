import React, { useEffect, useState } from "react";
import { WrapperS } from "styled/global";
import { Title } from "../../styled/carouselStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

const Gallery = () => {
  const [isMobile, setMobile] = useState(false);
  const [getSpaceBetween, setSpaceBetween] = useState(100);

  useEffect(() => {
    setMobile(window.matchMedia("(max-width: 600px)").matches);
    setSpaceBetween(isMobile ? 15 : 100);
  }, [getSpaceBetween, isMobile]);

  return (
    <WrapperS>
      <Title>GALLERY</Title>
      <Swiper
        slidesPerView={3}
        spaceBetween={getSpaceBetween}
        loop={true}
        navigation={true}
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
    </WrapperS>
  );
};

export default Gallery;
