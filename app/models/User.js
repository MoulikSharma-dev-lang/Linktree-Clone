import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    image: {type: String, required: true},
    provider: {type: String},
})

const User =  mongoose.models.Login || mongoose.model("Login", userSchema)
export default User