import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Userrouter from './routes/user.route.js';
import route from './routes/auth.route.js';


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
    
app.use(express.json());
app.listen(3000,()=>{
    console.log("Server is running on port 3000 ...")
});
app.use(express.json());
app.use('/api',Userrouter);
app.use('/api/auth',route);
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode,
    });

});