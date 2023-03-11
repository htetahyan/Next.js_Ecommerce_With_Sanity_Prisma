import React from 'react'
import {useSession, signIn,signOut} from 'next-auth/react'
import { User,Tooltip } from "@nextui-org/react";

function UserAccount() {
   const media = {
      xs: `(max-width: '768px`,}
   const  {data:session}=useSession();
 console.log(session);
  return (
    <>
       {session? <Profile/>:<button className="button-86 ml-10" role="button" onClick={() => signIn('google',{callbackUrl: 'https://marketify.vercel.app/'})}>Sign In</button>}
    </>
   )
}

export default UserAccount
export const Profile=()=> {
   const  {data:session}=useSession();
return(
<User css={{marginLeft:'23%'}} onClick={()=> signOut('google')}
src={session.user.image}
      name={session?.user?.name}
      zoomed
    />
)
}
 