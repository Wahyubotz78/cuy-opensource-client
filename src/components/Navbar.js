import React from "react";
import {
  StyledMenu
} from "../styled/navStyle";

export default function Navbar({ open }) {
  return (
    <StyledMenu open={open}>
      <div style={{ marginTop: 10 }}>
        <a href="/course">
          course
        </a>
        <a href="/playground">
          playground
        </a>
      </div>
      <div id="join">
        <a href="#" as="button">
          devMode
        </a>
      </div>
    </StyledMenu >
  );
}
