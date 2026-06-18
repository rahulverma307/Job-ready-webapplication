const userModel = require("../models/user.model.js")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const blackListModel = require("../models/blacklist.model.js");


/**
 * @name registerUserController
 * @description Register a new user account and generate a JWT token.
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

 const hash= await bcrypt.hash(password,10)

 const user = await userModel.create(
   {
      username,
      email,
      password:hash
   })


 const token = jwt.sign(
   {id:user._id,username:user.username},
   process.env.JWT_SECRET,
   {expiresIn:"1h"})

   res.cookie("token",token)
 
 return res.status(201).json({message:"User registered successfully",
   user:{
      _id:user._id,
      username:user.username,
      email:user.email
   }})
}


/**
 * @name loginUserController
 * @description Authenticate a user and generate a JWT token.
 * @route POST /api/auth/login
 * @access Public
 */

const loginUser=async(req,res)=>{
   const {email,password}=req.body;

   if(!email || !password){
      return res.status(400).json({message:"Please provide email and password"})
   }

   const user= await userModel.findOne({email})
   if(!user){
      return res.status(400).json({
         message:"Invalid email or password"
      })
   }

   const isPasswordValid = await bcrypt.compare(password,user.password)
   if(!isPasswordValid){
      return res.status(404).json({
         message:"email and Password is not  valid"
      })
   }

   const token = jwt.sign(
      {id:user._id,username:user.username},
      process.env.JWT_SECRET,
      {expiresIn:"1d"}

   )

   res.cookie("token",token)
   res.status(200).json({
      message:"User login Successfully",
      user:{
          _id:user._id,
          username:user.username,
          email:user.email
      }
   })

}

/**
 * @name logoutUserController
 * @description Logout the current user and invalidate the JWT token.
 * @route POST /api/auth/logout
 * @access Private
 */

const logoutUser=async(req,res)=>{
   const token =req.cookies.token;
   if(!token){
      return res.status(400).json({message:"No token found"})
   }
   const blackList = await blackListModel.create({token})
   res.clearCookie("token")
   res.status(200).json({message:"User logged out successfully"})
}

/**
 * @name getMeController
 * @description Retrieve the currently authenticated user's profile.
 * @route GET /api/auth/get-me
 * @access Private
 */

const getMeController=async(req,res)=>{
 const user = await userModel.findById(req.user.id)
 if(!user){
    return res.status(404).json({message:"User not found"})
 }
 return res.status(200).json({
    message:"User fetched successfully",
    user
 })
}


module.exports={
   registerUser,
   loginUser,
   logoutUser,
   getMeController
}