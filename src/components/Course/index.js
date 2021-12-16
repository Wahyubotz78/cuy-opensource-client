import React from "react";
import {
  Wrapper,
  Title,
  CardContent,
  CH6,
  CH3,
  CardPrev,
  CardInfo,
  ButtonCard,
  CardContentDisabled,
  ButtonCardDisabled,
} from "../../styled/courseStyle";
import NavbarBack from "../NavbarBack";
import GoToHome from "../GoToHome";

export default function Course() {
  return (
    <Wrapper>
      <NavbarBack />
      <Title>COURSE TERSEDIA</Title>
      <CardContent>
        <CardPrev>
          <CH6>Course</CH6>
          <CH3>Frontend Basic</CH3>
          <div style={{textAlign: 'center', marginTop: 15, cursor: 'pointer'}}>
            <a href="/course/journey-1/demo" style={{textDecoration: 'none', color: 'white', fontWeight: 'bold'}}>TRY LIVE DEMO</a>
          </div>
        </CardPrev>
        <CardInfo>
          <h6>Journey #1 (18 - 19 Desember 2021)</h6>
          <h3>Static Web Penjualan & Linking Chat WA</h3>
          <ButtonCard as="a" href="/course/journey-1">
            JOIN
          </ButtonCard>
        </CardInfo>
      </CardContent>
      <CardContentDisabled>
        <CardPrev>
          <CH6>Course</CH6>
          <CH3>FrontEnd Basic</CH3>
        </CardPrev>
        <CardInfo>
          <h6>Journey #2 (23 Desember 2021)</h6>
          <h2>Mastering CSS Style</h2>
          <ButtonCardDisabled>🔓</ButtonCardDisabled>
        </CardInfo>
      </CardContentDisabled>
      <CardContentDisabled>
        <CardPrev>
          <CH6>Course</CH6>
          <CH3>Frontend Basic</CH3>
        </CardPrev>
        <CardInfo>
          <h6>Journey #3 (26 Desember 2021)</h6>
          <h2>Vanilla JS Fundamental</h2>
          <ButtonCardDisabled>🔓</ButtonCardDisabled>
        </CardInfo>
      </CardContentDisabled>
      <GoToHome />
    </Wrapper>
  );
}
