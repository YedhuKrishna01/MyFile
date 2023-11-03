import UserSchema from "./schemas/UserSchema.js";
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