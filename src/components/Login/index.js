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
import { StyledModal, ModalWrapper } from '../../styled/popupStyle'
import { thunk_login } from '../../redux/middleware/login/loginMiddleware'
import { connect } from "react-redux";
import { encryptRequest, decryptRequest } from '../Helper/secret'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = (props) => {
    const [typePassword, setTypePassword] = useState('password');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if(props.loginReducer.data != null){
            console.log('data user', decryptRequest(props.loginReducer.data))
        }else if(props.loginReducer.Error){
            setMessage('Email atau password salah')
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
        if(type == 'email') {
            setEmail(data)
        }else if(type == 'password') {
            setPassword(data)
        }
    }

    const login = () => {
        if(email == ''){
            setMessage('Email tidak boleh kosong')
            setIsOpen(true)
        }else if(password == '' ){
            setMessage('Password tidak boleh kosong')
            setIsOpen(true)
        }else{
            const dataLogin = {
                key: email,
                password: password
            }
            const data = encryptRequest(dataLogin)
            thunk_login(data)
        }
    }

    return (
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
                        <CardInput placeholder="E-mail" type="text" onChange={ (e) => changeInput(e.target.value, 'email') } required />
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
                        <CardButton type="button" onClick={ () => login() }>{ props.loginReducer.Loading ? 'Loading...' : 'Login' }</CardButton>
                    </CardFieldset>
                    <CardFieldset>
                        <CardLink onClick={ () => window.location = '/daftar' }>Belum punya akun? Klik disini</CardLink>
                    </CardFieldset>
                </CardBody>
            </CardWrapper>
        </>
    )
}

export default connect((state) => state)(Login);