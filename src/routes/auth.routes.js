const {Router}= require("express");
const { registerUser } = require("../controllers/auth.controllers.js");

const authRouter =Router()

/**
 * @description Register a new user
 * @route POST /api/auth/register
 * @access Public
 */
authRouter.post("/register",registerUser)

module.exports=authRouter