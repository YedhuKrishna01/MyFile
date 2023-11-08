import bcrypt from "bcrypt";
import userSchema from "./model/user.schema.js";
import jwt from "jsonwebtoken"

const {sign}=jwt;

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
        res.status(500).send("Error");
    }
}

export async function login(req,res){
    try {
        let { username, password } = req.body;
        if( username.length<4 && password.length<4 ){
            return res.json("Invalid")
        }
        let user = await userSchema.findOne({ username });
        if(!user){
            return res.status(403).send("Invalid");
        }
        let passCheck = await bcrypt.compare(password,user.password);
        if(passCheck){
            let token = await sign({
                username:user.username,
                id:user._id
            },
            process.env.SECRET_KEY,
            {
                expiresIn:"24h"
            })
            return res.status(200).json({
                msg:"Login successful..",
                token:token
            })
        }
        return res.status(403).send("invalid")
    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
    }
}

export async function profile(req, res){
    try {
        let user = req.user;
        let userDetails = await userSchema.findOne({_id:user.id},{password:0});
        if(userDetails){
            return res.json(userDetails);
        }
        return res.status(404).send("user not found");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
    }
}

export async function addNote(req, res){
    try {
        let { note } = req.body;
    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
    }
}
