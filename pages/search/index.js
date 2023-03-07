import React from 'react'
import { client } from '../../lib/client'
function index({products}) {
  return (
    <div className='searchPage'>
     
    </div>
  )
}

export default index

export const getServerSideProps = async () => {
    const productQuery = '*[_type == "product"]';
    const products = await client.fetch(productQuery);
  
    const bannerQuery = '*[_type == "banner"]';
    const banners = await client.fetch(bannerQuery);
  
    return {
      props: { products, banners },
    };
  };
  