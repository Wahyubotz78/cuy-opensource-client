import React from "react";
import { connect } from "react-redux";
import { SidebarContainer, SidebarTitle, SidebarMenu } from '../../styled/dashboardStyle';
import { thunk_sidebar } from '../../redux/middleware/dashboard/dashboardMiddleware'
import { FaRegUser, FaBookOpen, FaCode } from 'react-icons/fa';

const DashboardSidebar = (props) => {

    const sidebar = (data) => {
        thunk_sidebar(data)
    }

    return (
        <SidebarContainer isOpened={props.isOpened}>
            <SidebarTitle>Menu</SidebarTitle>
            <SidebarMenu onClick={ () => sidebar('profile') }><FaRegUser /> Profile</SidebarMenu>
            <SidebarMenu onClick={ () => sidebar('playground') }><FaCode /> Playground</SidebarMenu>
            <SidebarMenu onClick={ () => sidebar('course') }><FaBookOpen /> Course</SidebarMenu>
        </SidebarContainer>
    );
}

export default connect((state) => state)(DashboardSidebar);