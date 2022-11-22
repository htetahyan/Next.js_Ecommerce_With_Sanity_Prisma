import React from 'react'
import {Spacer} from '@nextui-org/react'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
//portrait Icons
import GoogleIcon from '@mui/icons-material/Google';
import PeopleIcon from '@mui/icons-material/People';
import QuizIcon from '@mui/icons-material/Quiz';
import InfoIcon from '@mui/icons-material/Info';
function Header() {
  const [menu,isMenu]=useState(false)
  return (
    <div className='header'>
      <h2>Marketify</h2>
      <ul className="lists flex">
        
        <li><a href="#">Community</a> </li>
        <Spacer/>
        <li><a href="#">FAQ</a> </li>
        <Spacer/>
        <li><a href="#">About</a> </li>
        <Spacer/>
      </ul>
        <div className="info flex ">
       <div className="cartIcon"></div>
       <Spacer y={3}/>
     <h1>|</h1>
     <Spacer y={3}/>
  <button class="button-86" role="button">Sign In</button>
  </div>
  <div className="h_right flex">
  <div className="h_cartMb"></div>
  <div className='hamburger' onClick={() => isMenu(!menu)}><Hamburger /></div>
  </div>
  {menu &&  <ul className="menusLink fixed">
  <li><div className="icon"><GoogleIcon/></div>
    <a href="#">Sign In</a> </li>
        
  <li><div className="icon"><PeopleIcon/></div>
    <a href="#">Community</a> </li>
       
        <li>
        <div className="icon"><QuizIcon/></div><a href="#">FAQ</a> </li>
                <li>
                <div className="icon"><InfoIcon/></div><a href="#">About</a> </li>
   <div className="header_footer">
   
   </div>
  </ul> }
 

    </div>
  )
}

export default Header
