const mongoose= require('mongoose')
const express= require('express')
const dotenv = require("dotenv");
const path = require("path");
const fs=require('fs');
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const app=express();

app.use(express.json());
// app.use(cors());

const schema= new mongoose.Schema({
    user_id:Number,
    password: String,
    name: String
})


const connectionString = process.env.MONGO_URI; 
mongoose.connect(connectionString)
.then(() => console.log('Connected to the database…'))
.catch((err) => console.error('Connection error:', err));

app.get('/',(req,res)=>{
    res.send('home page')
})

app.get('/user', (req, res) => {
    // Serve user.html for /user route
    res.sendFile(path.join(__dirname, '../frontend/indexuser.html'));
  });
  
  app.get('/admin', (req, res) => {
    // Serve admin.html for /admin route
    res.sendFile(path.join(__dirname, '../frontend/indexadmin.html'));
  });

app.listen(3000,()=>{
    console.log("server is listening");
})