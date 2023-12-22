import mongoose from "mongoose";
const Schema=new mongoose.Schema({
    id:{
        type:Number
    },
    username:{
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