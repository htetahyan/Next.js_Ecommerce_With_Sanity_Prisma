import React, { useEffect } from "react";
import { useState } from "react";

import Link from 'next/link'

import { Button, Text} from '@nextui-org/react';
import {client,urlFor} from '../../lib/client'
import{ Image }from "@nextui-org/react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateManager } from "../../state manager/Context";
//handle review
import Rating from '@mui/material/Rating';

function ProductPage({ product, products }) {
  const { _id,image, name, details, price } = product;
  //review
  const [value, setValue] =useState(4.5);
const {addQty,minQty,qty,addToCart }=useStateManager()


  return (
    <><Link href='/'>
      <Button size='sm' color='gradient' icon={<KeyboardBackspaceIcon/>} className='ml-2 mb-2'>Back</Button>
      </Link>   

    <div className="pdPage">
   
      <div className="p_left" > 
      <div className="p_left_header flex justify-between">
             <Text h1 css={{font:'30px Days One'}}>{name}</Text>
             <div className="p_left_header_review"> <Rating
         size="large"   precision={0.5}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /><h2 className="text-end">{value}</h2></div>
            </div>
        <Image className="p_img"
        objectFit="contain" src={urlFor(image?.[0])}/>
        <div className="p_fav flex items-center"> 
        <h2 className="px-2">{price}$</h2>
         <Button
         size='md'
      color='error'
        icon={<FavoriteIcon fill="currentColor" filled />}
      > Add to Wishlist</Button></div>
    
        
        </div>
        <div className="p_right">
          <h1 className="tracking-wide">Details</h1>
          <div className="p_right_detail px-6 ">
            <h3>
              {details}
            </h3>
          </div>
          <h2 className="justify-self-center tracking-wider flex"  style={{fontFamily:'Days one'}}>Final Price__ <h2 className=" tracking-wide flex text-yellow-700"> {(price*qty).toFixed(2)}$</h2></h2>
          <div className="quantity border-2">
          <h3 className="q_btn" onClick={minQty}>-</h3>
          <h2>{qty}</h2>
          <h3 className="q_btn" onClick={addQty}>+</h3>
          </div>
          <Button        
         className="p_cart"
        animated={true} 
       ripple={true}  iconRight={<ShoppingCartIcon fill="currentColor" filled />} onClick={() => addToCart(product,qty)}
      > Add to cart</Button>
        </div>
      
    </div>
     </>
  );
}

export default ProductPage;

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;

  const products= await client.fetch(query);

  const paths = products.map((p) => {
    return{ 
    params: {
      slug: p.slug.current,
    }}
});

  return {
    paths,
    fallback: "blocking",
  };
};  

export const getStaticProps = async ({ params: { slug } }) => {


  
   const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { product, products },
  };
};
