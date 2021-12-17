import React, { useState } from "react";
import {
  StyledContainer,
  Title,
  SubTitle,
  Description,
  Actions,
  ActionChild,
  Images,
  ImgBox,
  Card,
  CardWrapper,
  CardBody,
  CardInput,
  CardFieldset,
  CardButton,
} from "styled/demoJourney1";
import { whatsappDemo } from "libs/whatsapp";
import NavbarBack from "components/NavbarBack";

export default function Demo() {
  const [temp_adminNumber, setTempAdminNumber] = useState("");
  const [adminNumber, setAdminNumber] = useState("");

  const saveNumber = () => {
    if (temp_adminNumber.length < 8) {
      alert("silahkan isi dulu nomor wa untuk testing membeli produk bohongan");
    } else {
      alert("nomor testing berhasil disimpan 😊");
      return setAdminNumber(temp_adminNumber);
    }
  };

  const onBuy = (
    code,
    title,
    price,
    size,
    color,
    buyer,
    phone = adminNumber,
    city
  ) => {
    if (adminNumber.length < 8) {
      alert("silahkan isi dulu nomor wa untuk testing membeli produk bohongan");
    } else {
      return whatsappDemo(code, title, price, size, color, buyer, phone, city);
    }
  };
  const buttons = {
    label: "Beli Produk",
  };
  return (
    <div>
      <NavbarBack />
      <h1 style={{ textAlign: "center", marginTop: 15}}>DEMO CONTOH</h1>
      <CardWrapper>
        <CardBody>
          <CardFieldset>
            <div style={{ marginTop: 10, marginBottom: 10 }}>
              <small>* pastikan nomor whatsapp tersedia (+62xxxxxxxx)</small>
            </div>
            <CardInput
              placeholder="contoh: +62812345678"
              type="text"
              onChange={(e) => setTempAdminNumber(e.target.value)}
              required
            />
          </CardFieldset>
          {adminNumber.length > 8 ? (
            <div style={{ marginTop: 20, marginBottom: 20 }}>
              <small>admin number test: {adminNumber}</small>
            </div>
          ) : (
            ""
          )}
          <CardFieldset>
            <CardButton type="button" onClick={() => saveNumber()}>
              Simpan Sementara
            </CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
      <hr />
      <div
        style={{
          textAlign: "center",
          marginTop: 80,
          background: "#555",
          padding: "8px",
          margin: "10px",
        }}
      >
        <p style={{ color: "white", fontSize: 24, textAlign: "center" }}>
          🙌 TOKO AKHIRAT 💪
        </p>
      </div>
      <StyledContainer>
        <Card>
          <ImgBox>
            <Images src="/images/baju1.jpg" />
          </ImgBox>
          <Title>Baju Tidur Uniclo #BT001</Title>
          <SubTitle>🍳 BT001</SubTitle>
          <SubTitle>🔖 Rp. 250.000,-</SubTitle>
          <SubTitle>👘 Biru | Size L</SubTitle>
          <Description>
            Jual baju tidur uniclo terbaik, keluaran terbaru langsung dari
            gudang. Buruan sebelum kehabisan klik tombol beli sekarang juga!
            <br />
            dapatkan juga bonus berupa pulsa senilai 5rb untuk 10 pembeli
            pertama
          </Description>
          <Actions>
            <ActionChild
              onClick={() =>
                onBuy(
                  "BT001",
                  "Baju Tidur Uniclo",
                  "Rp. 250.000,-",
                  "Size L",
                  "Biru",
                  "user test 1",
                  adminNumber,
                  "Jakarta"
                )
              }
            >
              {buttons.label}
            </ActionChild>
          </Actions>
        </Card>
        <Card>
          <ImgBox>
            <Images src="/images/baju2.webp" />
          </ImgBox>
          <Title>Baju Tidur Nike #BT002</Title>
          <SubTitle>🍳 BT002</SubTitle>
          <SubTitle>🔖 Rp. 350.000,-</SubTitle>
          <SubTitle>👘 Hijau | Size M</SubTitle>
          <Description>
            Jual baju tidur uniclo terbaik, keluaran terbaru langsung dari
            gudang. Buruan sebelum kehabisan klik tombol beli sekarang juga!
            <br />
            dapatkan juga bonus berupa pulsa senilai 5rb untuk 10 pembeli
            pertama
          </Description>
          <Actions>
            <ActionChild
              onClick={() =>
                onBuy(
                  "BT002",
                  "Baju Tidur Nike",
                  "Rp. 350.000,-",
                  "Size M",
                  "Hijau",
                  "user test 2",
                  adminNumber,
                  "Kalimantan"
                )
              }
            >
              {buttons.label}
            </ActionChild>
          </Actions>
        </Card>
        <Card>
          <ImgBox>
            <Images src="/images/baju3.jpg" />
          </ImgBox>
          <Title>Baju Tidur Adidas #BT003</Title>
          <SubTitle>🍳 BT003</SubTitle>
          <SubTitle>🔖 Rp. 450.000,-</SubTitle>
          <SubTitle>👘 Hitam | Size XL</SubTitle>
          <Description>
            Jual baju tidur uniclo terbaik, keluaran terbaru langsung dari
            gudang. Buruan sebelum kehabisan klik tombol beli sekarang juga!
            <br />
            dapatkan juga bonus berupa pulsa senilai 5rb untuk 10 pembeli
            pertama
          </Description>
          <Actions>
            <ActionChild
              onClick={() =>
                onBuy(
                  "BT003",
                  "Baju Tidur Adidas",
                  "Rp. 450.000,-",
                  "Size XL",
                  "Hitam",
                  "user test 3",
                  adminNumber,
                  "Jogjakarta"
                )
              }
            >
              {buttons.label}
            </ActionChild>
          </Actions>
        </Card>
      </StyledContainer>
      <StyledContainer>
        <Card>
          <ImgBox>
            <Images src="/images/jaket1.jpg" />
          </ImgBox>
          <Title>Jaket Olahraga Uniclo #JO001</Title>
          <SubTitle>🍳 JO001</SubTitle>
          <SubTitle>🔖 Rp. 650.000,-</SubTitle>
          <SubTitle>👘 Merah | Size XXL</SubTitle>
          <Description>
            Jual Jaket Olahraga Nike terbaik, keluaran terbaru langsung dari
            gudang. Buruan sebelum kehabisan klik tombol beli sekarang juga!
            <br />
            dapatkan juga bonus berupa pulsa senilai 5rb untuk 10 pembeli
            pertama
          </Description>
          <Actions>
            <ActionChild
              onClick={() =>
                onBuy(
                  "JO001",
                  "Jaket Olahraga Uniclo",
                  "Rp. 650.000,-",
                  "Size XXL",
                  "Merah",
                  "user test 4",
                  adminNumber,
                  "Sulawesi"
                )
              }
            >
              {buttons.label}
            </ActionChild>
          </Actions>
        </Card>
        <Card>
          <ImgBox>
            <Images src="/images/jaket2.webp" />
          </ImgBox>
          <Title>Jaket Olahraga Adidas #JO002</Title>
          <SubTitle>🍳 JO002</SubTitle>
          <SubTitle>🔖 Rp. 950.000,-</SubTitle>
          <SubTitle>👘 Putih | Size XL</SubTitle>
          <Description>
            Jual Jaket Olahraga Nike terbaik, keluaran terbaru langsung dari
            gudang. Buruan sebelum kehabisan klik tombol beli sekarang juga!
            <br />
            dapatkan juga bonus berupa pulsa senilai 5rb untuk 10 pembeli
            pertama
          </Description>
          <Actions>
            <ActionChild
              onClick={() =>
                onBuy(
                  "JO002",
                  "Jaket Olahraga Adidas",
                  "Rp. 950.000,-",
                  "Size XXL",
                  "Putih",
                  "user test 5",
                  adminNumber,
                  "Ternate"
                )
              }
            >
              {buttons.label}
            </ActionChild>
          </Actions>
        </Card>
        <Card>
          <ImgBox>
            <Images src="/images/jaket3.jpg" />
          </ImgBox>
          <Title>Jaket Olahraga Rockstar #JO003</Title>
          <SubTitle>🍳 JO003</SubTitle>
          <SubTitle>🔖 Rp. 1.000.000,-</SubTitle>
          <SubTitle>👘 Hitam | Size M</SubTitle>
          <Description>
            Jual Jaket Olahraga Nike terbaik, keluaran terbaru langsung dari
            gudang. Buruan sebelum kehabisan klik tombol beli sekarang juga!
            <br />
            dapatkan juga bonus berupa pulsa senilai 5rb untuk 10 pembeli
            pertama
          </Description>
          <Actions>
            <ActionChild
              onClick={() =>
                onBuy(
                  "JO003",
                  "Jaket Olahraga Rockstar",
                  "Rp. 1.000.000,-",
                  "Size M",
                  "Hitam",
                  "user test 6",
                  adminNumber,
                  "Batam"
                )
              }
            >
              {buttons.label}
            </ActionChild>
          </Actions>
        </Card>
      </StyledContainer>
    </div>
  );
}
