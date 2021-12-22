import React from "react";
import { Provider } from "react-redux";
import store from '../../src/redux/store'
import { ModalProvider } from 'styled-react-modal'
import LoginPage from '../../src/components/Login'

const IndexPage = () => {
    
  return (
    <Provider store={store}>
      {/* <h1>ComingSoon</h1> */}
        <ModalProvider>
          <LoginPage />
        </ModalProvider>
    </Provider>
  )
}

export default IndexPage
