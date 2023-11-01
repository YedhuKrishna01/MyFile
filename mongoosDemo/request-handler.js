import UserSchema from "./schemas/UserSchema.js";
export async function setData(req,res){
    try{
        let {id,name}=req.body;
        console.log(req.body);
        let result = await UserSchema.create({id,name})
        res.status(200).send(result);
    }catch(error){
        console.log(error);
        res.json("ERROR")
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