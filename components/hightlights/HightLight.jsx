import React, { useState, useEffect } from "react";

import { urlFor } from "../../lib/client";
import Link from "next/link";
import Image from'next/image'
import {Spacer, Text} from '@nextui-org/react'
//slick slide
// animation
import { motion,AnimatePresence,Variant } from "framer-motion";
import BtnImg from '../../public/btn.png'
import Countdown from "./Countdown";
 function HightLight({ b,index,i}) {
  console.log(i);
  console.log('hi',index);


  return (
   <>
   <div className={index===i?"b_circle":"b_circle  circleAnimate"}></div>
     <motion.div  className={index===i ? 'banner slide' :'banner '} style={{}}>
    
<div className="b_left"><h1>{b?.midText}</h1>
<h4>{b?.desc}</h4>
</div>
<img src={urlFor(b?.image)} alt="" className="b_img" />
<div className="b_right"><Countdown b={b}/>
<Text h2  css={{color:'	#a41a1a',textAlign:'center',font:'50px Days one',background:'white',alignSelf:'center'}}>{b?.price}$</Text>
<div className="b_btn flex w-3/4  justify-self-center">

  <h2>Buy Now!</h2>
  <Spacer x={0.4}/>
  <Image    className="b_btnImg"
       src={BtnImg} alt="" />
</div>
</div>
     </motion.div>
     </>
      
   
  );
}

export default HightLight;
