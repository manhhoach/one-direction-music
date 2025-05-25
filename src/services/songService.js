import axios from 'axios';
import config from '../config';
import { credentialOptions } from './../utils/constants'
const API_URL = config.apiUrl;
const API_BASE = `${API_URL}/song`;

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
  return axios.post(API_BASE, data, credentialOptions);
};

export const updateSong = (data) => {
  return axios.put(`${API_BASE}`, data, credentialOptions);
};

export const deleteSong = (id) => {
  return axios.delete(`${API_BASE}/${id}`, credentialOptions);
};


export const getSongPhotosBySlug = (slug) => {
  return axios.get(`${API_BASE}/get-photos/${slug}`);
};