import React from "react";
import { ContainerMenu, MainMenu, Menu } from "../../styled/menuStyle";
import { Popup } from "../Helper/popup";
export default function NavigationMenu() {
  return (
    <ContainerMenu>
      <MainMenu>
        <Menu as="a" href="/course">
          <h2>COURSE</h2>
        </Menu>
        <Menu as="a" href="/playground">
          <h2>PLAYGROUND</h2>
        </Menu>
        <Menu as="button" onClick={() => Popup()}>
          <h2>TESTIMONIAL</h2>
        </Menu>
        <Menu as="button" onClick={() => Popup()}>
          <h2>DASHBOARD</h2>
        </Menu>
      </MainMenu>
    </ContainerMenu>
  );
}
