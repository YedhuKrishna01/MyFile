import mongoose from "mongoose";
const Schema = new mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
});
export default mongoose.model.Users || mongoose.model("User",Schema);