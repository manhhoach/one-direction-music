import axios from 'axios';

const API_BASE = 'https://localhost:7063/api/singer'; // hoặc thay bằng biến môi trường

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
