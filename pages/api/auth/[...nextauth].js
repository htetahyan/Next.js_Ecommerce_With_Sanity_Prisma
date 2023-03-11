import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import prisma from '../../../lib/prisma'



export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [ process.env.VERCEL_ENV === "preview"
  ? CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jsmith",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize() {
        return {
          id: 1,
          name: "J Smith",
          email: "jsmith@example.com",
          image: "https://i.pravatar.cc/150?u=jsmith@example.com",
        }
      },
    })
  :
    GoogleProvider({
      clientId: '809617374304-2o9kf56n7j4if2b46at4lovml1q8gaoh.apps.googleusercontent.com',
      clientSecret: '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',
    })
  ], secret: 'IamVeryHandsome' 
  
})