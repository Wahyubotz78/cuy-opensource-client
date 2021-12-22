import React, { useEffect } from "react";
import NProgress from "nprogress";
import Home from "components/Home";
import Navbar from "components/Navbar";
import { ClearTopS } from "styled/global";
import { getPostByTag } from "libs/gcms";

export const getStaticProps = async () => {
  const about = (await getPostByTag("about")) || "";
  const intro = (await getPostByTag("intro")) || "";

  return {
    props: {
      intro,
      about,
    },
  };
};

const HomePage = (props) => {
  const { intro, about } = props;
  useEffect(() => {
    NProgress.inc();
    NProgress.done();
  }, []);

  return (
    <>
      <ClearTopS />
      <Navbar />
      <Home introData={intro} aboutData={about} />
    </>
  );
};

export default HomePage;
