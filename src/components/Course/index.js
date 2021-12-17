import React from "react";
import {
  Wrapper,
  Title,
  CardContent,
  CH6,
  CH61,
  CH3,
  CH31,
  CardPrev,
  CardInfo,
  ButtonCard,
  CardInfoDisabled,
  CardContentDisabled,
  ButtonCardDisabled,
} from "../../styled/courseStyle";
import NavbarBack from "../NavbarBack";
import GoToHome from "../GoToHome";

export default function Course() {
  return (
    <Wrapper>
      <NavbarBack />
      <Title style={{marginTop: -1, marginLeft: 25}}>COURSE TERSEDIA</Title>
      <CardContent style={{marginTop: -20}}>
        <CardPrev>
          <CH6>Course</CH6>
          <CH31>Frontend Basic</CH31>
          <div
            style={{ textAlign: "#222", marginTop: 15, cursor: "pointer" }}
          >
            <a
              href="/course/journey-1/demo"
              style={{ color: "#222", fontSize: 12 }}
            >
              TRY LIVE DEMO
            </a>
          </div>
        </CardPrev>
        <CardInfo>
          <CH6>Journey #1 (18 - 19 /12/2021)</CH6>
          <CH31>Static Web Penjualan & Linking Chat WA</CH31>
          <ButtonCard as="a" href="/course/journey-1">
            JOIN
          </ButtonCard>
        </CardInfo>
      </CardContent>
      <CardContentDisabled>
        <CardPrev style={{ background: "#999" }}>
          <CH6>Course</CH6>
          <CH31>FrontEnd Basic</CH31>
        </CardPrev>
        <CardInfoDisabled>
          <CH6>Journey #2</CH6>
          <CH31>Mastering CSS</CH31>
          <ButtonCardDisabled>🔓</ButtonCardDisabled>
        </CardInfoDisabled>
      </CardContentDisabled>
      <CardContentDisabled>
        <CardPrev style={{ background: "#999" }}>
          <CH6>Course</CH6>
          <CH31>Frontend Basic</CH31>
        </CardPrev>
        <CardInfoDisabled>
          <CH3>Journey #3</CH3>
          <CH31>Vanilla JS Fundamental</CH31>
          <ButtonCardDisabled>🔓</ButtonCardDisabled>
        </CardInfoDisabled>
      </CardContentDisabled>
      <GoToHome />
    </Wrapper>
  );
}
