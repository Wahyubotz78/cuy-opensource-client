import React, { useEffect } from "react";
import { Wrapper } from "../../styled/global";
import Intro from "./Intro";
import Menu from "./Menu";

export default function HomePage() {
  return (
    <Wrapper>
      <Intro />
      <Menu />
    </Wrapper>
  );
}
