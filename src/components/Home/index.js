import React from "react";
import { WrapperS, ClearTopS } from "styled/global";
import Intro from "./Intro";
import Menu from "./Menu";
import About from "./About";
import Gallery from "./Gallery";

const Home = ({ introData, aboutData, menuData }) => {
  return (
    <WrapperS>
      <Intro data={introData} />
      <Menu datas={menuData} />
      <About datas={aboutData} />
      <Gallery />
      <ClearTopS />
    </WrapperS>
  );
};
export default Home;
