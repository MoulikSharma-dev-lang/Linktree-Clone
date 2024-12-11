import NextAuth from "next-auth";
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import { connectDb } from "@/app/db/connectDb";
import User from "@/app/models/User";

const authOptions = NextAuth({
    providers: [
        Github({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],
    callbacks: {
        signIn: async ({ user, account, profile }) => {
            try {
                connectDb()
                const { name, email, image } = user
                const foundUser = await User.findOne({ email: email })
                if (!foundUser) {
                    await User.create({
                        name: name,
                        email: email,
                        image: image,
                        provider: account.provider
                    })
                } else {
                    console.log("This user already exists!")
                }
                return true
            } catch (error) {
                console.log(error)
                return false
            }
        }
    }
})

export { authOptions as GET, authOptions as POST }