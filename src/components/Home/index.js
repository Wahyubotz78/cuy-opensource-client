import React from "react";
import { WrapperS, ClearTopS } from "../../styled/global";
import Intro from "./Intro";
import Menu from "./Menu";
import About from "./About";

const Home = ({aboutData}) => {
  return (
    <WrapperS>
      <Intro />
      <Menu />
      <About data={aboutData}/>
      <ClearTopS />
    </WrapperS>
  );
};
export default Home;
