import axios from 'axios';
import config from '../config';
const API_URL = config.apiUrl;
const API_BASE = `${API_URL}/album`; // hoặc thay bằng biến môi trường

export const getAlbums = () => {
  return axios.get(API_BASE);
};

export const getAlbumBySlug = (slug) => {
  return axios.get(`${API_BASE}/${slug}`);
};

export const getAlbumPhotosBySlug = (slug) => {
  return axios.get(`${API_BASE}/get-photos/${slug}`);
};


export const createAlbum = (data) => {
  return axios.post(API_BASE, data);
};

export const updateAlbum = (id, data) => {
  return axios.put(`${API_BASE}/${id}`, data);
};

export const deleteAlbum = (id) => {
  return axios.delete(`${API_BASE}/${id}`);
};
