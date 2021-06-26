import { API } from "../utils/api";

export const createVideo = async (body) => {
  try {
    const { status, data } = await API.request({
      method: "POST",
      url: "/api/v1/video/upload",
      data: body
    });
    if(status === 200){
      return { success: true, data };
    } else {
      return { success: false };
    }
  } catch (e) {
    console.error('Error uploading video...', e);
  }
}

export const listVideos = async () => {
  try {
    const { status, data } = await API.request({
      method: "GET",
      url: "/api/v1/video/videos",
    });
    if(status === 200){
      return { success: true, data };
    } else {
      return { success: false };
    }
  } catch (e) {
    console.error('Error listing videos...', e);
  }
}