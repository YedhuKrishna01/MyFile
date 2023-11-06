import UserSchema from "./schemas/userschemas.js";
import loginSchema from "./schemas/login.schema.js";
import bcrypt from "bcrypt";

export async function setData(req ,res) {
    try{
         let {id,username,firstname,lastname,email,phone,password} =req.body;
         let result= await UserSchema.create({id,username,firstname,lastname,email,phone,password});
         console.log(req.body);

         res.status(200).send(result);
    }catch  (error) {
      console.log(error);
      res.json("ERROR")
    }
}
export async function getData(req,res){
try {
  let{id}= req.query;
     let data = await UserSchema.find();
     res.json(data);
} catch (error) {
  console.log(error);
  res.status(500).send("some error");
}

}


export async function getData2(req,res){
  try {
       let{id}= req.query;
       let data = await UserSchema.findOne({id:id});
       res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("some error");
  }
  
  }
export async function updateData(req,res) {
  try {
    let {id} = req.query;
    let data = req.body;
    let result = await UserSchema.updateOne({_id: id},data);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.json("some error occured");
    
  }
}
export async function deleteData(req,res) {
  try {
    let {id} =req.query;
    let result=await UserSchema.deleteOne({_id: id})
    res.json(result);
  } catch (error) {
    console.log(error);
    res.json("some errors occured")
    
  }
}


export function users(req ,res) {
  try{
       let id=req.params
       console.log(id);
       console.log(req.query)
       res.status(200).send("data")
  }catch  (error) {
    console.log(error);
    res.json("ERROR")
  }
}
export async function register(req,res){

  try {
    let {username , password} = req.body;
    if(password.length<4) {
    return res.json("invalid pass");
       
    }
    let user = await loginSchema.findOne({username})
    let hashedpass = await bcrypt.hash(password,10)
    if (user) {
      return res.json("user already exists");
    }
    let result = await loginSchema.create({ username,password:hashedpass});
  } catch (error) {
    console.log(error);
    res.json("Error occured")
  }
}
export async function login(req,res){
  try {
    let {username,password } =req.body;
    let user= await loginSchema.findOne({username});
    let validation = await bcrypt.compare(password,user.password);
    if(validation) {
        return res.json("Login successful");
    }
  
  
  return res.json("Incorrect username or password");

  } catch (error) {
    console.log(error);
    res.json("Error occured")
    
  }

      }
