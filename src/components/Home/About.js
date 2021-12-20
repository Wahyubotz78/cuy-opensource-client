import React from "react";
import { WrapperS, BoxS } from "../../styled/global";
import {
  ImageContainerS,
  IconTitleS,
  BoxIconS,
  IconS,
} from "../../styled/aboutStyle";

export default function About() {
  return (
    <WrapperS>
      <BoxS>
        <BoxIconS>
          <ImageContainerS>
            <IconS>💪</IconS>
            <IconTitleS>Take Free Courses And Become A Self Learner</IconTitleS>
          </ImageContainerS>
        </BoxIconS>
        <BoxIconS>
          <ImageContainerS>
            <IconS>🚀</IconS>
            <IconTitleS>Achieve your goals and get certified</IconTitleS>
          </ImageContainerS>
        </BoxIconS>
        <BoxIconS>
          <ImageContainerS>
            <IconS>🔖</IconS>
            <IconTitleS>Chill with your friends in this tech vibes</IconTitleS>
          </ImageContainerS>
        </BoxIconS>
      </BoxS>
    </WrapperS>
  );
}
