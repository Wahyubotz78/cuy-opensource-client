import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #EA914F;
  height: 75px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const NavLink = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: 0 0 4px rgb(0 0 0 / 38%);
  margin: 5px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
  :hover {
    transition: all 0.2s ease-in-out;
    background: #222222;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: inline-block;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.div`
  border-radius: 4px;
  background: #222222;
  padding: 10px 22px;
  color: #FFFFFF;
  outline: none;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  :hover {
    transition: all 0.2s ease-in-out;
    background: #FFFFFF;
    color: #222222;
  }
`;
