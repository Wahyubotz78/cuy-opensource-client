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
              <AboutImageS src={about.feature_image} />
            </AboutImageBoxS>
            <AboutContainerS>
              <AboutContentS>
                <h1>{about.title}</h1>
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
