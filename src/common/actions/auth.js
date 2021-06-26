import { API } from "../utils/api";

export const Signup = async (body) => {
  try {
    const res = await API.request({
      method: "POST",
      url: "/user/signup",
      data: body,
    });
    if(res && res.status === 201) {
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
      url: "/user/login",
      data: body,
    });
    if(res && res.status === 201) {
      localStorage.setItem("learngram_access_key", res.data.access_token);
      return { success: true, data: res.data };
    } else {
      return { success: false };
    }
  } catch (e) {
    console.error('Error logging in...', e)
  }
}

export const Logout = async () => {
  localStorage.removeItem("learngram_access_key");
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