import React, { useState, useEffect } from "react";
import NProgress from "nprogress";
import Home from "components/Home";
import Navbar from "components/Navbar";
import { ClearTopS } from "styled/global";
import { getPostByTag } from "libs/gcms";

export const getStaticProps = async () => {
  const about = (await getPostByTag("about")) || "";
  return {
    props: { about },
  };
};

const HomePage = (props) => {
  const aboutData = props.about;
  useEffect(() => {
    NProgress.inc();
    NProgress.done();
  }, []);

  return (
    <>
      <ClearTopS />
      <Navbar />
      <Home aboutData={aboutData} />
    </>
  );
};

export default HomePage;
