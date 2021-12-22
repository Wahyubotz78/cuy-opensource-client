import React from "react";
import {
  NavContainer,
  NavGroup,
  NavGroupRight,
  NavLink,
} from "../styled/navStyle";

export default function Navbar() {
  return (
    <NavContainer>
      <NavGroup>
        <NavLink>
          <a href="/" className="active">
            home
          </a>
        </NavLink>
        <NavLink>
          <a href="/forum">forum</a>
        </NavLink>
        <NavLink>
          <a href="/playground">playground</a>
        </NavLink>
        <NavLink>
          <a href="/laederboard">ranking</a>
        </NavLink>
      </NavGroup>
      <NavGroupRight>
        <NavLink>
          <a href="/course">course</a>
        </NavLink>
        <NavLink>
          <a href="/dashboard">dashboard</a>
        </NavLink>
      </NavGroupRight>
    </NavContainer>
  );
}
