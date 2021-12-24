import React, { useEffect } from "react";
import NProgress from "nprogress";
import { Provider } from "react-redux";
import store from "redux/store";
import { ModalProvider } from "styled-react-modal";
import LoginPage from "components/Login";
import { getPostByTag, getPageByTag, getSetting } from "libs/gcms";

export const getStaticProps = async () => {
  const login = (await getPostByTag("login")) || "";
  const text = (await getPageByTag("login")) || "";
  const { navigation } = (await getSetting()) || "";

  return {
    props: {
      login,
      text,
      navigation,
    },
  };
};

const IndexPage = ({ login, text }) => {
  useEffect(() => {
    NProgress.inc();
    NProgress.done();
  }, []);

  return (
    <Provider store={store}>
      {/* <h1 style={{ textAlign: "center", color: "white" }}>COMING SOON YA :(</h1> */}
      <ModalProvider>
        <LoginPage title={login} text={text} />
      </ModalProvider>
    </Provider>
  );
};

export default IndexPage;
