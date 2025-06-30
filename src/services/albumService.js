import axios from 'axios';
import config from '../config';
import { credentialOptions } from './../utils/constants'
const API_URL = config.apiUrl;
const API_BASE = `${API_URL}/album`;
import albums from './../data/album.json'


export const getAlbumsForAdmin = () => {
  return axios.get(API_BASE);
};

export const getAlbums = () => {
  //return axios.get(API_BASE);
  return albums;
};

export const getAlbumBySlug = (slug) => {
  return axios.get(`${API_BASE}/${slug}`);
};

export const getAlbumPhotosBySlug = (slug) => {
  return axios.get(`${API_BASE}/get-photos/${slug}`);
};


export const createAlbum = (data) => {
  return axios.post(API_BASE, data, credentialOptions);
};

export const updateAlbum = (data) => {
  return axios.put(`${API_BASE}`, data, credentialOptions);
};

export const deleteAlbum = (id) => {
  return axios.delete(`${API_BASE}/${id}`, credentialOptions);
};
