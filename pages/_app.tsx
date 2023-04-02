import type { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
// import { QueryClientProvider, QueryClient } from 'react-query'
// import url from 'url'
import NProgress from 'nprogress'

import '@app/styles/globals.scss'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

// const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" href="/images/logo.png" />
        <title>Ngoc Init project</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default App
