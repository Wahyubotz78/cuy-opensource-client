import React, { useState } from "react";

import HomePage from 'components/HomePage'
import Navbar from 'components/Navbar'
const IndexPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar open={open} />
      <HomePage open={open} setOpen={setOpen} />
    </>
  )
}

export default IndexPage
