import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.primaryDark};
  width: 100%;
  height: auto;
  padding: 30px;
  position: absolute;
  top: 0;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  /* transform: ${({ open }) =>
    open ? "translateY(0)" : "translateY(-100%)"}; */
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 75px;
    padding: 15px;
    height: auto;
  }

  a {
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight: bold;
    margin-left: 20px;
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
    transition: color 0.5s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.1rem;
      padding: 10px;
      letter-spacing: 0.1rem;
      text-align: left;
      margin: 5px;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

export const BackButton = styled.nav`
   {
    background: rgba(255, 255, 255, 0.1);
    width: 100%;
    height: 70px;
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
  }
`;
