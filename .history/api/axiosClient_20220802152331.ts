import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

axios.interceptors.request.use(function (config: AxiosRequestConfig) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
axios.interceptors.response.use(function (response: AxiosResponse) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });