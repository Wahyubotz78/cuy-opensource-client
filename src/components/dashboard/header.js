import React from "react";
import { HeaderContainer, TitleContainer, IconContainer, LogoutContainer } from '../../styled/dashboardStyle';
import { MdChevronLeft, MdMenu } from 'react-icons/md'

const DashboardHeader = (props) => {

    const logout = () => {
        sessionStorage.clear()
        setTimeout( () => {
            window.location = '/'
        }, 100)
    }

    return (
        <HeaderContainer>
            <IconContainer onClick={props.toggleDrawer}>
                {props.isOpened ? <MdChevronLeft size={32}/> : <MdMenu size={32}/>}
            </IconContainer>
            <TitleContainer>{ props.title }</TitleContainer>
            <LogoutContainer onClick={ () => logout() }>Logout</LogoutContainer>
        </HeaderContainer>
    );
}

export default DashboardHeader;