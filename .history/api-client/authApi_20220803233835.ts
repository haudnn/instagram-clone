
import axios from 'axios'
import { LoginPayload } from '../features/auth/authSlice';
export interface RegisterPayload {
    mail: string;
    username: string;
    fullname: string;
    password: string;
  }
export const register = (payload:RegisterPayload) => axios.post(`/api/auth/register`, payload);
export const login = (payload:LoginPayload) => axios.post(`/api/auth/login`, payload);