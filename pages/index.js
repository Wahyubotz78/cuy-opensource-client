import React, { useState, useEffect } from "react";
import NProgress from "nprogress";
import HomeComponent from "components/Home";
import Navbar from "components/Navbar";

const HomePage = () => {
  useEffect(() => {
    NProgress.inc();
    NProgress.done();
  }, []);
  return (
    <>
      <Navbar />
      <HomeComponent />
    </>
  );
};

export default HomePage;
