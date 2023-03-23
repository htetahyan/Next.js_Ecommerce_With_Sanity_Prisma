import React, { useEffect } from 'react'
import Link from 'next/link'

import {AiFillHome} from 'react-icons/ai'
import { Text } from '@nextui-org/react'
import {Button} from '@nextui-org/react'
import { useStateManager } from '../state manager/Context'
function Success() {
    const {setitems,setTotalPrice,setTotalQty}=useStateManager()

useEffect(()=> {
localStorage.clear();
setTotalPrice(0);
setTotalQty(0);

},[])
  return (
    <div className='w-screen h-screen grid'>
      <Text h1 css={{color:'green',fontFamily:'days one',textAlign:'center'}} >Thank You for purchasing</Text>
      <div style={{justifySelf:'center',alignSelf:'center'}}>
      <Link href='/'>
        <Button iconRight={<AiFillHome/>} color='error'>
          Back to Home Page
        </Button>
      </Link>
      </div>
      <Text h3 css={{color:'green',fontFamily:'days one',justifySelf:'center',alignSelf:'center'}} >Check Your inbox!</Text>
     
    </div>
  )
}

export default Success