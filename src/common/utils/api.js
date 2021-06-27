import axios from 'axios';
import { stringify } from 'qs';
import {LEARNGRAM_ACCESS_KEY} from '../constants/constants'

import { Logout } from '../actions/auth';

const token = () => localStorage.getItem(LEARNGRAM_ACCESS_KEY);

export const API = axios.create({
  baseURL: "http://frontend-assignment.learngram.ai",
  headers: { 
    "access-control-allow-origin": "*",
    Authorization: `Bearer ${token()}` 
  },
  paramsSerializer: params => stringify(params, { arrayFormat: 'brackets' })
});

API.interceptors.request.use(function (config) {
  config.headers.Authorization =  `Bearer ${token()}`;

  return config;
});

API.interceptors.response.use((response) => response, (error) => {

  const statusCode = error.response.status;
  const message = error.response.data.message;

  if (statusCode === 401) {
    Logout();
  }
  return {statusCode, message}
});

export default API;