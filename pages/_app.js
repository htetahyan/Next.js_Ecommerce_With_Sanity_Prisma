import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';
import {SessionProvider } from 'next-auth/react'
import Header from '../components/Header';
function MyApp({ Component, pageProps: { session, ...pageProps}}) {
  return (
  <SessionProvider session={session}>
  <NextUIProvider>
    <Header/>
    <Component {...pageProps} />
  </NextUIProvider>
  </SessionProvider>)
}

export default MyApp
