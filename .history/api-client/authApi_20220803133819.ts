
import { RegisterPayLoad } from "../features/auth/authSlice";
import axios from 'axios';
const baseURI = process.env.BASE_URL

export const register = (payload:any) => axios.post(`${baseURI}/auth/register`, payload);