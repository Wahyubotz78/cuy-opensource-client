import React from "react";
import { FaLongArrowAltLeft } from 'react-icons/fa'
import {
    BackButton
} from "styled/navStyle";

export default function NavbarBack() {
    return (
        <BackButton open={true}>
            <a href="/">
                <FaLongArrowAltLeft />
            </a>
        </BackButton>
    );
}
