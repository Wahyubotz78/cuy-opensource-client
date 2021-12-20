import React from "react";
import { WrapperS, ClearTopS } from "../../styled/global";
import Intro from "./Intro";
import Menu from "./Menu";
import About from "./About";

const Home = () => {
  return (
    <WrapperS>
      <Intro />
      <Menu />
      <About />
      <ClearTopS />
    </WrapperS>
  );
};
export default Home;
