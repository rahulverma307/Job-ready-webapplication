const express= require("express")
const authRouter = require("./routes/auth.routes.js")


const app = express()// server ko initiate karna

app.use(express.json())//middleware


//routes

/**using all the routes here */
app.use("/api/auth",authRouter)



module.exports=app