import React from "react";
import { ContainerMenuS, MainMenuS, MenuS } from "styled/menuStyle";
import { Popup } from "libs/popup";

export default function NavigationMenu({ datas }) {
  return (
    <ContainerMenuS>
      <MainMenuS>
        {datas.map((data, i) => {
          return (
            <MenuS key={i}>
              <img src={data.feature_image} alt="💥" onClick={() => Popup()} />
              <h2 onClick={() => Popup()}>{data.title}</h2>
            </MenuS>
          );
        })}
      </MainMenuS>
    </ContainerMenuS>
  );
}
