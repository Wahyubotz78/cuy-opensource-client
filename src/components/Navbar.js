import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "../styled/navStyle";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <Nav>
        <Bars />
        <NavMenu>
          <Link href="/">
            <NavLink>Home</NavLink>
          </Link>
          <Link href="/forum">
            <NavLink>Forum</NavLink>
          </Link>
          <Link href="/playground">
            <NavLink>Playground</NavLink>
          </Link>
          <Link href="/feature">
            <NavLink>Featured</NavLink>
          </Link>
          <Link href="/pricing">
            <NavLink>Pricing</NavLink>
          </Link>
        </NavMenu>
        <NavBtn>
          <Link href="/signin">
            <NavBtnLink>Sign In</NavBtnLink>
          </Link>
        </NavBtn>
      </Nav>
    </div>
  );
}
