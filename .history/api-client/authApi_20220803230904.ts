
import axios from 'axios'
export interface RegisterPayLoad {
    mail: string;
    username: string;
    fullname: string;
    password: string;
  }
  
export const register = (payload:RegisterPayLoad) => axios.post(`/api/auth/register`, payload);