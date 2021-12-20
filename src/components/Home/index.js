import React from "react";
import { Wrapper, FixGap } from "../../styled/global";
import Intro from "./Intro";
import Menu from "./Menu";
import About from "./About";

const Home = () => {
  return (
    <Wrapper>
      <Intro />
      <Menu />
      <About />
      {/* <FixGap /> */}
    </Wrapper>
  );
};
export default Home;
