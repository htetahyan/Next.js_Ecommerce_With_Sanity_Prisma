
/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import Link from 'next/link' 
import { toast } from "react-hot-toast";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
const [name,setName]=useState('')
const [message, setMessage] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name,email, password }),
      
    });
    const data = await response.json();

    if (response.ok) {
   toast.success('Successfully registerd your account please sign In to continue!')
   
   router.push('signin')
    } else {
      setMessage(data.message);
 

    }
  
  }
  

  return (
 
    <div className="relative flex flex-col justify-center min-h-[80vh]  overflow-hidden auth-forms">

    <div className="w-full p-6 m-auto bg-[#0e1929] rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl forms">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy" style={{fontFamily:'days one'}}>
          Marketify
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
        <div className="mb-2">
                <label
                    for="user"
                    className="block text-sm font-semibold "
                >
                Username
                </label>
                <input
                    type="text"
                    placeholder='htetahyan'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
                <label
                    for="email"
                    className="block text-sm font-semibold "
                >
                    Email
                </label>
                <input
                    type="email"
                    placeholder='htetahyan@gmail.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
                <label
                    for="password"
                    className="block text-sm font-semibold"
                >
                    Password
                </label>
                <input
                    type="password"
                    value={password}
                    placeholder='********'
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
         
            <div className="mt-6">
                <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Register
                </button>
            </div>
            {message && <p style={{color:'red'}}>User Existed!</p>}
            
        <p className="mt-8 text-sm text-bold font-light text-center ">
            {" "}
            Already have an accountt?{" "}
            <Link href='/signin'>
            <h7
                href="#"
                className="font-medium text-purple-600 hover:underline"
            >
           Sign in
            </h7></Link>
        </p>
        </form>

    
    </div>
</div>
  );
}
