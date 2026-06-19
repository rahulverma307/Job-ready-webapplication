import { useContext } from "react";
import { authContext } from "../auth.context";
import {loginUser,registerUser,getMe,logoutUser} from "../services/auth.api.js"



export const useAuth=()=>{
    const context=useContext(authContext)
    const {user,setUser,loading,setLoading}= context

    const handleLogin=async({email,password})=>{
        setLoading(true)
        try{
            const response=await loginUser({email,password})
            setUser(response.user)
            setLoading(false)
        }catch(error){
            setLoading(false)
            throw error
        }
    }

    const handleRegister=async({email,password,username})=>{
        setLoading(true)
        try{
            const response=await registerUser({email,password,username})
            setUser(response.user)
            setLoading(false)
        }catch(error){
            setLoading(false)
            throw error
        }
    }

    const handleLogout=async()=>{
        setLoading(true)
        try{
            await logoutUser()
            setUser(null)
            setLoading(true)
        }catch(error){
            setLoading(false)
            throw error
        }
    }

    const handleGetMe=async()=>{
        setLoading(true)
        try{
            const response=await getMe()
            setUser(response.user)
            setLoading(false)
        }catch(error){
            setLoading(false)
            throw error
        }
    }

    return {user,setUser,loading,setLoading,handleLogin,handleRegister,handleLogout,handleGetMe}
}