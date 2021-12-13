import React from "react";
import { Title } from "../styled/global"

export default function NotFoundPage() {
    return (
        <div>
            <Title>
                404 bro sorry
            </Title>
            <div style={{ textAlign: 'center', color: "#FFFFFF" }}>

                <p>halaman yang dicari belum kelar 😣</p>
                <a href="/" style={{ color: "white" }}>
                    kembali ke awal
                </a>
            </div>
        </div>
    );
}
