import React,{useState} from 'react';


import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';
import {SessionProvider} from 'next-auth/react'
import Header from '../components/Header';
import { StateManager } from '../state manager/Context';
import {Toaster} from 'react-hot-toast'
import Back from '../components/Back';
import Cursor from '../components/Cursor'
function MyApp({ Component, pageProps,products}) {
  

  return ( 
    <SessionProvider session={pageProps.session}>
    <StateManager>
 <Cursor />
    <Toaster/>
  <NextUIProvider>
    <Header />
  <Back/>
  
    <Component {...pageProps} />
  </NextUIProvider>

  </StateManager>  </SessionProvider>

  )
}

export default MyApp


