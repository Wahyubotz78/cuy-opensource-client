import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Content, PageContainer } from '../../styled/dashboardStyle';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import Profile from '../profile/index';
import Playground from '../PlaygroundPage/index'

const Dashboard = (props) => {
    
    const [isOpened, setOpened] = useState(true);

    useEffect( () => {
        if(sessionStorage.getItem('r') == null){
            window.location = '/'
        }
    }, [])

    const toggleDrawer = () => {
        setOpened((prev) => !prev);
      };

    return (
        <Container>
            <Header isOpened={isOpened} toggleDrawer={toggleDrawer} title={props.dashboardReducer.sidebar}/>
            <Content>
                <Sidebar isOpened={isOpened} />
                <PageContainer>
                    { props.dashboardReducer.sidebar == 'profile' ? <Profile /> : props.dashboardReducer.sidebar == 'playground' ? <Playground /> : "comming soon" }
                </PageContainer>
            </Content>
            <Footer />
        </Container>
    )
}

export default connect((state) => state)(Dashboard);