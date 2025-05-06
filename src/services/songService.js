import axios from 'axios';
import config from '../config';
const API_URL = config.apiUrl;
const API_BASE = `${API_URL}/song`; // hoặc thay bằng biến môi trường

export const getSongs = (albumId, params) => {
  return axios.get(`${API_BASE}`, {
    params: {
      ...params,
      albumId,
    }
  });
};

export const getSongBySlug = (slug) => {
  return axios.get(`${API_BASE}/${slug}`);
};

export const createSong = (data) => {
  return axios.post(API_BASE, data);
};

export const updateSong = (id, data) => {
  return axios.put(`${API_BASE}/${id}`, data);
};

export const deleteSong = (id) => {
  return axios.delete(`${API_BASE}/${id}`);
};
