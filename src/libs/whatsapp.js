import config from "libs/config";
const path = `https://api.whatsapp.com/send?phone=+${config.ADMIN_NUMBER}`;
const path_demo = `https://api.whatsapp.com/send?phone=`;

export const whatsapp = (nama, email, nomor, kota, course) => {
  return (window.location.href = `${path}&text=Hi%20bang%2C%20daftar%20course%20${course}:%0A%0Anama:%20${nama}%0Aemail:%20${email}%0Anomor-telepon:%20${nomor}%0Aasal-kota:%20${kota}%0A%0A%0Athanks.`);
};

export const whatsappDemo = (
  title,
  code,
  price,
  size,
  color,
  buyer,
  phone,
  city
) => {
  return (window.location.href = `${path_demo}${phone}&text=Hi%20min!%2C%20saya%20mau %20beli%20produk%20${title}%0A%0Acode:%20${code}%0Aharga:%20${price}%0Aukuran:%20${size}%0Awarna:%20${color}%0A%0Anama pembeli:%20${buyer}%0Ano.tlp:%20+628123123123%0Adikirim%20ke:%20${city}%0A%0ATerimakasih%20:)`);
};
