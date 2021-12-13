import React, { useState } from "react";

import PlaygroundPage from 'components/PlaygroundPage'
const Playground = () => {
  const [open, setOpen] = useState(false);
  return (
    <PlaygroundPage/>
  )
}

export default Playground
