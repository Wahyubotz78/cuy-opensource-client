import React from "react";
import { ContainerMenu, MainMenu, Menu } from "../../styled/menuStyle";
import { Popup } from "../../libs/popup";
export default function NavigationMenu() {
  return (
    <ContainerMenu>
      <MainMenu>
        <Menu>
          <img
            src="/images/pixels/heart.png"
            alt="💥"
            onClick={() => Popup()}
          />
          <h2 onClick={() => Popup()}>start</h2>
        </Menu>
        <Menu>
          <img src="/images/pixels/chat.png" alt="💥" onClick={() => Popup()} />
          <h2 onClick={() => Popup()}>discuss</h2>
        </Menu>
        <Menu>
          <img src="/images/pixels/star.png" alt="💥" onClick={() => Popup()} />
          <h2 onClick={() => Popup()}>collect</h2>
        </Menu>
        <Menu>
          <img
            src="/images/pixels/trophy.png"
            alt="💥"
            onClick={() => Popup()}
          />
          <h2 onClick={() => Popup()}>ranked</h2>
        </Menu>
      </MainMenu>
    </ContainerMenu>
  );
}
