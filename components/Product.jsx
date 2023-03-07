import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div className='ml-4'>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            style={{maxWidth:'250px',minWidth:'200px'}}
            className="product-image"
          />
          <p className="product-name text-[#0b3b44]">{name}</p>
          <p className="product-price  text-red-500">${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product