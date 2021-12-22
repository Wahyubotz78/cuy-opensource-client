import React from "react";
import { WrapperS, TitleS, DescriptionS } from "styled/global";
import Typist from "react-typist";
import { jsonRender } from "libs/jsonRenderer";

export default function Intro({ data }) {
  return (
    <WrapperS>
      <Typist
        cursor={{
          element: "",
        }}
        avgTypingDelay={150}
      >
        <TitleS>{data[0].title}</TitleS>
      </Typist>
      <DescriptionS>
        <div dangerouslySetInnerHTML={jsonRender(data[0].html)}></div>
      </DescriptionS>
    </WrapperS>
  );
}
