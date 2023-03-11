import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import prisma from '../../../lib/prisma'



export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: '809617374304-2o9kf56n7j4if2b46at4lovml1q8gaoh.apps.googleusercontent.com',
      clientSecret: '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',
    })
  ],
  secret: 'IamVeryHandsome' 
  
})