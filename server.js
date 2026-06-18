 require("dotenv").config()
const app= require("./src/app.js");
const connectDB = require("./src/config/db.js");

const PORT=process.env.PORT ||5000;



const start =()=>{
    //db
    connectDB()
    app.listen(PORT,()=>{
        console.log(`Server is Running on ${PORT}`);
        
    })
}
start()

