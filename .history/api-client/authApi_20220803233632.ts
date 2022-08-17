
import axios from 'axios'
import { LoginPayLoad } from '../features/auth/authSlice';
export interface RegisterPayLoad {
    mail: string;
    username: string;
    fullname: string;
    password: string;
  }
export const register = (payload:RegisterPayLoad) => axios.post(`/api/auth/register`, payload);
export const login = (payload:LoginPayLoad) => axios.post(`/api/auth/login`, payload);