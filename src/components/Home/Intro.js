
import React from "react";
import { Wrapper, Title, Description } from "../../styled/global";
import Typist from "react-typist";

export default function Intro() {
  return (
    <Wrapper>
      <Typist
        cursor={{
          element: "",
        }}
        avgTypingDelay={150}
      >
        <Title>HALO CUY.</Title>
      </Typist>
      <Description>
        Virtualize Your
        <span style={{ color: "orange", fontWeight: "bold" }}> Mind </span>
      </Description>
    </Wrapper>
  );
}
