import React from 'react'
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import {urlFor} from '../lib/client'
import Link from 'next/link';

function Product({
  p:{image,name,slug,price,cathegory}
}) {
  return (
    
    <Card css={{ w: "100%", h: "300px",justifySelf:'center'}}>
     <Link href={`/product/${slug.current}`}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 1 }}>
      <Col>
        <Text size={25} className='pd_txt'  weight="bold" 
         color='cyan'
        transform="uppercase" >
         {name}
        </Text>
       
      
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0,background:'#0e1129',}}>
      <Card.Image
      className='pd_img'
        src={urlFor(image && image[0])}
        objectFit="cover"
        width="70%"
        height="70%"
        alt="Relaxing app background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col span={3}>
              <Card.Image
                src="https://nextui.org/images/breathing-app-icon.jpeg"
                css={{ bg: "black", br: "50%" }}
                height={40}
                width={40}
                alt="Breathing app icon"
              />
            </Col>
            <Col>
              <Text color="#d1d1d1" size={15}>
                {price}$
              </Text>
              <Text color="#d1d1d1" size={12}>
              {cathegory}
              </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button
              flat
              auto
              rounded
              css={{ color: "#94f9f0", bg: "#94f9f026" }}
            >
              <Text
                css={{ color: "inherit",letterSpacing:'1.5px' }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
               Details!
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
    </Link>
  
  </Card>
 
  )
}

export default Product