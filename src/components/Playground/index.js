import React, { useState } from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { WrapperS, ClearTopMobileS } from "../../styled/global";
import { Group, Span1, Item } from "../../styled/playgroundStyle";
import { App, SigninButton, RegisterButton, AppReactTs } from "./staticFile";
import { FaReact, FaAngular, FaVuejs, FaJsSquare } from "react-icons/fa";

import "@codesandbox/sandpack-react/dist/index.css";

const Playground = (props) => {
  const [getTemplate, setTemplate] = useState("");
  const [showSandbox, setShowSandbox] = useState(false);
  const [getFiles, setFiles] = useState({});
  const [getPath, setPath] = useState([]);
  const [activePath, setActivePath] = useState("");

  const listFramework = [
    "React",
    "React Ts",
    "Angular",
    "Vue",
    "Vue3",
    "Vanilla",
    "Vanilla Ts",
  ];

  const filesStatic = {
    react: {
      "/App.js": App,
      "/RegisterButton.js": RegisterButton,
      "/SigninButton.js": SigninButton,
    },
    reactts: {
      "/src/App.tsx": AppReactTs,
    },
  };

  const handleClick = (e) => {
    let template = e.target.innerText.toLowerCase().replace(/ /g, "-");
    let files = filesStatic[template.replace(/-/g, "")];
    let openPath = Object.keys(files);
    let activePath = openPath[0];

    setTemplate(template);
    setShowSandbox(!showSandbox);
    setFiles(files);
    setPath(openPath);
    setActivePath(activePath);
  };

  return (
    <WrapperS>
      {!props.dashboard && (
        <ClearTopMobileS>
          <h1
            style={{
              marginTop: "-3px",
              textAlign: "center",
              letterSpacing: "5px",
            }}
          >
            <a
              href="/playground"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              PLAYGROUND
            </a>
          </h1>
        </ClearTopMobileS>
      )}
      <Group style={{ display: showSandbox ? "none" : "" }}>
        {listFramework.map((fm, i) => {
          return (
            <Span1 key={i}>
              <Item onClick={handleClick}>
                {fm.includes("React") ? (
                  <FaReact />
                ) : fm.includes("Angular") ? (
                  <FaAngular />
                ) : fm.includes("Vue") ? (
                  <FaVuejs />
                ) : (
                  <FaJsSquare />
                )}
                {fm}
              </Item>
            </Span1>
          );
        })}
      </Group>
      {showSandbox && (
        <Sandpack
          template={getTemplate}
          files={getFiles}
          theme="monokai-pro"
          options={{
            openPaths: getPath,
            activePath: activePath,
            showNavigator: true,
          }}
        />
      )}
    </WrapperS>
  );
};

export default Playground;
