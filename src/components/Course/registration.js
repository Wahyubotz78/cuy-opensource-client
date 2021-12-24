import React, { useState } from "react";
import {
  CourseHeadingS,
  CourseFormContainerS,
  CourseMessageS,
} from "styled/courseStyle";
import { ClearTopS, ClearBotS } from "styled/global";
import { whatsapp } from "libs/whatsapp";

export default function CourseRegistration() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nomor, setNomor] = useState("");
  const [profesi, setProfesi] = useState("");
  const [message, setMessage] = useState("");

  const changeInput = (data, type) => {
    if (type == "nama") {
      setNama(data);
      setMessage("");
    } else if (type == "email") {
      setEmail(data);
      setMessage("");
    } else if (type == "nomor") {
      setNomor(data);
      setMessage("");
    } else if (type == "profesi") {
      setProfesi(data);
      setMessage("");
    }
  };

  const registrating = () => {
    if (
      nama.length >= 3 &&
      email !== "" &&
      nomor.length >= 8 &&
      profesi.length >= 2
    ) {
      setMessage("🙌 thanks udah join 🙌");
      return whatsapp(
        nama,
        email,
        nomor,
        profesi,
        "Mastering%20CSS%20Basic%20"
      );
    } else {
      setMessage("isi data yang bener dan lengkap ya cuy 🤞");
    }
  };

  return (
    <div>
      <ClearTopS />
      <CourseHeadingS>REGISTRATION</CourseHeadingS>
      <CourseMessageS>{message}</CourseMessageS>
      <CourseFormContainerS>
        <input
          type="text"
          placeholder="Nama lengkap"
          onChange={(e) => changeInput(e.target.value, "nama")}
          onFocus={() => setMessage("")}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => changeInput(e.target.value, "email")}
          onFocus={() => setMessage("")}
        />
        <input
          type="number"
          placeholder="Nomor Whatsapp"
          onChange={(e) => changeInput(e.target.value, "nomor")}
          onFocus={() => setMessage("")}
        />
        <input
          type="text"
          placeholder="Profesi"
          onChange={(e) => changeInput(e.target.value, "profesi")}
          onFocus={() => setMessage("")}
        />
        <button onClick={() => registrating()}>JOIN</button>
      </CourseFormContainerS>
      <ClearBotS />
    </div>
  );
}
