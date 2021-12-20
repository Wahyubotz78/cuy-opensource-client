import React, { useState, useEffect } from "react";
import NProgress from "nprogress";
import Home from "components/Home";
import Navbar from "components/Navbar";
import { ClearTopS } from "styled/global";

const HomePage = () => {
  useEffect(() => {
    NProgress.inc();
    NProgress.done();
  }, []);
  return (
    <>
      <ClearTopS />
      <Navbar />
      <Home />
    </>
  );
};

export default HomePage;
