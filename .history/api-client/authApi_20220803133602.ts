
import { RegisterPayLoad } from "../features/auth/authSlice";
import axiosClient from "./axiosClient";


export const register = (payload:RegisterPayLoad) => axiosClient.post('/auth/register', payload)