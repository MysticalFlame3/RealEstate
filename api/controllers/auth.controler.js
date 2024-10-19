import User from "../models/users.models.js";
import bcrypt from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async(req,resg,next)=>{
    const{Username,email,password} = req.body;
    const hashpassword = bcrypt.hashSync(password,10);
    const newUser = new User({Username,email,password:hashpassword});
    try{
        await newUser.save();
        resg.status(201).json('User created Successfully');
    }catch(error){
        console.error('Signup error:', error); 
        next(errorHandler(550,'internal server error'));
    }

};