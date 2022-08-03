
import { RegisterPayLoad } from "../features/auth/authSlice";
import axiosClient from "./axiosClient";

export const authApi = {
    register : function register(payload: RegisterPayLoad){
        const url ='/auth/register'
        return axiosClient.post(url, payload)
    }

}

// export const register = (payload:any) => axios.post(`${baseURI}/api/auth/register`, payload);