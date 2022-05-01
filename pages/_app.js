import Nav from '../components/Nav'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
      <div>
      <Head>
        <title>teise.</title>
      </Head>
      <Nav></Nav>
      <Component {...pageProps} />
      </div>
  )
}

export default MyApp
