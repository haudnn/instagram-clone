
import { RegisterPayLoad } from "../features/auth/authSlice";
import axios from 'axios';
const baseURL = process.env.BASE_URL

export const register = (payload:RegisterPayLoad) => axios.post(`${baseURL}/auth/register`, payload);