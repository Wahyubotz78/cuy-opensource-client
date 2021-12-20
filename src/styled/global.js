import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 15px;
  margin: 15px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 5px;
    margin: 5px;
  }
`;

export const FixGap = styled.div`
  margin-top: 10px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 100px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 225px;
  color: #f7f7f7;
  text-shadow: 15px 10px #222;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  @media screen and (max-width: 768px) {
    font-size: 125px;
  }
`;

export const Description = styled.div`
  text-transform: lowercase;
  font-size: 2.9em;
  text-align: center;
  margin-top: -80px;
  color: #f7f7f7;
  text-shadow: 10px 8px #222;

  @media screen and (max-width: 768px) {
    font-size: 35px;
    margin-top: -40px;
  }
`;
