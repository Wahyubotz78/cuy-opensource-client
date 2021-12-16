import styled from "styled-components";

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  padding: 1em;
  height: 100vh;
  @media (max-width: 576px) {
    }
`;

export const Title = styled.h1`
  color: #000;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 70px;
  margin-bottom: 50px;
  @media (max-width: 576px) {
    font-size: 2rem;
    margin-top: 50px;
  }
`
export const CardContent = styled.div`
  background: papayawhip;
  display: flex;
  justify-content: center;
  justify-items: center;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  max-width: 100%;
  padding: 0.5em 0;
  margin: 20px auto;
  overflow: hidden;
  @media (max-width: 576px) {
    max-width: 100%;
  }
`;

export const CardContentDisabled = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  background: #f7f7f7;
  cursor: not-allowed;
  border-radius: 10px;
  display: flex;
  max-width: 100%;
  padding: 0.5em 0;
  margin: 20px auto;
  overflow: hidden;
  @media (max-width: 576px) {
    max-width: 100%;
  }
`;

export const CH6 = styled.h6`
  opacity: 0.6;
  margin: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
export const CH3 = styled.h3`
  letter-spacing: 1px;
  margin: 10px 0;
`;

export const CardPrev = styled.div`
  background-color: orange;
  color: #222;
  padding: 30px;
  max-width: 250px;
  @media (max-width: 576px) {
    max-width: 150px;
    padding: 10px;
  }
`;

export const CardInfo = styled.div`
  padding: 30px;
  position: relative;
  width: 100%;
  @media (max-width: 576px) {
    padding: 10px;
  }
`;

export const ButtonCard = styled.a`
  background-color: orange;
  border: 0;
  border-radius: 50px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  color: #000;
  font-size: 16px;
  padding: 12px 25px;
  cursor: pointer;
  text-decoration: none;
  position: absolute;
  bottom: 15px;
  right: 9px;
  letter-spacing: 1px;
  &:hover {
        box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
        transform: translate(0, -1px);
    }
  @media (max-width: 576px) {
    padding: 7px 16px;
    bottom: 10px;
    right: 10px;
  }
`;

export const ButtonCardDisabled = styled.a`
  background-color: #555;
  border: 0;
  border-radius: 50px;
  color: #fff;
  font-size: 16px;
  padding: 12px 25px;
  text-decoration: none;
  position: absolute;
  bottom: 15px;
  right: 9px;
  letter-spacing: 1px;
  @media (max-width: 576px) {
    padding: 7px 16px;
    bottom: 10px;
    right: 10px;
  }
`;