import { urlFor } from "../../lib/client";
import {Spacer, Text} from '@nextui-org/react'
//slick slide
import { toast } from "react-hot-toast";
import getStripe from "../../lib/Stripe";
// animation
import { motion } from "framer-motion";

import Countdown from "./Countdown";
import CountdownMb from "./CountdownMb";
function HightLight({ b,index,i}) {
  const handled=async()=> {
    const stripe=await getStripe();   
     const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(b)
    });
    
    if(response.statusCode === 500) return;
    
    const data = await response.json();
    
    toast.loading('Redirecting...');
    
    stripe.redirectToCheckout({ sessionId: data.id });
      }
 return (
  <>
  <div  className={index===i?"b_mb b_mbActive":"b_mb"}>
   <h2 className="b_mb_name">{b?.midText}</h2>
   <div className="b_mb_timer"><CountdownMb b={b}/></div>
   <div className="b_mb_img"><img src={urlFor(b?.image)} alt="" />
  </div>
  <h4 className="b_mb_desc">{b?.desc}</h4>
  <div className="b_mb_price grid"><Text h2  
  css={{color:'	#a41a1a',font:'30px Days one',background:'white'}}>{b?.price}$</Text>
</div>
  </div>
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
      <div className="b_btnImg" onClick={handled}></div>
</div>
</div>
    </motion.div>
    </>
     
  
 );
}

export default HightLight;
