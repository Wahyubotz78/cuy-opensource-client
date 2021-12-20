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
            <Image src="/images/pixels/star.png" />
            <ImageTitle>OKE MANTAP SEKALI</ImageTitle>
          </ImageContainer>
        </BoxImage>
        <BoxImage>
          <ImageContainer>
            <Image src="/images/pixels/star.png" />
            <ImageTitle>OKE MANTAP SEKALI</ImageTitle>
          </ImageContainer>
        </BoxImage>
        <BoxImage>
          <ImageContainer>
            <Image src="/images/pixels/star.png" />
            <ImageTitle>OKE MANTAP SEKALI</ImageTitle>
          </ImageContainer>
        </BoxImage>
      </Box>
    </Wrapper>
  );
}
