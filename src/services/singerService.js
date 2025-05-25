import axios from 'axios';
import config from '../config';
import { credentialOptions } from './../utils/constants'
const API_URL = config.apiUrl;
const API_BASE = `${API_URL}/singer`;


export const getSingers = () => {
  return axios.get(API_BASE);
};

export const getSingerById = (id) => {
  return axios.get(`${API_BASE}/${id}`);
};

export const createSinger = (data) => {
  return axios.post(API_BASE, data, credentialOptions);
};

export const updateSinger = (data) => {
  return axios.put(`${API_BASE}`, data, credentialOptions);
};

export const deleteSinger = (id) => {
  return axios.delete(`${API_BASE}/${id}`, credentialOptions);
};
