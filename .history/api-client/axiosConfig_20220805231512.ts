
import axios from 'axios';
import AxiosConfig from 'axios'
import { getCookie, setCookie, removeCookie } from 'typescript-cookie'

AxiosConfig.interceptors.response.use((response) => response , async (error) => {
  const config = error.config
  if(error.response?.status === 401 && ['Unauthenticated User', 'Refresh token has expired'].includes(error.response.data.message)) {
    window.location.assign('/login')
    removeCookie('access_token',{ path: '' })
    removeCookie('refresh_token',{ path: '' })
  } 
  if(error.response?.status === 401 && error.response.data.message === 'Authorization not valid') {

    try{
        const response = await AxiosConfig.post("/api/auth/refresh")
        setCookie('access_token', response.data.access_token, { path: '' })
        return AxiosConfig(config)
    } catch(error){
      return Promise.reject(error)
    }
  } 
  return Promise.reject(error.response.data.message)
})