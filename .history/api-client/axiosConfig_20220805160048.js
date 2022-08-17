import axios from 'axios';
const axiosInstance = axios.create();
axiosInstance.interceptors.response.use((response) => response, async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && originalRequest.url === '/api/v1/auth/refresh-tokens/') {
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('accessToken');
      window.location.href = '/login/';
      return Promise.reject(error);
    }
    if (
      error.response.data.code === 401 &&
      error.response.status === 401 &&
      error.response.statusText === 'Unauthorized'
    ) {
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));
        const now = Math.ceil(Date.now() / 1000);
        if (tokenParts.exp > now) {
          return axiosInstance
            .post('/api/v1/auth/refresh-tokens/', { refreshToken })
            .then((response) => {
              localStorage.setItem('accessToken', response.data.accessToken);
              localStorage.setItem('refreshToken', response.data.refreshToken);
              axiosInstance.defaults.headers.Authorization = `Bearer ${response.data.accessToken}`;
              originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
              return axiosInstance(originalRequest);
            })
            .catch((err) => {
              console.log(err);
            });
        }
        console.log('Refresh token is expired', tokenParts.exp, now);
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('accessToken');
        window.location.href = '/login/';
      } else {
        console.log('Refresh token not available.');
        window.location.href = '/login/';
      }
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;

