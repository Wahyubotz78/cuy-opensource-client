import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Content, PageContainer } from '../../styled/dashboardStyle';
import { thunk_getUser } from '../../redux/middleware/user/userMiddleware';
import { encryptRequest, decryptRequest } from '../../libs/secret';
import { SpinnerPage } from '../../styled/loadingStyle'
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import Profile from '../profile/index';
import Playground from '../Playground/index'

const Dashboard = (props) => {
    const [loadingPage, setLoadingPage] = useState(true)
    const [isOpened, setOpened] = useState(true);
    console.log(props)
    useEffect( () => {
        if(sessionStorage.getItem('r') == null){
            window.location = '/masuk'
        }
        if(props.userReducer.Error){
            sessionStorage.clear()
            window.location = '/masuk'
        }
        if(props.userReducer.data == null){
            let userLogin = decryptRequest(sessionStorage.getItem('r'))
            let ecryptID = encryptRequest({"id": userLogin.id})
            thunk_getUser(ecryptID)
        }else {
            setLoadingPage(false)
        }
    }, [props.userReducer])

    const toggleDrawer = () => {
        setOpened((prev) => !prev);
      };

    return (
        <Container>
            { loadingPage ? <SpinnerPage /> :  
                <>
                    <Header isOpened={isOpened} toggleDrawer={toggleDrawer} title={props.dashboardReducer.sidebar}/>
                    <Content>
                        <Sidebar isOpened={isOpened} />
                        <PageContainer>
                            { props.dashboardReducer.sidebar == 'profile' ? <Profile /> : props.dashboardReducer.sidebar == 'playground' ? <Playground dashboard={true}/> : "comming soon" }
                        </PageContainer>
                    </Content>
                    <Footer />
                </>
            }
        </Container>
    )
}

export default connect((state) => state)(Dashboard);