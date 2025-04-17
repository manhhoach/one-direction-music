import axios from 'axios';
import config from '../config';
const API_URL = config.apiUrl;
const API_BASE = `${API_URL}/singer`; // hoặc thay bằng biến môi trường

export const getSingers = (params) => {
  // params: { page, pageSize }
  return axios.get(API_BASE);
};

export const getSingerById = (id) => {
  return axios.get(`${API_BASE}/${id}`);
};

export const createSinger = (data) => {
  return axios.post(API_BASE, data);
};

export const updateSinger = (id, data) => {
  return axios.put(`${API_BASE}/${id}`, data);
};

export const deleteSinger = (id) => {
  return axios.delete(`${API_BASE}/${id}`);
};

export const getAllSingers = () => {
  return axios.get(`${API_BASE}/get-all`);
};