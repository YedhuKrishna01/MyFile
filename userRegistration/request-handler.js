import bcrypt from "bcrypt";
import userSchema from "./model/user.schema.js";
export async function register(req,res){
    try {
        let { username, password } = req.body;
        if( username.length<4 && password.length<4 ){
            return res.json("Invalid")
        }
        let hashedPass = await bcrypt.hash(password, 10);
        let userExist = await userSchema.findOne({ username});
        if(userExist){
            return res.status(401).send("Already Exists");
        }
        let result = await userSchema.create({ username, password: hashedPass});
        return res.status(200).send("Successfull");
    } catch (error) {
        console.log(error);
        res.status(200).send("Error");
    }
}
