
import { RegisterPayLoad } from "../features/auth/authSlice";
import axiosClient from "./axiosClient";

export const authApi = {
    register(payload: RegisterPayLoad){
        const url ='/auth/register'
        return axiosClient.post(url, payload)
    }
}