const mongoose  = require("mongoose");


const userSchema = new mongoose.Schema({
username:{
        type:String,
        unique:[true,"Username already exists"],
        trim:true,
        required:[true,"Username is required"],
        
    },
    email:{
        type:String,
        unique:[true,"Email already exists"],
        trim:true,
        required:[true,"Email is required"],
        match:[
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email address"
        ]
    },
    password:{
        type:String,
        required:[true,"Password is required"],

        
    }
})

const userModel=mongoose.model("User",userSchema)

module.exports=userModel