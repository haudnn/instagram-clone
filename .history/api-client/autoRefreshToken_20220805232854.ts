import axios, { AxiosResponse } from 'axios';
import AxiosConfig from 'axios';
import { setCookie, removeCookie } from 'typescript-cookie';

const axiosClient = axios.create({
  baseURL: '/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});
axiosClient.interceptors.response.use( (response: AxiosResponse) => response, async (error) => {
    const config = error.config;
    if (
      error.response?.status === 401 &&
      ['Unauthenticated User', 'Refresh token has expired'].includes(error.response.data.message)
    ) {
      window.location.href = '/login/';
      removeCookie('access_token', { path: '' });
      removeCookie('refresh_token', { path: '' });
    }
    if (
      error.response?.status === 401 &&
      error.response.data.message === 'Authorization not valid'
    ) {
      try {
        const response = await AxiosConfig.post('/api/auth/refresh');
        setCookie('access_token', response.data.access_token, { path: '' });
        return AxiosConfig(config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error.response.data.message);
  }
);
// AxiosConfig.interceptors.response.use((response) => response , async (error) => {
//   const config = error.config
//   if(error.response?.status === 401 && ['Unauthenticated User', 'Refresh token has expired'].includes(error.response.data.message)) {
//     window.location.assign('/login')
//     removeCookie('access_token',{ path: '' })
//     removeCookie('refresh_token',{ path: '' })
//   }
//   if(error.response?.status === 401 && error.response.data.message === 'Authorization not valid') {
//     try{
//         const response = await AxiosConfig.post("/api/auth/refresh")
//         setCookie('access_token', response.data.access_token, { path: '' })
//         return AxiosConfig(config)
//     } catch(error){
//       return Promise.reject(error)
//     }
//   }
//   return Promise.reject(error.response.data.message)
// })
export default axiosClient;