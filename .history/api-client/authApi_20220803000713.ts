
import { RegisterPayLoad } from "../features/auth/authSlice";
import axiosClient from "./axiosClient";

const authApi = {
    register(payload: RegisterPayLoad){
        const url ='/auth/register'
        return axiosClient.post(url, payload)
    }
}
export default authApi;