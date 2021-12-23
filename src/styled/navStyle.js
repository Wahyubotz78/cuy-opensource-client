import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  height: auto;
  padding: 7px;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  z-index: 9;
  overflow: hidden;
  background-image: url("/images/mainbg.png");
  border-bottom: 2px solid orange;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    bottom: 0;
    top: auto;
    border-top: 3px solid orange;
    border-bottom: none;
  }
`;

export const NavGroup = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: center;
  }
`;

export const NavGroupRight = styled(NavGroup)`
  display: flex;
  justify-content: flex-end;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: center;
    order: -1;
  }
`;

export const NavLink = styled.li`
  a {
    color: #fff;
    opacity: 0.8;
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px 30px;
    margin: 0 10px;
    line-height: 80px;
    transition: 0.5s;
    font-size: 1.1em;
    text-shadow: 2px 2px #000a;
    letter-spacing: 0.15rem;
    white-space: nowrap;
    user-select: none;
    background: #999 url("https://i.ibb.co/rb2TWXL/bgbtn.png") center / cover;
    image-rendering: pixelated;
    border: 2px solid #111;
    box-shadow: inset -2px -4px #0006, inset 2px 2px #fff7;
    cursor: pointer;
  }
  
  a:hover {
    opacity: 1;
    text-shadow: 2px 2px #202013cc;
  }
  :hover {
    transform: rotateZ(-1deg);
    transition: 0.2s;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 0.65rem;
    padding: 1px;
    letter-spacing: 0.1rem;
    margin: 1px;
    a {
      padding: 5px 10px;
      margin: 0;
      line-height: 35px;
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
      color: #fff;
      cursor: pointer;
    }
  }
`;
