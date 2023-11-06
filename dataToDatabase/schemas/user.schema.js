import mongoose from "mongoose";
const Schema = new mongoose.Schema({
    id:{
        type:Number
    },
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
export default mongoose.model.users || mongoose.model("user",Schema);