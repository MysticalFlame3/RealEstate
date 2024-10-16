import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    Username:{
        type: String,
        Unique: true,
        required: true,
    },
    email:{
        type:String,
        Unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
},{timestamp:true});

const User = mongoose.model('User' , UserSchema);
export default User;