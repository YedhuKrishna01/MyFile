import express from "express";
import path from "path";
import mongoose from "mongoose";
import { dirname } from "path";
import { fileURLToPath} from "url";
import userSchema from "./models/user.schema.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
dotenv.config();

const { sign } = jwt;
const port = 3000;
mongoose.connect(process.env.DB_URI);
const app = express();
const _dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(_dirname,'public')));

app.get("/", (req, res) => {
    res.sendFile(_dirname+'/public/html/index.html');
});

app.get("/register", (req, res) => {
    res.sendFile(_dirname+'/public/html/register.html');
});

app.post("/register",async(req,res)=>{
    try {
        const { username, email, password, password2 } = req.body;

        if (password !== password2) {
        return res.status(400).json({ message: 'Passwords do not match' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new userSchema({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();
        const token = sign({ username: newUser.username }, process.env.SECRET_KEY, { expiresIn: '24h' });
        res.status(201).json({ message: 'User registered successfully',token });
    } catch (error) {
        res.sendFile(_dirname+'/public/html/login.html');
    }
})

app.get("/login", (req, res) => {
    res.sendFile(_dirname+'/public/html/login.html');
});

app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(req.body)
      const log = req.body;
      // Use userSchema model to find the user by email
      const hello = await userSchema.findOne({ email });
      console.log(hello)
      if (hello.email===log.email) {
        return res.sendFile(_dirname+'/public/html/profile.html')
      }else{
        return res.status(500).json({ message:"nope"})
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Input credential are inaccurate' });
      }
  
    //   const passwordMatch = await bcrypt.compare(password, user.password);
  
    //   if (!passwordMatch) {
    //     return res.status(401).json({ message: 'Invalid credentials' });
    //   }
  
    //   const token = sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '24h' });
  
    //   res.redirect(`/profile?token=${token}`);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
// });

    });
app.get("/profile", (req, res) => {
    res.sendFile(_dirname+'/public/html/profile.html');
});

app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
});
