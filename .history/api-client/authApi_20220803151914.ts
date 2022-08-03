
import { RegisterPayLoad } from "../features/auth/authSlice";
import axios from 'axios'
export const register = (payload:RegisterPayLoad) => axios.post(`/api/auth/register`, payload);