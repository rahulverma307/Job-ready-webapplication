const {Router}= require("express");
const { registerUser, loginUser, logoutUser } = require("../controllers/auth.controllers.js");
const cookieParser = require("cookie-parser");

const authRouter =Router()

authRouter.use(cookieParser())

/**
 * @description Register a new user
 * @route POST /api/auth/register
 * @access Public
 */
authRouter.post("/register",registerUser)

/**
 * @description Login a user
 * @route POST /api/auth/login
 * @access Public
 */
authRouter.post("/login",loginUser)

/**
 * @description Logout a user
 * @route GET /api/auth/logout
 * @access Public
 */
authRouter.get("/logout",logoutUser)

module.exports=authRouter