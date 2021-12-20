import React, { useState, useEffect } from "react";
import {
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardIcon,
    CardFieldset,
    CardInput,
    CardOptionsItem,
    CardOptions,
    CardOptionsNote,
    CardButton,
    CardLink
} from "../../styled/loginStyle";
import { StyledModal, ModalWrapper } from '../../styled/popupStyle';
import { SpinnerPage } from '../../styled/loadingStyle';
import { Container } from '../../styled/dashboardStyle';
import { thunk_login } from '../../redux/middleware/login/loginMiddleware';
import { connect } from "react-redux";
import { encryptRequest } from '../../libs/secret';
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
        if(type == 'no') {
            if(data.length < 14){
                setNoHp(data.replace(/[^0-9]/g, ''))
            }
        }else if(type == 'password') {
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
            { loadingPage ? <SpinnerPage /> : 
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
                            <CardHeading>Login</CardHeading>
                        </CardHeader>
                        <CardBody>
                            <CardFieldset>
                                <CardInput placeholder="No telepon" type="text" onChange={ (e) => changeInput(e.target.value, 'no') } required value={noHp}/>
                            </CardFieldset>
                            <CardFieldset>
                                <CardInput placeholder="Password" type={typePassword} onChange={ (e) => changeInput(e.target.value, 'password') } required />
                                <CardIcon eye small onClick={ () => showPassword() }>{ typePassword === 'password' ? <FaEye /> : <FaEyeSlash /> }</CardIcon>
                            </CardFieldset>
                            {/* <CardFieldset>
                                <CardOptionsNote>Login google</CardOptionsNote>
                                <CardOptions>
                                    <CardOptionsItem>
                                        <CardIcon className="fab fa-google" big />
                                    </CardOptionsItem>
                                    <CardOptionsItem>
                                        <CardIcon className="fab fa-twitter" big />
                                    </CardOptionsItem>
                                    <CardOptionsItem>
                                        <CardIcon className="fab fa-facebook" big />
                                    </CardOptionsItem>
                                </CardOptions>
                            </CardFieldset> */}
                            <CardFieldset>
                                <CardButton type="button" onClick={ () => props.loginReducer.Loading ? null : login() }>{ props.loginReducer.Loading ? 'Loading...' : 'Login' }</CardButton>
                            </CardFieldset>
                            <CardFieldset>
                                Belum punya akun? <CardLink onClick={ () => window.location = '/daftar' }> Klik disini</CardLink>
                            </CardFieldset>
                        </CardBody>
                    </CardWrapper>
                </>
            }
        </Container>
    )
}

export default connect((state) => state)(Login);