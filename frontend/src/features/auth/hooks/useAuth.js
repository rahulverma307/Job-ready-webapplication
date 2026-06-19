import { useContext } from "react";
import {authContext} from "../auth.context.jsx"
import {loginUser,registerUser,getMe,logoutUser} from "../services/auth.api.js"


export const useAuth=()=>{
    const context=useContext(authContext);
    const {user,setUser,loading,setLoading} =context;

const handleLogin=async({email,password})=>{
    setLoading(true);
    try {
        const data=await loginUser({email,password});
        setUser(data.user);
        return data;
    } catch (error) {
        console.log(error);
    }finally{
        setLoading(false);
    }
}

const handleRegister=async({username,email,password})=>{
    setLoading(true);
    try {
        const data=await registerUser({username,email,password});
        setUser(data.user);
        return data;
    } catch (error) {
        console.log(error);
    }finally{
        setLoading(false);
    }
}


const handleLogout=async()=>{
    setLoading(true);
    try {
        const data=await logoutUser();
        setUser(null);
        return data;
    } catch (error) {
        console.log(error);
    }finally{
        setLoading(false);
    }
}



return {
    user,
    loading,
    handleLogin,
    handleRegister,
    handleLogout
}

}