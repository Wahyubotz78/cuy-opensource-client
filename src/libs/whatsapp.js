import config from 'config'

const whatsapp = ({ nama, email, nomor, kota }) => {
    const path = `https://api.whatsapp.com/send?phone=+${config.admin_number}`
    if (
        nama.length >= 3 &&
        email !== "" &&
        nomor.length >= 8 &&
        kota.length >= 3
    ) {
        return (window.location.href = `${path}&text=Hi%20bang%2C%20daftar%20course%20terbaru:%0A%0Anama:%20${nama}%0Aemail:%20${email}%0Anomor-telepon:%20${nomor}%0Aasal-kota:%20${kota}%0A%0A%0Athanks.`);
    } else {
        alert("isi data dengan lengkap & benar");
    }
}

export default whatsapp
