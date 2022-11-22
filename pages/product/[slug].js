import React, { useState } from "react";
import Link from 'next/link'
import { Button} from '@nextui-org/react';
import {client,urlFor} from '../../lib/client'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import FavoriteIcon from '@mui/icons-material/Favorite';

//handle review
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
function ProductPage({ product, products }) {
  const { image, name, details, price } = product;
  //review
  const [value, setValue] = useState(0);
console.log(product,products);
  return (
    <div className="pdPage">
        <div className="back">
          <Link href='/'>
       
            <Button auto icon={<KeyboardBackspaceIcon  fill="currentColor" />} color="gradient">
        Back to Home Page
      </Button>
            </Link>
        </div>
      <div className="container p">

        <div className="p_intro grid align-center justify-center">
          <div className="p_headers grid "><h1 className="text-center">{name}</h1>
       <div className="p_review flex align-center ">
       <Rating
       className="p_star"
         name="simple-controlled"
         value={value}
         onChange={(event, newValue) => {
           setValue(newValue);
         }}
       />
       <h5 className="px-3 ">3.8</h5>
       </div>
      </div>
          
        <img src={urlFor(image && image[0])} alt=""  className="p_img"/>
       <Button icon={<FavoriteIcon fill="currentColor" />  } shadow color="gradient" auto>
          Add to Favourite
        </Button>
        </div>
       
        <div className="p_detailsBx">
     <h2 className="text-cyan-300">Product Detail</h2>
     <div className="p_detail">
      <p>{details}</p>
     </div>
     <div className="p_buy  align-center justify-around px-20 grid -mt-5">
      <h1>Winter Sale</h1>
     <h2 className="text-yellow-500 text-md  align-self-center text-center">{price}$</h2>
     <Button color='gradient' className="flex align-center mt-2 align-self-center "><h4 className="text-center  mt-2">Add to cart</h4></Button>
     </div>
    
        </div>
      </div>
      
    </div>
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
