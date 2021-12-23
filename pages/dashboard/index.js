import React from "react";
import { Provider } from "react-redux";
import store from "../../src/redux/store";
import DashboardPage from "../../src/components/dashboard";
import { ModalProvider } from "styled-react-modal";
import { getSetting } from "libs/gcms";

export const getStaticProps = async () => {
  const { navigation } = (await getSetting()) || "";

  return {
    props: {
      navigation,
    },
  };
};

const IndexPage = () => {
  return (
    <Provider store={store}>
      <ModalProvider>
        <DashboardPage />
      </ModalProvider>
    </Provider>
  );
};

export default IndexPage;
