import { API } from "../utils/api";
import {LEARNGRAM_ACCESS_KEY} from '../constants/constants'

export const Signup = async (body) => {
  try {
    const res = await API.request({
      method: "POST",
      url: "/api/v1/user/signup",
      data: body,
    });
    if(res && res.status === 200) {
      return { success: true, data: res.data };
    } else {
      return { success: false };
    }
  } catch (e) {
    console.error('Error signing up...', e)
  }
}

export const VerifyOTP = async (body) => {
  try {
    const res = await API.request({
      method: "POST",
      url: "/api/v1/user/verifyotp",
      data: body,
    });
    if(res && res.status === 200) {
      localStorage.setItem(LEARNGRAM_ACCESS_KEY, res.data.access_token);
      return { success: true, data: res.data };
    } else {
      return { success: false };
    }
  } catch (e) {
    console.error('Error signing up...', e)
  }
}

export const Login = async (body) => {
  try {
    const res = await API.request({
      method: "POST",
      url: "/api/v1/user/login",
      data: body,
    });
    if(res && res.status === 200) {
      console.log(res)
      localStorage.setItem(LEARNGRAM_ACCESS_KEY, res.data.jwt);
      return { success: true, data: res.data };
    } else {
      return { success: false };
    }
  } catch (e) {
    console.error('Error logging in...', e)
  }
}

export const Logout = async () => {
  localStorage.removeItem(LEARNGRAM_ACCESS_KEY);
  window.location.href = "/";
}

export const getCurrentUser = async () => {
  try {
    const { data, status } = await API.request({
      method: "GET",
      url: "/me",
    });
    if(status === 200) {
      return { success: true, data };
    } else {
      return { success: false };
    }
  } catch (e) {
   console.error('Error fetching current user', e.message); 
  }
}