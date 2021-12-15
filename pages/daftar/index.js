import React from "react";
import { Provider } from "react-redux";
import store from '../../src/redux/store'
import RegisterPage from '../../src/components/Register';
import { ModalProvider } from 'styled-react-modal'

const IndexPage = () => {    
  return (
    <Provider store={store}>
        <ModalProvider>
          <RegisterPage />
        </ModalProvider>
    </Provider>
  )
}

export default IndexPage
