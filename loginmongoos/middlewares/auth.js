import jwt from "jsonwebtoken";
const{ verify }= jwt;

export default function authorization(req,res,next){
    try {
        let token = req.headers.authorization.split(" ")[1];
        let decodedToken = verify(token,process.env.SECRET_KEY);
        if(decodedToken){
            req.user = decodedToken;
            next();       
        }
    } catch (error) {
        console.log(error);
        res.status(403).send("Unauthorized access");
    }
}