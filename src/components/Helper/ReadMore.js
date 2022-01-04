import { ReadMoreS } from "../../styled/global";
export default function ReadMore({ isReadMore, setReadMore }) {
  return (
    <ReadMoreS onClick={() => setReadMore(!isReadMore)}>
      {isReadMore ? "Sembunyikan detail 🔺" : "Lihat lebih banyak 🔻"}
    </ReadMoreS>
  );
}
