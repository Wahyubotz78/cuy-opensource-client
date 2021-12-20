import React from "react";
import { Wrapper } from "../../styled/global";
import {
  ImageContainer,
  ImageTitle,
  Box,
  BoxImage,
  Image,
} from "../../styled/aboutStyle";

export default function About() {
  return (
    <Wrapper>
      <Box>
        <BoxImage>
          <ImageContainer>
            <Image src="/images/about1.jpg" />
            <ImageTitle>Take Free Courses And Become A Self Learner</ImageTitle>
          </ImageContainer>
        </BoxImage>
        <BoxImage>
          <ImageContainer>
            <Image src="/images/about2.jpg" />
            <ImageTitle>Achieve your goals and get certified</ImageTitle>
          </ImageContainer>
        </BoxImage>
        <BoxImage>
          <ImageContainer>
            <Image src="/images/about3.jpg" />
            <ImageTitle>Chill with your friends in this tech vibes</ImageTitle>
          </ImageContainer>
        </BoxImage>
      </Box>
    </Wrapper>
  );
}
