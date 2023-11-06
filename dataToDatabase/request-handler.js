import UserSchema from "./schemas/user.schema.js";
import loginSchema from "./schemas/login.schema.js";
export async function setData(req,res){
    try{
        let {id,firstname,lastname,email,password}=req.body;
        console.log(req.body);
        let result = await UserSchema.create({id,firstname,lastname,email,password})
        res.status(200).send(result);
    }catch(error){
        console.log(error);
        res.json("ERROR")
    }
}
export async function getData(req,res){
    try{
        let { id } = req.query;
        console.log(req.query)
        let data=await UserSchema.findOne({id:id});
        res.json(data);
    }catch(error){
        console.log(error);
        res.status(500).send("Some error");
    }
}
export async function updateData(req,res){
    try{
        let {id}=req.query;
        let data =req.body;
        let result = await UserSchema.updateOne({_id:id},data);
        res.json(result);
    }catch(error){
        console.log(error);
        res.status(500).send("Some error");
    }
}
export async function deleteData(req,res){
    try{
        let {id}=req.query;
        let result = await UserSchema.deleteOne({_id:id});
        res.json(result);
    }catch(error){
        console.log(error);
        res.json("Some error");
    }
}
export function users(req,res) {
    try {
       let id =req.params;
       console.log(id);
       console.log(req.query);
       res.status(200).send("userdata")
    } catch (error) {
        console.log(error);
        res.json("Error")
    }
}

export async function register(req,res){
    try {
        let { username,password } = req.body;
        if(password.length <4){
            return res.json("Invalid pass");
        }
        let user = await loginSchema.findOne({username})
        let hashedPass=await bcrypt.has(password,10)
        if(user){
            return res.json("user already exists");
        }
        let result = await loginSchema.create({username,password:hashedPass});
        return res.json(result);
    } catch (error) {
        console.log(error);
        res.json("error occured");
    }
}

export async function login(req,res){
    try {
        let { username,password } = req.body;
        let user = await loginSchema.findOne({ username });
        let validation = await bcrypt.compare(password,user.password);
        if(validation){
            return res.json("login successfull");
        }
        return res.json("incorrect username or password");
    } catch (error) {
        console.log(error);
        res.json("error occured")
    }
}