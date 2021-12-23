import React, { useState } from "react";
import { CourseHeadingS, CourseFormContainerS } from "styled/courseStyle";
import { ClearTopS, ClearBotS } from "styled/global";
import { whatsapp } from "libs/whatsapp";
import GoToHome from "../GoToHome";

export default function CourseRegistration() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nomor, setNomor] = useState("");
  const [profesi, setProfesi] = useState("");

  const registrating = () => {
    console.log(nama);
    console.log(email);
    console.log(nomor);
    console.log(profesi);
  };

  return (
    <div>
      <ClearTopS />
      <CourseHeadingS>REGISTRATION</CourseHeadingS>
      <CourseFormContainerS>
        <input
          type="text"
          placeholder="Nama lengkap"
          onChange={(e) => setNama(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Nomor Whatsapp"
          onChange={(e) => setNomor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profesi"
          onChange={(e) => setProfesi(e.target.value)}
        />
        <button onClick={() => registrating()}>JOIN</button>
      </CourseFormContainerS>
      <ClearBotS />
      <GoToHome />
    </div>
  );
}
