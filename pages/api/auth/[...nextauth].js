// pages/api/auth/[...nextauth].js

import NextAuth from "next-auth";
import prisma from "../../../lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";


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
 /* 
  callbacks: {
    async session(session, token) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }return token
    },    session: {
      jwt: true,
      maxAge: 30 * 24 * 60 * 60,
    },  pages: {
      signIn: "/sigin",
    },
  
  }, */
  secret:"IHateThisDaySucks",
  pages: {
    signIn: "/auth/signin",

  },
  callbacks: {
    jwt(params) {
      // update token
      if (params.user?.role) {
        params.token.role = params.user.role;
      }
      // return final_token
      return params.token;
    }, 
  },
});
