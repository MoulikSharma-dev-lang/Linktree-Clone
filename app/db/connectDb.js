import mongoose from "mongoose";

export const connectDb = ()=>{
    try {
        mongoose.connect(process.env.MONGODB_URI).then((response)=>{
            console.log(`MongoDB connected to ${response.connection.host}`)
        }).catch((error)=>{
            console.log(error)
        })
    } catch (error) {
        console.log(error)
    }
}