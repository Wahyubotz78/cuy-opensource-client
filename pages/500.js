// import NotFoundComponent from "components/Helper/NotFound.js";
import { NotFound } from "../src/components/LazyComponents";
import { getSetting } from "libs/gcms";

export const getStaticProps = async () => {
  const { navigation } = (await getSetting()) || "";

  return {
    props: {
      navigation,
    },
  };
};

export default function Custom500() {
  return <NotFound />;
}
