import React, { useState, useEffect } from "react";
import {
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardIcon,
    CardFieldset,
    CardInput,
    CardButton,
    CardLink
} from "styled/loginStyle";
import { StyledModal, ModalWrapper } from 'styled/popupStyle';
import { SpinnerPage } from 'styled/loadingStyle';
import { Container } from 'styled/dashboardStyle';
import { thunk_login } from 'redux/middleware/login/loginMiddleware';
import { connect } from "react-redux";
import { encryptRequest } from 'libs/secret';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = (props) => {

    const [typePassword, setTypePassword] = useState('password');
    const [noHp, setNoHp] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [loadingPage, setLoadingPage] = useState(true);

    useEffect(() => {
        if(sessionStorage.getItem('r') != null){
            window.location = '/dashboard'
        }else{
            setLoadingPage(false)
        }
        if(props.loginReducer.data != null){
            sessionStorage.setItem('r', props.loginReducer.data)
            window.location = '/dashboard'
        }else if(props.loginReducer.Error){
            setMessage('No Telepon atau Password salah')
            setIsOpen(true)
        }
    }, [props.loginReducer])

    const showPassword = () => {
        if( typePassword == 'password' ){
            setTypePassword('text');
        }else{
            setTypePassword('password');
        }
    }

    const changeInput = (data,type) => {
        if(type == 'No Telepon') {
            if(data.length < 14){
                setNoHp(data.replace(/[^0-9]/g, ''))
            }
        }else if(type == 'Password') {
            setPassword(data)
        }
    }

    const login = () => {
        if(noHp == ''){
            setMessage('No Telepon tidak boleh kosong')
            setIsOpen(true)
        }else if(password == '' ){
            setMessage('Password tidak boleh kosong')
            setIsOpen(true)
        }else{
            const dataLogin = {
                key: noHp,
                password: password
            }
            const data = encryptRequest(dataLogin)
            thunk_login(data)
        }
    }

    return (
        <Container>
            { loadingPage ? <SpinnerPage width="100px" height="100px"/> : 
                <>
                    <StyledModal
                        isOpen={isOpen}
                    >
                        <ModalWrapper>
                            <CardHeader>
                                <CardHeading>
                                    { message }
                                </CardHeading>
                            </CardHeader>
                            <CardBody>
                                <CardButton type="button" onClick={ () => setIsOpen(false)  }>Tutup</CardButton>
                            </CardBody>
                        </ModalWrapper>
                    </StyledModal>
                    <CardWrapper>
                        <CardHeader>
                            <CardHeading>{ props.title[0].title }</CardHeading>
                        </CardHeader>
                        <CardBody>
                            { props.text.map( (data,i) => {
                                return (
                                    <React.Fragment key={i}>
                                        <CardFieldset>
                                            <CardInput placeholder={ data.title } type={ data.custom_excerpt == 'password' ? typePassword : data.custom_excerpt} onChange={ (e) => changeInput(e.target.value, data.title) } value={ data.title == 'No Telepon' ? noHp : undefined } required />
                                            { data.custom_excerpt == 'password' ? 
                                            <CardIcon eye small onClick={ () => showPassword() }>{ typePassword === 'password' ? <FaEye /> : <FaEyeSlash /> }</CardIcon>
                                            : null }
                                        </CardFieldset>
                                    </React.Fragment>
                                )
                            })}
                            <CardFieldset>
                                <CardButton type="button" onClick={ () => props.loginReducer.Loading ? null : login() }>{ props.loginReducer.Loading ? <SpinnerPage width="15px" height="15px"/> : props.title[0].title }</CardButton>
                            </CardFieldset>
                            <CardFieldset>
                                { props.title[0].excerpt.slice(0, 18) } <CardLink onClick={ () => window.location = '/daftar' }>{ props.title[0].excerpt.slice(18, 30) }</CardLink>
                            </CardFieldset>
                        </CardBody>
                    </CardWrapper>
                </>
            }
        </Container>
    )
}

export default connect((state) => state)(Login);