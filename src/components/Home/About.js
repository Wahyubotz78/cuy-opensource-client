import React, { useState } from "react";
import { WrapperS } from "styled/global";
import {
  AboutContainerS,
  AboutContentS,
  AboutImageBoxS,
  AboutImageS,
} from "styled/aboutStyle";
import { jsonRender } from "libs/jsonRenderer";
import ReadMore from "components/Helper/ReadMore";

export default function About({ datas }) {
  const defaultTextLength = 300;
  const [isReadMore, setReadMore] = useState(false);
  return (
    <WrapperS>
      {datas.map((about, i) => {
        return (
          <div key={i}>
            <AboutImageBoxS>
              <AboutImageS src={about.feature_image} alt="about cuy universe" />
            </AboutImageBoxS>
            <AboutContainerS>
              <AboutContentS>
                <h3>{about.title}</h3>
              </AboutContentS>
              <AboutContentS>
                <div
                  dangerouslySetInnerHTML={
                    isReadMore
                      ? jsonRender(about.html)
                      : jsonRender(about.html.slice(0, defaultTextLength))
                  }
                />
                <ReadMore isReadMore={isReadMore} setReadMore={setReadMore} />
              </AboutContentS>
            </AboutContainerS>
          </div>
        );
      })}
    </WrapperS>
  );
}
