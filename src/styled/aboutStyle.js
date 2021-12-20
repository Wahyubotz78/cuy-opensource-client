import styled from "styled-components";

export const BoxIconS = styled.div`
  margin: 15px;
  padding: 25px;
  text-align: center;
  :hover {
    div > span {
      transform: rotateZ(360deg);
      transition: 0.2s ease-in-out;
      transition-duration: 0.5s;
    }
  }
`;

export const ImageContainerS = styled.div`
  display: flex;
  flex-direction: column;
  cursor: default;
  text-align: center;
`;

export const IconS = styled.span`
  font-size: 2.5em;
`;

export const IconTitleS = styled.p`
  color: #fff;
  margin-top: 20px;
`;
