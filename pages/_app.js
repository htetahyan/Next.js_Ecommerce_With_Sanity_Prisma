import React from 'react';


import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';
import {SessionProvider} from 'next-auth/react'
import Header from '../components/Header';
import { StateManager } from '../state manager/Context';
import {Toaster} from 'react-hot-toast'
function MyApp({ Component, pageProps,products}) {
  return ( 
    <SessionProvider session={pageProps.session}>
    <StateManager>
 
    <Toaster/>
  <NextUIProvider>
    <Header />
  
    <Component {...pageProps} />
  </NextUIProvider>

  </StateManager>  </SessionProvider>

  )
}

export default MyApp


