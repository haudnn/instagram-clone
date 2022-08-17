
import { LoginPayload } from '../features/auth/authSlice';
import axiosClient from './axiosClient';
export interface RegisterPayload {
    mail: string;
    username: string;
    fullname: string;
    password: string;
  }
const authApi = {
  register(payload:RegisterPayload) {
    const url = '/auth/register'
    return axiosClient.post(url,payload);
  },
  login(payload:LoginPayload) {
    const url = '/auth/login'
    return axiosClient.post(url,payload);
  },
}
// export const register = (payload:RegisterPayload) => axios.post(`/api/auth/register`, payload);
// export const login = (payload:LoginPayload) => axios.post(`/api/auth/login`, payload);
// call api refresh token here
export default authApi