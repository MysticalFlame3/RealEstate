import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Userrouter from './routes/user.route.js';

dotenv.config();
const app = express();
console.log('Attempting to connect to MongoDB...');


mongoose
    .connect( "mongodb+srv://RealEstate:mongodb@realestate.spel1.mongodb.net/RealEstate?retryWrites=true&w=majority&appName=RealEstate")
    .then(() =>{
        console.log('Connected Successfully');
    })
    .catch((err)=>{
        console.log(err);
    });
    

app.listen(3000,()=>{
    console.log("Server is running on port 3000 ...")
});
app.use('/api',Userrouter);