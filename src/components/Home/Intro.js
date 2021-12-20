import React from "react";
import { WrapperS, TitleS, DescriptionS } from "../../styled/global";
import Typist from "react-typist";

export default function Intro() {
  return (
    <WrapperS>
      <Typist
        cursor={{
          element: "",
        }}
        avgTypingDelay={150}
      >
        <TitleS>HALO CUY.</TitleS>
      </Typist>
      <DescriptionS>
        Virtualize Your
        <span style={{ color: "orange", fontWeight: "bold" }}> Mind </span>
      </DescriptionS>
    </WrapperS>
  );
}
