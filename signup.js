const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '1.1.1.1']);
const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const {z} = require("zod");
const {UserModel} = require("./db");
const jwt = require("jsonwebtoken")
const JWT_SECRET = "Bangalore"

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://admin:<password>@cluster0.zw62ehx.mongodb.net/week-5-db");
//create middleware for todo
//password hashing -  done 
//input validation - done
//try catch error - done

app.post("/signup" ,async function(req,res){
    const inputvalid = z.object({
        email : z.string().email(),
        password : z.string().min(5).max(50),
        name: z.string().min(3).max(50)
    })

    const zodsuccess = inputvalid.safeParse(req.body)

    if(!zodsuccess.success){
        res.json({
            msg:"Invalid input",
            error : zodsuccess.error.format()
        });
        return
    }

    const email = req.body.email
    const password = req.body.password
    const name = req.body.name
    
    try{
    const hashpassword = await bcrypt.hash(password,5)
    await UserModel.create({
        email : email,
        password : hashpassword,
        name : name
    });
    res.json({
        msg : "User signed UP !"
    });
     }catch(e){
        res.json({
            msg:"User already exists"
        })  
     }
});

app.post("/signin" ,async function(req,res){
    const email = req.body.email
    const password = req.body.password
    
    const user = await UserModel.findOne({
        email : email
    });
    if(!user){
        res.status(403).json({
            msg:"User not found in our db"
        });
        return
    }
    const decrypassword = await bcrypt.compare(password , user.password)
    if(decrypassword){
        const token = jwt.sign({
            id : user._id.toString()
        },JWT_SECRET);
        res.json({
            msg:"user sign in successfully" , 
            token : token
        });
    }else{
        res.status(403).json({
            msg:"Invalid creds"
        })
    }
});

app.listen(3000)
