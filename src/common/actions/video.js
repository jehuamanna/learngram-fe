import { API } from "../utils/api";

export const createVideo = async (body) => {
  try {
    const { status, data } = await API.request({
      method: "POST",
      url: "/video",
      data: body
    });
    if(status === 201){
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
      url: "/video",
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

export const deleteVideo = async (id) => {
  try {
    const { status, data } = await API.request({
      method: "DELETE",
      url: `/video/${id}`,
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