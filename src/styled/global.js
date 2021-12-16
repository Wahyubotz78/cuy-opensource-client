import styled from "styled-components";

export const Wrapper = styled.section`
    padding: 15px;
    margin: 5px;
    z-index: 999;
`;

export const FlexContainer = styled.section`
    display: flex;
    flex-direction: column;
    
`;

export const Block = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0.5rem calc((100vw - 100%) / 2);
    @media screen and (max-width: 768px) {
        flex-direction: column;
        height: 200px;
    }
`;

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: (100%)/3; // 33.33% each
    background-color: #FFFFFF;
  `

export const CircleBox = styled.div`
padding: 10px;
margin: 0 auto;
width: 250px;
height: 250px;
border-radius: 15px;
@media screen and (max-width: 768px) {
    font-size: 35px; 
}
img {
    width: 100%;
    height: 100%;
}

`;

export const CircleContent = styled.span`
font-size: 3em;
text-align: center;
@media screen and (max-width: 768px) {
    font-size: 50px; 
}
`;

export const CircleSnippet = styled.p`
font-size: 16px;
text-align: center;
`;

export const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;
    font-size: 225px; 
    color: #0D0C1D;
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
    color: #0D0C1D;

    @media screen and (max-width: 768px) {
        font-size: 35px; 
        margin-top: -40px;
    }
`;

export const JoinButton = styled.button`
  background: white;
  display: flex;
  justify-content: center;
  border-radius: 11px;
  border: 2px solid #0D0C1D;
  color: #0D0C1D;
  cursor: pointer;
  width: 150px;
  margin: 0 auto;
  padding: 0.25em 1em;
  :hover {
      background-color: #0D0C1D;
      color: white;
      border: 2px solid #0D0C1D;
      transition: color 0.3s linear;
      transition: background-color 0.5s linear;

  }
`