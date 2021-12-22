import React, { useEffect } from "react";
import NProgress from "nprogress";
import Home from "components/Home";
import Navbar from "components/Navbar";
import { ClearTopS } from "styled/global";
import { getPostByTag, getPageMenu } from "libs/gcms";

export const getStaticProps = async () => {
  const about = (await getPostByTag("about")) || "";
  const intro = (await getPostByTag("intro")) || "";
  const menu = (await getPageMenu()) || "";

  return {
    props: {
      intro,
      about,
      menu,
    },
  };
};

const HomePage = (props) => {
  const { intro, about, menu } = props;
  useEffect(() => {
    NProgress.inc();
    NProgress.done();
  }, []);

  return (
    <>
      <ClearTopS />
      <Navbar />
      <Home introData={intro} aboutData={about} menuData={menu} />
    </>
  );
};

export default HomePage;
