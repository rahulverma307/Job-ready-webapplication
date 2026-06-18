const userModel = require("../models/user.model.js");


/**
 * @name registerUserController
 * @description Register a new user
 * @route POST /api/auth/register
 * @access Public
 */
const registerUser=async(req,res)=>{
 const {username,email,password}=req.body;

 if(!username || !email || !password){
    return res.status(400).json({message:"Please provide username,email,password"})
 }

 const isUserAlreadyExits=await userModel.findOne({
    $or:[{username},{email}]
 })
 if(isUserAlreadyExits){
    return res.status(400).json({message:"User already exists"})
 }

 const user = await userModel.create({username,email,password})

 return res.status(201).json({message:"User registered successfully",user})
}



module.exports={registerUser}