import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import styledNormalize from "styled-normalize";
import store from "../src/redux/store";
import Layout from "../src/components/Layout";
import theme from "../src/theme";
import "../src/components/styles/main.css";
import "../src/components/styles/gallery.css";
import "babel-polyfill";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
`;

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const title = "Deacourse Online";
  const description = "dea afrizal - cuy universe";
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} key="ogdesc" />
        <link rel="icon" type="image/png" href="/images/logo.png" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta property="og:url" content="https://stg.deacourse.com" key="ogurl" />
        <meta property="og:image" content="/images/logo.png" key="ogimage" />
        <meta property="og:site_name" content={description} key="ogsitename" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ThemeProvider>
    </>
  );
}
