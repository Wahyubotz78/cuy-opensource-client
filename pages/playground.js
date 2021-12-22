import React, { useEffect } from "react";
import PlaygroundComponent from "components/Playground";
const Playground = () => {
  useEffect(() => {
    NProgress.inc();
    NProgress.done();
  }, []);
  return <PlaygroundComponent />;
};

export default Playground;
