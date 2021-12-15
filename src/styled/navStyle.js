import styled from "styled-components";

export const StyledMenu = styled.nav`
  /* display: ${({ open }) => open ? 'block' : 'none'}; */
  display: block;
  flex-direction: row;
  justify-content: center;
  background: ${({ theme }) => theme.primaryDark};
  width: 100%;
  height: 100px;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 235px;
  }

  a {
    font-size: 1.7rem;
    text-transform: uppercase;
    margin: 1.5em;
    padding: 1.5rem 0;
    font-weight: bold;
    letter-spacing: 1.1rem;
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
    transition: color 0.5s linear;
  
    @media (max-width: ${({ theme }) => theme.mobile}) {
      display: flex;
      flex-direction: column;
      font-size: 1.1rem;
      padding: 1rem;
      letter-spacing: 0.5rem;
      text-align: center;
      margin: 0.2em;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;