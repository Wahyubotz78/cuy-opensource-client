import React, { useEffect } from "react";
import NProgress from "nprogress";
import Home from "components/Home";
import Navbar from "components/Navbar";
import { ClearTopS } from "styled/global";
import { getPostByTag, getPageByTag, getSetting } from "libs/gcms";

export const getStaticProps = async () => {
  const about = (await getPostByTag("about")) || "";
  const intro = (await getPostByTag("intro")) || "";
  const menu = (await getPageByTag("menu")) || "";
  const { navigation } = (await getSetting()) || "";

  return {
    props: {
      intro,
      about,
      menu,
      navigation,
    },
  };
};

const HomePage = ({ intro, about, menu, navigation }) => {
  useEffect(() => {
    NProgress.inc();
    NProgress.done();
  }, []);

  return (
    <>
      <ClearTopS />
      <Navbar navigationData={navigation} />
      <Home introData={intro} aboutData={about} menuData={menu} />
    </>
  );
};

export default HomePage;
