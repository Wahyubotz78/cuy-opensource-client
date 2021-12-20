import React from "react";
import { Wrapper } from "../../styled/global";
import Intro from "./Intro";
import Menu from "./Menu";
import About from "./About";

export default function Home() {
  return (
    <Wrapper>
      <Intro />
      <Menu />
      <About />
    </Wrapper>
  );
}
