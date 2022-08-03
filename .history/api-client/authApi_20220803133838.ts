
import axios from 'axios';
const baseURI = process.env.BASE_URL
export interface RegisterPayLoad {
    email: string;
    username: string;
    fullname: string;
    password: string;
  }
export const register = (payload:RegisterPayLoad) => axios.post(`${baseURI}/auth/register`, payload);