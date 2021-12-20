import React from "react";
import { ContainerMenu, MainMenu, Menu } from "../../styled/menuStyle";
import { Popup } from "../../libs/popup";
export default function NavigationMenu() {
  return (
    <ContainerMenu>
      <MainMenu>
        <Menu onClick={() => Popup()}>
          <img src="/images/pixels/heart.png" alt="💥" />
          <h2>start</h2>
        </Menu>
        <Menu onClick={() => Popup()}>
          <img src="/images/pixels/chat.png" alt="💥" />
          <h2>discuss</h2>
        </Menu>
        <Menu onClick={() => Popup()}>
          <img src="/images/pixels/star.png" alt="💥" />
          <h2>collect</h2>
        </Menu>
        <Menu onClick={() => Popup()}>
          <img src="/images/pixels/trophy.png" alt="💥" />
          <h2>ranked</h2>
        </Menu>
      </MainMenu>
    </ContainerMenu>
  );
}
