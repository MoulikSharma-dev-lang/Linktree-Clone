import mongoose from "mongoose";

const bittreeSchema = new mongoose.Schema({
    username: {type: String, required: true},
    linkText: {type: String, required: true, unique: true},
    link: {type: String, required: true, unique: true}
})

const Bittree =  mongoose.models.Bittree || mongoose.model("Bittree", bittreeSchema)
export default Bittree