import React, { useState, useEffect } from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";
import { WrapperS } from "../../styled/global";
import { App, SigninButton, RegisterButton } from "./staticFile";

export default function Playground(props) {
  return (
    <WrapperS>
      {props.dashboard ? null : (
        <>
          <h1 style={{ marginTop: -3, textAlign: "center" }}>
            <a
              href="/playground"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              PLAYGROUND
            </a>
          </h1>
        </>
      )}
      <div id={9507}>
        <Sandpack
          template="react"
          files={{
            "/RegisterButton.js": RegisterButton,
            "/SigninButton.js": SigninButton,
            "/App.js": App,
          }}
          theme="monokai-pro"
          options={{
            openPaths: ["/App.js", "/SigninButton.js", "/RegisterButton.js"],
            activePath: "/App.js",
            showNavigator: true,
          }}
        />
      </div>
    </WrapperS>
  );
}
