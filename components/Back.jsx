import { Button } from '@nextui-org/react'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { useStateManager } from '../state manager/Context'
function Back() {
    const {showBtn}=useStateManager()
    const media = {
      xs: `(max-width: '768px`}
    const router=useRouter()
  return (<>
 {showBtn?<Button auto onClick={() => router.push('/')} css={{margin:'$3',position:'absolute','@xs':{background:'#050f193e',fontWeight:'bold',width:'100px',margin:'$10'}}}>
    Back
   </Button>:null}</>

  )
}

export default Back