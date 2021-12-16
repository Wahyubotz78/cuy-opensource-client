import React, { useState, useEffect } from "react";
import { ModalContainer, ModalPopup } from "../../styled/modalStyle"

import {
    CardHeader,
    CardHeading,
    CardBody,
    CardFieldset,
    CardInput,
    CardButton,
    CardLink,
    CardOptionsNote
} from "../../styled/loginStyle";
export default function CourseRegister({ handleClose, show, goToWhatsapp }) {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [nomor, setNomor] = useState('');
    const [kota, setKota] = useState('');
    const [message, setMessage] = useState('');

    const popup = () => handleClose(handleClose);

    const changeInput = (data, type) => {
        if (type == 'nama') {
            setNama(data)
            setMessage("")
        } else if (type == 'email') {
            setEmail(data)
            setMessage("")
        } else if (type == 'nomor') {
            setNomor(data)
            setMessage("")
        } else if (type == 'kota') {
            setKota(data)
            setMessage("")
        }
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [show])

    const register = () => {
        if (
            nama.length >= 3 &&
            email !== "" &&
            nomor.length >= 8 &&
            kota.length >= 3
        ) {
            return goToWhatsapp(nama, email, nomor, kota, "journey1");
        } else {
            setMessage("isi data yang bener dan lengkap ya cuy 🤞")
        }
    }

    return (
        <ModalPopup show={show}>
            <ModalContainer>
                <CardLink onClick={popup}>❌</CardLink>
                <CardHeader>
                    <CardHeading>Ikut Journey #1</CardHeading>
                    <CardOptionsNote>{message}</CardOptionsNote>
                </CardHeader>
                <CardBody>
                    <CardFieldset>
                        <CardInput placeholder="nama lengkap" type="text" onChange={(e) => changeInput(e.target.value, 'nama')} onFocus={() => setMessage("")} required />
                    </CardFieldset>
                    <CardFieldset>
                        <CardInput placeholder="email" type="email" onChange={(e) => changeInput(e.target.value, 'email')} onFocus={() => setMessage("")} required />
                    </CardFieldset>
                    <CardFieldset>
                        <CardInput placeholder="nomor whatsapp" type="number" onChange={(e) => changeInput(e.target.value, 'nomor')} onFocus={() => setMessage("")} required />
                    </CardFieldset>
                    <CardFieldset>
                        <CardInput placeholder="asal kota" type="text" onChange={(e) => changeInput(e.target.value, 'kota')} onFocus={() => setMessage("")} required />
                    </CardFieldset>
                    <CardFieldset>
                        <CardButton type="button" onClick={() => register()}>Daftar Sekarang</CardButton>
                    </CardFieldset>
                </CardBody>
            </ModalContainer>
        </ModalPopup>
    );
}