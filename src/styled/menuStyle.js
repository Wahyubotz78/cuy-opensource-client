import styled from "styled-components";

export const ContainerMenu = styled.section`
  margin: auto;
  padding: 1rem;

  @media (min-width: 48em) {
    padding: 4rem;
  }
`;

export const HeaderMenu = styled.header`
  margin-bottom: 2rem;

  & h1 {
    color: var(--color-heading);
    font-size: clamp(1rem, 2vw, 99rem);
    font-weight: 300;
    letter-spacing: 0.1875em;
    margin: unset;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const MainMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  @media (min-width: 35.5em) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0 2rem;
  }
`;

export const Menu = styled.div`
  background: #0D0C1D;
  border-radius: 1rem;
  color: var(--color-counter);
  display: flex;
  flex-direction: column;
  font-size: clamp(1rem, 8vw, 99rem);
  font-weight: 100;
  line-height: 1;
  padding: 2vw
  text-align: center;
  color: #f7f7f7;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
  h2 {
    color: var(--color-heading);
    font-size: clamp(1rem, 2vw, 99rem);
    font-weight: 300;
    letter-spacing: .1875em;
    order: 1;
    text-align: center;
    overflow: hidden
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;
    width: 100%;
  }
  &:hover{
    background-color:orange;
    transition: color 0.2s linear;
    color: #0D0C1D;
  }
`;
