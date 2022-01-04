import React, { useState, useEffect } from "react";
import {
    CourseHeadingS,
    CourseFormContainerS,
    CourseMessageS,
  } from "styled/courseStyle";
  import { ClearTopS, ClearBotS } from "styled/global";
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
        <div>
            { loadingPage ? 
                <Container>
                    <SpinnerPage width="100px" height="100px" /> 
                </Container> :
                <>
                    <ClearTopS />
                    <CourseHeadingS>{ props.title[0].title }</CourseHeadingS>
                    <CourseMessageS>{message}</CourseMessageS>
                    <CourseFormContainerS>
                        { props.text.map( (data,i)  => {
                            return(
                                <div key={i} style={{ display: "inline-block", position: "relative",overflow: "hidden" }}>
                                    <input
                                        type={ data.custom_excerpt === 'password' ? typePassword : data.custom_excerpt }
                                        placeholder={ data.title }
                                        onChange={(e) => changeInput(e.target.value, data.title)}
                                        value={ data.title === "No Telepon" ? noHp : undefined }
                                    />
                                    { data.custom_excerpt == 'password' ? <span style={{ position: "absolute",top: "25px", right: 0, color: "#808080", cursor: "pointer" }} onClick={ () => showPassword() }>{ typePassword === 'password' ? <FaEye /> : <FaEyeSlash /> }</span> : null }
                                </div>
                            )
                        })}
                        <button  onClick={ () => login() } style={{ cursor: "pointer" }}>{ props.title[0].title }</button>
                    </CourseFormContainerS>
                    <ClearBotS />
                </>
            }
        </div>
      );
}

export default connect((state) => state)(Login);