import mongoose from "mongoose";
const Schema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

});
export default mongoose.model.users || mongoose.model("user",Schema);