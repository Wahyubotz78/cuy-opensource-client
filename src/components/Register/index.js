import React, { useState, useEffect } from "react";
import { CardWrapper, CardHeader, CardHeading, CardBody, CardIcon, CardFieldset, CardInput,CardOptionsItem, CardOptions, CardOptionsNote, CardButton, CardLink } from "../../styled/loginStyle";
import { StyledModal, ModalWrapper } from '../../styled/popupStyle'
import { thunk_register } from '../../redux/middleware/register/registerMiddleware'
import { connect } from "react-redux";
import { encryptRequest } from '../../libs/secret'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = (props) => {
    const [typePassword, setTypePassword] = useState('password');
    const [typeRePassword, setTypeRePassword] = useState('password');
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [noHp, setNohp] = useState('');
    const [alamat, setAlamat] = useState('');
    const [password, setPassword] = useState('');
    const [konfirmasiPassword, setkonfirmasiPassword] = useState('');
    const [isOpen, setIsOpen] = useState(false)
    const [message, setMessage] = useState('')

    useEffect(() => {
        if(sessionStorage.getItem('r') != null){
            window.location = '/dashboard'
        }
        if(props.registerReducer.message == 'OK'){
            setIsOpen(true)
            setMessage('Pendaftaran Berhasil')
        }else if(props.registerReducer.Error){
            setIsOpen(true)
            setMessage('Pendaftaran gagal silahkan cek kembali data yang anda isi')
        }
    },[props.registerReducer.message, props.registerReducer.Error])

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
            if(data.length < 14 ){
                setNohp(data.replace(/[^0-9]/g, ''))
            }
        }else if(type == 'alamat') {
            setAlamat(data)
        }else if(type == 'password') {
            setPassword(data)
        }else{
            setkonfirmasiPassword(data)
        }
    }

    const daftar = () => {
        if(nama == ''){
            setIsOpen(true)
            setMessage('Nama tidak boleh kosong')
        }else if(email == ''){
            setIsOpen(true)
            setMessage('email tidak boleh kosong')
        }else if(noHp == ''){
            setIsOpen(true)
            setMessage('no hp tidak boleh kosong')
        }else if(noHp.length < 9 ){
            setIsOpen(true)
            setMessage('no hp terlalu pendek')
        }else if(alamat == ''){
            setIsOpen(true)
            setMessage('alamat tidak boleh kosong')
        }else if(password != konfirmasiPassword){
            setIsOpen(true)
            setMessage('password dan konfirmasi password tidak sama')
        }else if(password == ''){
            setIsOpen(true)
            setMessage('password tidak boleh kosong')
        }else{
            const dataRegister = {
                name: nama,
                email: email,
                phone: noHp,
                password: password,
                address: alamat
            }
            const data = encryptRequest(dataRegister)
            thunk_register(data)
        }
    }

    const OpenCloseModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <StyledModal
                isOpen={isOpen}
                onBackgroundClick={ message == 'Pendaftaran Berhasil' ? window.location = '/masuk' : OpenCloseModal}
            >
                <ModalWrapper>
                    <CardHeader>
                        <CardHeading>
                            { message }
                        </CardHeading>
                    </CardHeader>
                    <CardBody>
                        <CardButton type="button" onClick={ () => { message == 'Pendaftaran Berhasil' ? window.location = '/masuk' : OpenCloseModal() } }>{ message == 'Pendaftaran Berhasil' ? 'Yuk Login' : 'Tutup' }</CardButton>
                    </CardBody>
                </ModalWrapper>
            </StyledModal>
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
                        <CardInput placeholder="No Hp" type="text" required onChange={ (e) => changeInput(e.target.value,'no') } value={noHp}/>
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
                        <CardButton type="button" onClick={ (e) => props.registerReducer.Loading ? null : daftar() }>{ props.registerReducer.Loading ? "Loading..." : "Daftar" }</CardButton>
                    </CardFieldset>
                    <CardFieldset>
                        Udah punya akun? <CardLink onClick={ () => window.location = '/masuk' }> Klik disini</CardLink>
                    </CardFieldset>
                </CardBody>
            </CardWrapper>
        </>
    )
}

export default connect((state) => state)(Register);