import bcrypt from "bcrypt";
import userSchema from "./model/user.schema.js";
import jwt from "jsonwebtoken";
import notesSchema from "./model/notes.schema.js";

const { sign }=jwt;

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
        let { id } = req.user;
        let result = await notesSchema.create({
            note,
            userId:id
        })
        res.json("Note added successfully")
    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
    }
}

export async function getNote(req, res){
    try {
        let { id } = req.user;
        let result = await notesSchema.create({ userId:id });
        console.log(result);
        if(result>0){
            return res.status(200).send(result);
        }
        else{
            return res.status(200).send({ msg: "No notes to show" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
    }
}
