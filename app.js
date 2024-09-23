const express = require('express');
const app = express()
const db = require("./config/mongoose");
db();
const userModel = require("./models/userSchema")

app.get('/',async(req,res)=>{
    const newUSer = await userModel.create({

    
    username: "test",
    password: "test",
    email: "a@a.com"
})
res.send(newUSer)
})
app.get('/read',async(req,res)=>{
    const user = await userModel.findOne({
        username:"test"
    })
    res.send(user)
})
app.get('/update',async(req,res,next)=>{
    const updateUSer = await userModel.findOneAndUpdate({
        username:"test"
    },{
        email:"a@ahh.com"
    },{
        new:true
    })
    res.send(updateUSer)
})

app.get('/',(req,res)=>{
 res.send("hello world")
})
app.listen(3000,() => {
    console.log('server is running on port 3000')
})