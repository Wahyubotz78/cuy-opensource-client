import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";
import { Wrapper } from "../../styled/global"
import { App, SigninButton, RegisterButton } from "./staticFile"

export default function PlaygroundPage() {
    return (
        <Wrapper>
            <h1>PLAYGROUND</h1>
            <Sandpack template="react"
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
        </Wrapper>
    )
}