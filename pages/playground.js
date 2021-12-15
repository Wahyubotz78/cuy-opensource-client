import React, { useEffect } from "react";
import PlaygroundPage from 'components/PlaygroundPage'
const Playground = () => {
  useEffect(() => {
    NProgress.inc();
    NProgress.done();
  }, [])
  return (
    <PlaygroundPage />
  )
}

export default Playground
