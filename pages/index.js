import React, { useState, useEffect } from "react";
import NProgress from "nprogress"
import HomePage from 'components/HomePage'
import Navbar from 'components/Navbar'

const IndexPage = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    NProgress.inc();
    NProgress.done();
  }, [open])
  return (
    <>
      <Navbar open={open} />
      <HomePage open={open} setOpen={setOpen} />
    </>
  )
}

export default IndexPage
