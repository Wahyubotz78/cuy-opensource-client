import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import styledNormalize from 'styled-normalize'
import { useStore } from 'store'
import Layout from 'components/Layout'
import theme from 'theme'
import '../styles/main.css'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
`

export default function MyApp(props) {
  const { Component, pageProps } = props
  const store = useStore(pageProps.state)
  const title = 'Cuycourse Online'
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:title' content={title} />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
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
  )
}
