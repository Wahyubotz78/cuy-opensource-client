import React from "react";
import {
  StyledMenu
} from "../styled/navStyle";

export default function Navbar({ open }) {
  return (
    <StyledMenu open={open}>
      <a href="/playground">
        playground
      </a>
      <a href="#" as="button" id="join">
        masuk
      </a>
    </StyledMenu>
  );
}
