import styled from "styled-components";

export const Section = styled.div`
  clear: both;
  padding: 0px;
  margin: 0px;
`;

export const Group = styled(Section)`
  &:before,
  &:after {
    content: "";
    display: table;
  }
  &:after {
    clear: both;
  }
  zoom: 1; /* For IE 6/7 */
`;

export const col = styled.div`
  display: block;
  float: left;
  margin: 1% 0 1% 1.6%;
  &:first-child {
    margin-left: 0;
  }
  @media only screen and (max-width: 480px) {
    margin: 1% 0 1% 0%;
  }
`;

export const Span1 = styled(col)`
  width: 12.91%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Span2 = styled(col)`
  width: 27.42%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Span3 = styled(col)`
  width: 41.94%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Span4 = styled(col)`
  width: 56.45%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Span5 = styled(col)`
  width: 70.97%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Span6 = styled(col)`
  width: 85.48%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Span7 = styled(col)`
  width: 100%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Item = styled.div`
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border: 2px solid transparent;
  font-size: 1.6em;
  cursor: pointer;
`;
