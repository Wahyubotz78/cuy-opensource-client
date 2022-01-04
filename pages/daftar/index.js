import React, { useEffect } from "react";
import { Provider } from "react-redux";
import NProgress from "nprogress";
import store from "../../src/redux/store";
// import RegisterPage from "../../src/components/Register";
import { Register } from "../../src/components/LazyComponents";
import { ModalProvider } from "styled-react-modal";
import { getPostByTag, getPageByTag, getSetting } from "../../src/libs/gcms";

export const getStaticProps = async () => {
  const register = (await getPostByTag("register")) || "";
  const text = (await getPageByTag("register")) || "";
  const { navigation } = (await getSetting()) || "";

  return {
    props: {
      register,
      text,
      navigation,
    },
  };
};

const IndexPage = ({ register, text }) => {
  useEffect(() => {
    NProgress.inc();
    NProgress.done();
  }, []);

  return (
    <Provider store={store}>
      <ModalProvider>
        <Register title={register} text={text} />
      </ModalProvider>
    </Provider>
  );
};

export default IndexPage;
