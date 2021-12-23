import React, { useEffect } from "react";
import { Provider } from "react-redux";
import NProgress from "nprogress";
import store from '../../src/redux/store';
import RegisterPage from '../../src/components/Register';
import { ModalProvider } from 'styled-react-modal';
import { getPostByTag, getPageByTag } from "libs/gcms";

export const getStaticProps = async () => {
  const register = (await getPostByTag("register")) || "";
  const text = (await getPageByTag("register")) || "";

  return {
    props: {
      register,
      text,
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
          <RegisterPage title={ register } text={ text }/>
        </ModalProvider>
    </Provider>
  )
}

export default IndexPage
