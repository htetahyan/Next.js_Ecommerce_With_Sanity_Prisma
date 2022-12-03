import React from 'react'
import { Card, Grid, Row, Text} from "@nextui-org/react";
import { urlFor } from '../../lib/client';
import { Avatar } from '@mui/material';
import Link from 'next/link'
function Category({ p: { image, name, slug, price, category } }) {

  return (
    <Grid xs={6} sm={3}className='cards' >
      <Card isPressable disableAnimation='false' className='card'>
      <Card.Header className='card_header'>
      <Text b className='card_name' >{name}</Text>
        </Card.Header>
        <Link href={`/product/${slug?.current}`}>
        <Card.Body css={{ p:'0'}} className='card_body'>
          <Card.Image
          className='card_img'
            src={urlFor(image?.[0])}
            objectFit="contain"
            width="100%"
            height={140}
          />
        </Card.Body>
        <Card.Footer css={{ justifyItems: "flex-start" }} className='card_footer'>
          <Row wrap="wrap" justify="space-between" align="center">
          <Avatar  sx={{ width: 24, height: 24 }} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Text size={12} className='card_price' css={{ fontWeight: "$semibold", fontSize: "$lg" }}>
              {price}$
            </Text>
          </Row>
        </Card.Footer>
        </Link>
      </Card>
    </Grid>
)
}

export default Category