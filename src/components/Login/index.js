import React, { useState } from "react";
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
  import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Login() {
    const [typePassword, setTypePassword] = useState('password');

    const showPassword = () => {
        if( typePassword == 'password' ){
            setTypePassword('text');
        }else{
            setTypePassword('password');
        }
    }

    return (
        <CardWrapper>
            <CardHeader>
                <CardHeading>Login</CardHeading>
            </CardHeader>
            <CardBody>
                <CardFieldset>
                    <CardInput placeholder="E-mail" type="text" required />
                </CardFieldset>
                <CardFieldset>
                    <CardInput placeholder="Password" type={typePassword} required />
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
                    <CardButton type="button">Login</CardButton>
                </CardFieldset>
                <CardFieldset>
                    <CardLink onClick={ () => window.location = '/daftar' }>Belum punya akun? Klik disini</CardLink>
                </CardFieldset>
            </CardBody>
        </CardWrapper>
    )
}