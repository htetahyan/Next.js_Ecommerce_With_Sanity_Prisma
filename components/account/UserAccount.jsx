import React from 'react'
import {useSession, signIn,signOut} from 'next-auth/react'
import { User,Tooltip } from "@nextui-org/react";

function UserAccount() {
 
   const  {data:session}=useSession();
 
  return (
    <>
       {session? <Profile/>:<button className="button-86" role="button" onClick={() => signIn('google')}>Sign In</button>}
    </>
   )
}

export default UserAccount
export const Profile=()=> {
   const  {data:session}=useSession();
return(
<User onClick={()=> signOut('Google')}
src={session.user.image}
      name={session?.user?.name}
      zoomed
    />
)
}
 