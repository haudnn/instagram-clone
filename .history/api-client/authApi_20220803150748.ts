
import { RegisterPayLoad } from "../features/auth/authSlice";
import axiosClient from "./axiosClient";
import axios from 'axios'
export const authApi = {
    register(payload: RegisterPayLoad){
        const url ='/auth/register'
        return axiosClient.post(url, payload)
    }
}

// export const register = (payload:RegisterPayLoad) => axios.post(`/api/auth/register`, payload);