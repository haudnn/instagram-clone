
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
})