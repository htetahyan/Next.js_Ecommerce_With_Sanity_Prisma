import React, { useEffect } from 'react'
import {Spacer} from '@nextui-org/react'
import Hamburger from 'hamburger-react'
import { styled } from '@mui/material/styles';
import { useState } from 'react'
//portrait Icons
import { client } from '../lib/client'
import GoogleIcon from '@mui/icons-material/Google';
import PeopleIcon from '@mui/icons-material/People';
import QuizIcon from '@mui/icons-material/Quiz';
import {Text} from '@nextui-org/react'
import InfoIcon from '@mui/icons-material/Info';
import Tooltip, { tooltipClasses }  from '@mui/material/Tooltip';
//profilr
import Zoom from '@mui/material/Zoom';
import Image from 'next/dist/client/image'
import Link from 'next/link'
import UserAccount from './account/UserAccount';
import Cart from './Cart'
const Header=()=> {
  const CustomWidthTooltip = styled(({ className, ...props }) => (
    
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      minWidth: 400,
      minHeight:500,background:'#641ED8'
    },
  });


  const [menu,isMenu]=useState(false);

  return (
    <div className='header'>
      <Link href='/'>
      <h2>Marketify</h2></Link>
      <ul className="lists flex">
        <li><a href="#">Community</a> </li>
        <Spacer/>
        <li><a href="#">FAQ</a> </li>
        <Spacer/>
        <li><a href="#">About</a> </li>
        <Spacer/>
       
      </ul>
        <div className="info flex justify-around ">
    
 <Cart/>
      
   
     <h1>|</h1>
  <UserAccount/>

  </div>
  </div>

  )
}

export default Header;
/* 
export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const banners = await client.fetch(bannerQuery);

  return {
    props: { products, banners },
  };
}; */