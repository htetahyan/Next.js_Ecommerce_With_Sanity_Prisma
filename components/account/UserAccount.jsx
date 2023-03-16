import React,{useEffect} from 'react'
  import Link from 'next/link'


import { useSession, signIn, signOut } from 'next-auth/react'
import { User, Tooltip  } from '@nextui-org/react'
import Avatar from '@mui/material/Avatar';
import { useStateManager } from '../../state manager/Context'
import { parseCookies } from 'nookies'

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
    <Tooltip text="Sign out">
  <Avatar     onClick={() => signOut()}  sx={{ background:'green'}} {...stringAvatar(session.user.name)} />
    </Tooltip>
  )
}
function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name?.split(' ')?.[1]?.[0]}${name.split(' ')?.[2]?.[0]}`,
  };
}