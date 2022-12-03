import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"


export default NextAuth({

    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorization: {
                params: {
                  access_type: "offline",
                  response_type: "code"
                }}
        })
    ], 
    secret: process.env.JWT_SECRET
})
