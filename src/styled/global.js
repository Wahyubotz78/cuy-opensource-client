import styled from "styled-components";

export const WrapperS = styled.div`
  padding: 15px;
  margin: 15px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 5px;
    margin: 5px;
  }
`;

export const ReadMoreS = styled.div`
  letter-spacing: 1px;
  font-weight: 400;
  color: azure;
  float: right;
  cursor: pointer;
  font-size: 16px;
  padding: 10px;
`;

export const HtmlBoxS = styled.div`
  display: inline-block;
  width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
`;

export const BoxS = styled.div`
  display: flex;
  background-color: #222;
  opacity: 0.9;
  height: auto;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const TitleS = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 110px;
  color: #f7f7f7;
  text-shadow: -10px -2px; #FFF;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  margin-bottom: 100px;
  background-image: url("/images/mainbg.png");
  background-size: cover;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  @media screen and (max-width: 768px) {
    font-size: 45px;
    margin-bottom: 40px;
  }
`;

export const DescriptionS = styled.div`
  text-transform: lowercase;
  font-size: 2.9em;
  text-align: center;
  margin-top: -80px;
  color: #f7f7f7;
  text-shadow: 5px 3px #222;

  @media screen and (max-width: 768px) {
    font-size: 22px;
    margin-top: -35px;
  }
`;

export const ClearTopS = styled.div`
  margin-top: 100px;
`;

export const ClearBotS = styled.div`
  margin-bottom: 100px;
`;

export const ClearTopMobileS = styled.div`
  margin-top: 100px;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;
