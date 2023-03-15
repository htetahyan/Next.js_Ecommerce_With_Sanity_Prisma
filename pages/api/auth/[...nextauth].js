// pages/api/auth/[...nextauth].js

import NextAuth from "next-auth";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const prisma = new PrismaClient();

export default NextAuth({

  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
          
        });
        if (!user) {
          throw new Error("No user found");
        }
console.log(credentials);
      
        if (credentials.password!=user.password) {
          throw new Error("Incorrect password");
        }

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },

secret:'iAmGay',
  callbacks: {
    jwt(params) {
    
      if (params.user?.role) {
        params.token.role = params.user.role;
      }
   
      return params.token;
    }, 
  },
});
