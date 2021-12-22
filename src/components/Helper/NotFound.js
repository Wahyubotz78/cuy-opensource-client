import React from "react";
import { TitleS } from "../../styled/global";

export default function NotFoundPage() {
  return (
    <div>
      <TitleS>404 bro sorry</TitleS>
      <div style={{ textAlign: "center", color: "#FFFFFF" }}>
        <p>halaman yang dicari belum kelar 😣</p>
        <a href="/" style={{ color: "white" }}>
          kembali ke awal
        </a>
      </div>
    </div>
  );
}
