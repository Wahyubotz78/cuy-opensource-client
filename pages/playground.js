import React, { useEffect } from "react";
// import PlaygroundComponent from "components/Playground";
import { PlaygroundLazy } from "../src/components/LazyComponents";
import { getSetting } from "../src/libs/gcms";

export const getStaticProps = async () => {
  const { navigation } = (await getSetting()) || "";

  return {
    props: {
      navigation,
    },
  };
};

const Playground = () => {
  useEffect(() => {
    NProgress.inc();
    NProgress.done();
  }, []);
  return <PlaygroundLazy />;
};

export default Playground;
