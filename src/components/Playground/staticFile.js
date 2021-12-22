export const RegisterButton = `export default function RegisterButton() {
    return (
        <div style={{margin: "5px", padding: "10px"}}>
        <p>komponen tombol pendaftaran</p>
        <button>daftar sekarang</button>
        </div>
    )
  }`;

export const SigninButton = `export default function SigninButton() {
    return (
        <div style={{margin: "5px", padding: "10px"}}>
        <p>komponen tombol masuk</p>
        <button>masuk</button>
        </div>
    )
  }`;

export const App = `/*
kuy cobain ubah komponen yang ada 💪
*/
import SigninButton from "./SigninButton"
import RegisterButton from "./RegisterButton"

export default function App() {
    return (
        <div>
            <SigninButton/>
            <RegisterButton/>
        </div>
    )
  }`;