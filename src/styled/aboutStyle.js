import styled from "styled-components";

export const AboutImageBoxS = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: -60px;
`;

export const AboutImageS = styled.img`
  width: 50%;
  height: 50%;
  max-width: 100px;
  max-height: 100px;
`;

export const AboutContainerS = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export const AboutContentS = styled.div`
  color: white;
  font-size: 1.5em;
  h3 {
    text-align: center;
    letter-spacing: 0.15em;
    margin-top: 60px;
  }
  div {
    background: rgba(0, 0, 0, 0.1);
  }
  div > p {
    margin: 10px;
    padding: 10px;
    text-decoration: italic;
    letter-spacing: 0.12em;
    line-height: 1.25;
    font-family: "Arial";
    font-size: 1em;
  }
`;
