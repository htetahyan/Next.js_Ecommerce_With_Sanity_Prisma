
import { useStateManager } from '../state manager/Context';
import { Modal, useModal, Button, Text, Grid } from "@nextui-org/react";
import { Image } from '@nextui-org/react';

import { urlFor } from '../lib/client';
import { toast, Toast } from 'react-hot-toast';
import { FaCcStripe } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { padding, textAlign } from '@mui/system';
import getStripe from '../lib/Stripe'
export default function App() {

  const media = {
    xs: `(max-width: '768px`,/* 
    sm: `(min-width: ${defaultTokens.breakpoints.sm})`,
    md: `(min-width: ${defaultTokens.breakpoints.md})`,
    lg: `(min-width: ${defaultTokens.breakpoints.lg})`,
    xl: `(min-width: ${defaultTokens.breakpoints.xl})`,
    xsMin: `(min-width: ${defaultTokens.breakpoints.xs})`,
    smMin: `(min-width: ${defaultTokens.breakpoints.sm})`,
    mdMin: `(min-width: ${defaultTokens.breakpoints.md})`,
    lgMin: `(min-width: ${defaultTokens.breakpoints.lg})`,
    xlMin: `(min-width: ${defaultTokens.breakpoints.xl})`,
    xsMax: `(max-width: ${defaultTokens.breakpoints.xs})`,
    smMax: `(max-width: ${defaultTokens.breakpoints.sm})`,
    mdMax: `(max-width: ${defaultTokens.breakpoints.md})`,
    lgMax: `(max-width: ${defaultTokens.breakpoints.lg})`,
    xlMax: `(max-width: ${defaultTokens.breakpoints.xl})`,
    motion: '(prefers-reduced-motion)',
    safari: 'not all and (min-resolution:.001dpcm)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)' */
  };
  const {addQty,minQty,qty,addToCart,totalQty,items,totalprice ,qtyContriol,Removeitem}=useStateManager()
  const [sort,setSort]=useState([])

  const handled=async()=> {
const stripe=await getStripe();   
 const response = await fetch('/api/stripe', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(items),
});

if(response.statusCode === 500) return;

const data = await response.json();

toast.loading('Redirecting...');

stripe.redirectToCheckout({ sessionId: data.id });
  }
  const { setVisible, bindings } = useModal(false);
  console.log(totalprice);
  return (
    <div className='cartContainer'>
      <Button className="cartIcon" auto flat onPress={() => setVisible(true)}>
   {items.length}
      </Button>
      <Modal
      css={{
        background:"#2d2d2d3e",backdropFilter:"blur(15px)" ,
        '@xs': {
        background:"#2d2d2d3e",backdropFilter:"blur(15px)",top:0,right:0,position:'absolute'
      },}}
        scroll
        fullScreen
        
        closeButton
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title"  css={{
            color:'0a1929',background:'$accents4',width:'80%',fontFamily:'days one',borderRadius:'4px',
            '@xs':{color:'white',fontWeight:'bold',font:'2rem days one',background:'none'}}}>
           There are {items.length} items in your cart
          </Text>
        </Modal.Header>
        <Modal.Body>
         
        {items.map(item=> (
          <Grid key={item._id}  className='cartBody' css={{
          display:'flex' ,alignItems:'center',display:'flex',color:'#0a1929' ,background:'$accents2',padding:'10px',
          height:'15%',justifyContent:'space-around',
            '@xs':{
          
              background:'#f3f3f3',alignItems:'center',display:'flex',color:'#0a1929', justifyContent:'space-between',borderRadius:'5px'}}}>
            <Text h4  css={{'@xs':{maxWidth:'20%',maxWidth:'10%',    fontSize:'1.5vw',},fontFamily:'days one',fontSize:'3vw',maxWidth:'15%',zIndex:'1'}}>{item.name}</Text>
      
        <img src={urlFor(item.image[0])} style={{
          maxHeight:'10vh'
        }} />
        <Text h1 css={{'@xs':{     fontSize:'3vw',
          fontFamily: 'days one',color:'$yellow700',display:'block'
        },display:'none'}}>{item.price}$</Text>
        <Button onClick={()=> qtyContriol(item._id,'dec')} 
       auto 
       color='error'
       css={{
        padding:'0 10px',
        fontSize:'6.5vw','@xs':{
          fontSize:'3vw',padding:'25px 20px'
        }}}
        >-</Button>
        <Text h1 css={{'@xs':{
          fontSize:'3vw',
        
        },fontSize:'7vw'}}>{item.quantity}</Text>
        <Button  color='error' auto css={{
        padding:'0 8px',
        fontSize:'6vw','@xs':{   padding:'25px 15px',
          fontSize:'2.5vw',textAlign:'center'
        }}} onClick={()=> qtyContriol(item._id,'inc')}>+</Button>
        <Text h1 css={{fontSize:'5vw',color:'$purple600','@xs':{
          fontSize:'3vw',
          fontFamily:' days one',
        }}} >{(item.price * item.quantity).toFixed(2)}$</Text>
<Text h1 css={{'@xs':{
        
          textAlign:'center',marginRight:'3%',fontSize:'3vw'
        },fontSize:'8vw',  fontFamily:'days one',color:'$red800'}}onClick={() => Removeitem(item)}>x</Text>
          </Grid>
        ))}
        <div className="payment">
          {items.length>0 ? <div style={{background:'#f6f6f6',textAlign:'center'}}><Text css={{letterSpacing:'1.5px'}} h2 >Total :{(totalprice).toFixed(2)}</Text></div>:<Text h3 css={{color:'white'}} >Your cart is empty at this moment!</Text>}

        </div>
        </Modal.Body>
        <Button 
        onClick={handled}
        css={{fontSize:'1.5rem',width:'4%',margin:'0 auto',alignItems:'center',background:'orange',boxShadow:'0 0 9px 2px black'}} iconRight={<FaCcStripe fill="currentColor" />} >
      Pay With

        </Button>
        <Modal.Footer>
          <Button flat auto color="secondary" onPress={() => setVisible(false)}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>

    </div>
  );
}
