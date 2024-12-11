"use server"
import { connectDb } from "../db/connectDb"
import Bittree from "../models/Bittree"
import User from "../models/User"

// create a bittree
export const createBittree = async (e) => {
    try {
        connectDb()
        const body = Object.fromEntries(e)
        delete body.$ACTION_ID_7fae2b78c1cf3e48d45a2684ee414ebc210d68af0c
        await Bittree.create({
            username: body.username,
            link: body.linkText,
            linkText: body.link
        })
        return {
            data: "Your Bittree has been created!",
            success: true
        }
    } catch (error) {
        console.log(error)
        return {
            data: "Error while creating bittree",
            success: false
        }
    }
}

// fetch bittrees according to username
export const fetchBittrees = async (username) => {
    connectDb()
    const userLinks = await Bittree.find({username: username})
    const plainLinks = userLinks.map((link)=>{
        const plainLink = {
            url: link.link,
            linktext: link.linkText
        }
        return plainLink
    })
    return {
        links: plainLinks,
        success: true
    }
}

// delete user credentials from the database, if user clicks on logout button
export const logoutUser = async (email)=>{
    try {
        connectDb()
        await User.findOneAndDelete(email)
        return {
            data: "User has been logged out!",
            success: true
        }
    } catch (error) {
        return {
            data: "Error while logging out user!",
            success: false
        }
    }
}