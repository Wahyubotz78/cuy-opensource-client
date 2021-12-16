import React, { useState } from "react";
import FrontendCourse from "components/Course/Frontend";
import CourseRegister from "components/Course/courseRegister"
import { whatsapp } from "libs/whatsapp"

export default function Journey1() {
    const [show, setShow] = useState(false);
    const onCourseClick = () => {
        setShow(!show);
    }
    const buttons = [
        {
            label: "Daftar Course ini",
            onClick: onCourseClick,
        },
    ]
    return (
        <div>
            <FrontendCourse
                title="#1 FRONTEND WEBDEV BASIC 💪"
                date="18 - 19 Desember 2021 (10.00 - 16.00WIB)"
                techstack="HTML, CSS, Framework UI Bootstrap 5, Vanilla JS, REPL"
                description="Pelatihan bikin website mini shop statis untuk pengembangan halaman toko penjualan sederhana, lalu di koneksikan secara dinamis ke whatsapp chat sesuai dengan produk jualan dan di publish ke internet pake free hosting supaya web yang udah dibuat itu bisa di share sana-sini."
                detail="cocok untuk level pemula yang belum ngerti coding sama sekali, cocok juga untuk yang ngerasa stuck dengan HTML & CSS aja, cocok juga buat kaum maba pecinta rebahan yang salah jurusan & cocok juga untuk yg ingin mendalami dasar-dasar frontend web development"
                level="beginner, pemula, basic, dasar, fundamental"
                bonus="video hasil zoom record, modul latihan, e-sertifikat."
                price="Rp. 75.000,-"
                meet="Zoom Meeting"
                actions={buttons}
            />
            {show ? <CourseRegister show={show}
                headerText="Ikut Pelatihan"
                handleClose={onCourseClick}
                goToWhatsapp={whatsapp}
            /> : ""}
        </div>
    )
}