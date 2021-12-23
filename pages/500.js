import NotFoundComponent from "components/Helper/NotFound.js";
import { getSetting } from "libs/gcms";

export const getStaticProps = async () => {
  const { navigation } = (await getSetting()) || "";

  return {
    props: {
      navigation,
    },
  };
};

export default function Custom404() {
  return <NotFoundComponent />;
}
