import axios from 'axios';
import { stringify } from 'qs';

import { Logout } from '../actions/auth';

const token = localStorage.getItem("learngram-jwt-access-key");

export const API = axios.create({
  baseURL: "http://localhost:5000",
  headers: { 
    "access-control-allow-origin": "*",
    Authorization: `Bearer ${token}` 
  },
  paramsSerializer: params => stringify(params, { arrayFormat: 'brackets' })
});

API.interceptors.response.use((response) => response, (error) => {

  const statusCode = error.response.status;
  const message = error.response.data.message;

  if (statusCode === 401) {
    alert("Seems session was offline for long. Please login again")
    Logout();
  }

  alert(message);
});

export default API;