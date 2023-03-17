import React, { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import { client } from "../lib/client";

/* eslint-disable react/no-unknown-property */
import { useEffect } from "react";
import { useRouter } from "next/router";

import {useSession} from 'next-auth/react'
import Loader from "../components/Loader";
function Index({ products, banners }) {
const [loading,setLoading]=useState(false)
  const router = useRouter();
const {data:session}=useSession()
  useEffect(() => { 
   ! session&&setLoading(true);
   if (!session) {
    router.push("/signin");
  }
    setTimeout(() => {
      setLoading(false)
      async function checkAuth() {
        if (!session) {
          router.push("/signin");
        }
      }
      checkAuth();
    }, 2000);
 
  }, [router]);


  return (
   <> {loading?<Loader/>:<div>
  
      <Main products={products} banners={banners}>
      
      </Main>
    </div>}</>
  );
}

export default Index;

export const getServerSideProps = async () => {

  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const banners = await client.fetch(bannerQuery);

  return {
    props: { products, banners },
  };
};
