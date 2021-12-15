import React from 'react';
import { Title, Description } from "../../styled/global"
import Typist from 'react-typist';

export default function Intro() {
    return (
        <div>
            <Typist cursor={{
                element: '',
            }} avgTypingDelay={400}>
                <Title>
                    CUY.
                </Title>
            </Typist>
            <Description>
                jalan pintas belajar <span style={{ color: "orange", fontWeight: "bold" }}>coding</span>
                <p style={{ color: "white", textAlign: "center", fontSize: 12 }}>v1.0.0 - development mode</p>
            </Description>
        </div>
    )
}