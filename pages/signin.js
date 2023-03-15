/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { signIn ,useSession} from "next-auth/react";
import { toast } from "react-hot-toast";
import { useStateManager } from "../state manager/Context";
import { Button, Grid, Loading } from "@nextui-org/react";
import {getSession} from 'next-auth/react'
function Signin() {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [load,setLoad]=useState(false)
    const { data: session } = useSession()
  const router=useRouter()
  
  if (session) {
    router.push("/");
    return null;
  }

    const Handler = async (e) => {
        event.preventDefault();

        const result= await signIn("credentials", {
          redirect: false,
          email,
          password,
        });
    
        if (result.error) {
        toast.error('Wrong Email or Password!')
        } else {
    setLoad(true)
      toast.closeDelay = 3000;
           toast.success('welcome')
setTimeout(() => {
    router.push('/')
}, 2000);
      

        }
    };
  return (
    <div className="relative flex flex-col justify-center min-h-[80vh]  overflow-hidden  auth-forms">

    <div className="w-full p-6 m-auto bg-[#0e1929] rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl forms">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy" style={{fontFamily:'days one'}}>
          Marketify
        </h1>
        <form className="mt-6" onSubmit={Handler}>
            <div className="mb-2">
                <label
                    for="email"
                    className="block text-sm font-semibold "
                >
                    Email
                </label>
                <input
                    type="email"
                    value={email}
                    placeholder="htetahyan@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
                <label
                    for="password"
                    className="block text-sm font-semibold "
                >
                    Password
                </label>
                <input
                    type="password"
                    placeholder="*******"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <a
                href="#"
                className="text-xs text-purple-600 hover:underline"
            >
                Forget Password?
            </a>
            <div className="mt-6">
                <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                {    load? <Loading type="points" color="currentColor" size="sm" />: 'Sign in'}
                </button>
            </div>
        </form>

        <p className="mt-8 text-sm font-light text-center bold ">
            {" "}
            Don't have an account?{" "}
            <Link href='/register'>
            <h7
                href="#"
                className="font-medium text-md text-purple-600 hover:underline"
            >
                Register
            </h7></Link>
        </p>
    </div>
</div>
  )
}

export default Signin