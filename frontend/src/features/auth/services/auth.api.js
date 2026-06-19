import axios from "axios";

// repeated code ko 

const api = axios.create({
    baseURL: "http://localhost:3000/api/auth",
    withCredentials: true
});

export const registerUser = async (username,email,password) => {
    try {
        const response = await axios.post("http://localhost:3000/api/auth/register", {
            username,
            email,
            password
        },{
            withCredentials:true
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export const loginUser = async (email,password) => {
    try {
        const response = await api.post("/login", {
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export const logoutUser = async () => {
    try {
        const response = await api.post("/logout", {});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getMe = async () => {
    try {
        const response = await api.get("/get-me");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}