import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: block;
  background: ${({ theme }) => theme.primaryDark};
  width: 100%;
  height: auto;
  padding: 20px;
  position: absolute;
  top: 0;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};

  a {
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight: bold;
    margin-left: 10px;
    letter-spacing: 0.1rem;
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

export const BackButton = styled.nav`{
  background: ${({ theme }) => theme.primaryLight};
  width: 100%;
  height: 80px;
  padding: 18px;
  position: absolute;
  top: 0;
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 50px;
  }
  a {
    text-decoration: none;
    font-size: 30px;
    color: #444;
    cursor: pointer;
  }
}`