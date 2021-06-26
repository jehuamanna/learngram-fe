import axios from 'axios';
import { stringify } from 'qs';
import {LEARNGRAM_ACCESS_KEY} from '../constants/constants'

import { Logout } from '../actions/auth';

const token = localStorage.getItem(LEARNGRAM_ACCESS_KEY);

export const API = axios.create({
  baseURL: "http://frontend-assignment.learngram.ai",
  headers: { 
    "access-control-allow-origin": "*",
    // "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Bearer ${token}` 
  },
  // paramsSerializer: params => stringify(params, { arrayFormat: 'brackets' })
});

API.interceptors.response.use((response) => response, (error) => {

  const statusCode = error.response.status;
  const message = error.response.data.message;

  if (statusCode === 401) {
    alert("Seems session was offline for long. Please login again")
    Logout();
  }
  return {statusCode, message}

  // alert(message);
});

export default API;