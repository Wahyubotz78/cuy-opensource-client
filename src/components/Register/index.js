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

export default function Register() {
    const [typePassword, setTypePassword] = useState('password');
    const [typeRePassword, setTypeRePassword] = useState('password');
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [noHp, setNohp] = useState('');
    const [alamat, setAlamat] = useState('');
    const [password, setPassword] = useState('');
    const [konfirmasiPassword, setkonfirmasiPassword] = useState('');

    const showPassword = () => {
        if( typePassword == 'password' ){
            setTypePassword('text');
        }else{
            setTypePassword('password');
        }
    }

    const showRePassword = () => {
        if( typeRePassword == 'password' ){
            setTypeRePassword('text');
        }else{
            setTypeRePassword('password');
        }
    }

    const changeInput = (data,type) => {
        if(type == 'nama'){
            setNama(data)
        }else if(type == 'email') {
            setEmail(data)
        }else if(type == 'no') {
            setNohp(data)
        }else if(type == 'alamat') {
            setAlamat(data)
        }else if(type == 'password') {
            setPassword(data)
        }else{
            setkonfirmasiPassword(data)
        }
    }

    return (
        <CardWrapper>
            <CardHeader>
                <CardHeading>Daftar</CardHeading>
            </CardHeader>
            <CardBody>
                <CardFieldset>
                    <CardInput placeholder="Nama" type="text" required onChange={ (e) => changeInput(e.target.value,'nama') }/>
                </CardFieldset>
                <CardFieldset>
                    <CardInput placeholder="E-mail" type="text" required onChange={ (e) => changeInput(e.target.value,'email') }/>
                </CardFieldset>
                <CardFieldset>
                    <CardInput placeholder="No Hp" type="number" required onChange={ (e) => changeInput(e.target.value,'no') }/>
                </CardFieldset>
                <CardFieldset>
                    <CardInput placeholder="Alamat" type="text" required onChange={ (e) => changeInput(e.target.value,'alamat') }/>
                </CardFieldset>
                <CardFieldset>
                    <CardInput placeholder="Password" type={typePassword} required onChange={ (e) => changeInput(e.target.value,'password') }/>
                    <CardIcon eye small onClick={ () => showPassword() }>{ typePassword === 'password' ? <FaEye /> : <FaEyeSlash /> }</CardIcon>
                </CardFieldset>
                <CardFieldset>
                    <CardInput placeholder="Ketik ulang password" type={typeRePassword} required onChange={ (e) => changeInput(e.target.value,'konfirmasiPassword') }/>
                    <CardIcon eye small onClick={ () => showRePassword() }>{ typeRePassword === 'password' ? <FaEye /> : <FaEyeSlash /> }</CardIcon>
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
                    <CardButton type="button" disabled={ true } onClick={ (e) => console.log("as") }>Daftar</CardButton>
                </CardFieldset>
                <CardFieldset>
                    <CardLink onClick={ () => window.location = '/masuk' }>Udah punya akun? Klik disini</CardLink>
                </CardFieldset>
            </CardBody>
        </CardWrapper>
    )
}