import React from "react";
import { WrapperS, FixGapS } from "../../styled/global";
import Intro from "./Intro";
import Menu from "./Menu";
import About from "./About";

const Home = () => {
  return (
    <WrapperS>
      <Intro />
      <Menu />
      <About />
      <FixGapS />
    </WrapperS>
  );
};
export default Home;
