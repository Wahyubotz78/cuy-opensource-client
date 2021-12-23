import React, { useEffect } from "react";
import NProgress from "nprogress";
import Home from "components/Home";
import { ClearTopS } from "styled/global";
import { getPostByTag, getPageByTag } from "libs/gcms";

export const getStaticProps = async () => {
  const about = (await getPostByTag("about")) || "";
  const intro = (await getPostByTag("intro")) || "";
  const menu = (await getPageByTag("menu")) || "";

  return {
    props: {
      intro,
      about,
      menu,
    },
  };
};

const HomePage = ({ intro, about, menu }) => {
  useEffect(() => {
    NProgress.inc();
    NProgress.done();
  }, []);

  return (
    <>
      <ClearTopS />
      <Home introData={intro} aboutData={about} menuData={menu} />
    </>
  );
};

export default HomePage;
