import React from "react";
import { WrapperS } from "../../styled/global";
import {
  AboutContainerS,
  AboutContentS,
  AboutImageBoxS,
  AboutImageS,
} from "../../styled/aboutStyle";
import { jsonRender } from "../../libs/jsonRenderer";

export default function About({ data }) {
  return (
    <WrapperS>
      {data.map((about, i) => {
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
                <div dangerouslySetInnerHTML={jsonRender(about.html)}></div>
              </AboutContentS>
            </AboutContainerS>
          </div>
        );
      })}
    </WrapperS>
  );
}
