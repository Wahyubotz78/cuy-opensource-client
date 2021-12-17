import React, { useState, useEffect } from "react";
import NProgress from "nprogress";
import HomePage from "components/HomePage";

const IndexPage = () => {
  useEffect(() => {
    NProgress.inc();
    NProgress.done();
  }, []);
  return (
    <>
      <HomePage />
    </>
  );
};

export default IndexPage;
