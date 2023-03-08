import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import prisma from '../../../lib/prisma'



export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: '809617374304-25p20fash3dqudl7hil83jgq45mcd1lb.apps.googleusercontent.com',
      clientSecret: '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',
    }), 
  ],
})