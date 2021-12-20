import styled from "styled-components";

export const ContainerMenuS = styled.section`
  margin: auto;
  padding: 1rem;
`;

export const HeaderMenuS = styled.header`
  margin-bottom: 2rem;
  & h1 {
    font-size: clamp(1rem, 2vw, 99rem);
    font-weight: 300;
    letter-spacing: 0.1875em;
    margin: unset;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const MainMenuS = styled.div`
  display: grid;
  z-index: 1;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    background: #222;
    display: flex;
    justify-content: center;
    position: fixed;
    gap: 0;
    top: 0;
    left: 0;
    border-bottom: 3px solid orange;
  }
`;

export const MenuS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: clamp(1rem, 8vw, 99rem);
  padding: 1vw;
  img {
    width: 50%;
    height: 50%;
    margin: 0 auto;
    cursor: pointer;
  }
  h2 {
    font-size: clamp(1rem, 2vw, 99rem);
    font-weight: 300;
    padding: 10px;
    letter-spacing: 0.2em;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
    color: #f7f7f7;
    text-shadow: 5px 5px #222;
    cursor: pointer;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    img {
      width: 50%;
      height: 50%;
      margin: 0 auto;
    }
    h2 {
      font-size: 12px;
      font-weight: 300;
      padding: 5px;
      letter-spacing: 0.1em;
      text-align: center;
      text-transform: uppercase;
      white-space: nowrap;
    }
  }
`;
