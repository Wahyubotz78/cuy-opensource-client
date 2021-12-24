import React, { useEffect, useState } from "react";
import { WrapperS } from "styled/global";
import {
  Title,
  ImgSlide,
  Modal,
  CloseButton,
  ModalContent,
  Caption,
} from "../../styled/carouselStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

const Gallery = () => {
  const [isMobile, setMobile] = useState(false);
  const [getSpaceBetween, setSpaceBetween] = useState(100);
  const [modalOpen, setModalOpen] = useState(false);
  const [srcImg, setSrcImg] = useState("");
  const [altImg, setAltImg] = useState("");

  useEffect(() => {
    setMobile(window.matchMedia("(max-width: 600px)").matches);
    setSpaceBetween(isMobile ? 15 : 100);
  }, [getSpaceBetween, isMobile]);

  const handleOnClick = (e) => {
    setModalOpen(!modalOpen);
    let src = e.target.getAttribute("src");
    let alt = e.target.getAttribute("alt");
    setSrcImg(src);
    setAltImg(alt);
  };

  return (
    <>
      <WrapperS>
        <Title>showcase challange</Title>
        <Swiper
          slidesPerView={3}
          spaceBetween={getSpaceBetween}
          loop={true}
          navigation={true}
        >
          <SwiperSlide>
            <ImgSlide
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="image example 1"
              onClick={handleOnClick}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ImgSlide
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              alt="image example 2"
              onClick={handleOnClick}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ImgSlide
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              alt="image example 3"
              onClick={handleOnClick}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ImgSlide
              src="https://swiperjs.com/demos/images/nature-4.jpg"
              alt="image example 4"
              onClick={handleOnClick}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ImgSlide
              src="https://swiperjs.com/demos/images/nature-5.jpg"
              alt="image example 5"
              onClick={handleOnClick}
            />
          </SwiperSlide>
        </Swiper>
      </WrapperS>
      <Modal style={{ display: modalOpen ? "block" : "none" }}>
        <CloseButton onClick={() => setModalOpen(!modalOpen)}>
          &times;
        </CloseButton>
        <ModalContent src={srcImg} />
        <Caption>{altImg}</Caption>
      </Modal>
    </>
  );
};

export default Gallery;
