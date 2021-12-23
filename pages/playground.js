import React, { useEffect } from "react";
import PlaygroundComponent from "components/Playground";
import { getSetting } from "libs/gcms";

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
  return <PlaygroundComponent />;
};

export default Playground;
