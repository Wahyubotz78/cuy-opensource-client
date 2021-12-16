import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #000133;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
`;

export const PageContainer = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
`;

export const HeaderContainer = styled.header`
  display: flex;
  background: ${({ theme }) => theme.primaryDark};
  height: 50px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primaryHover};
`;

export const TitleContainer = styled.div`
  margin: auto;
`;

export const SidebarContainer = styled.aside`
  background: #d8dcd6;
  width: ${(props) => (props.isOpened ? "15vw" : "0vw")};
  transition: width 0.5s;
  overflow: hidden;
`;

export const FooterContainer = styled.footer`
  display: flex;
  background: ${({ theme }) => theme.primaryDark};
  height: 50px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primaryHover};
`;

export const IconContainer = styled.div`
  padding: 10px;
  cursor: pointer;
`;

export const LogoutContainer = styled.div`
  align-items: right;
  margin-right: 15px; 
  font-size: 16px;
  cursor: pointer;
`;

export const SidebarTitle = styled.h1`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

export const SidebarMenu = styled.p`
    font-size: 18px;
    margin-left: 15px;
    cursor: pointer;
    text-align: left;
`;