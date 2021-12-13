import React, { useEffect } from "react";
import { Wrapper } from "../../styled/global"
import Intro from "./Intro"
import Join from "./Join"

export default function HomePage({ open, setOpen }) {
    return (
        <Wrapper>
            <Intro />
            <Join open={open} setOpen={setOpen} />
        </Wrapper>
    )
}