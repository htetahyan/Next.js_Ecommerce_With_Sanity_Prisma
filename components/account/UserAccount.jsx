import React,{useEffect,useState} from 'react'
  import Link from 'next/link'


import { useSession,signOut } from 'next-auth/react'
import { Avatar,Button } from '@nextui-org/react'

import { useStateManager } from '../../state manager/Context'


function UserAccount() {

  const { data: session } = useSession()


  return (
    <>
      {session ? (
        <Profile />
      ) : (
        <Link href='/signin'>
        <button
          className="button-86 ml-10"
          role="button"
       
        >
          Sign In
        </button></Link>
      )}
    </>
  )
}

export default UserAccount

export const Profile = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
const{setRole}=useStateManager()
  const { data: session } = useSession()

const email=session.user.email

useEffect(() => {
    fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email}),
    })
      .then(response => response.json())
      .then(data => {
        // Handle successful response

        setRole(data.role)
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });


},[])

  return (
    <div className='usericon '  onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}>
 <Avatar text={session.user.name.toLocaleUpperCase()} size="md" color='warning' squared />
 {isHovering&&<div className='signout absolute right-5 '><Button css={{padding:'10px',marginTop:'2vh'}} size='auto' color='error' onClick={signOut()}>Sign Out!</Button></div>}
    </div>
  )
}