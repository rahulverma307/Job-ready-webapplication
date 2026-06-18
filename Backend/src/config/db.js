const dotenv = require("dotenv").config();
const  mongoose  = require("mongoose");



const connectDB=async()=>{
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log(`DB is connected Successfully`);
    
  } catch (error) {
    console.log("DB is not Connected",error);
    
  }
}

module.exports=connectDB