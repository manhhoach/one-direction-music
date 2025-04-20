import axios from 'axios';
import config from '../config';
const API_URL = config.apiUrl;
const API_BASE = `${API_URL}/common`; // hoặc thay bằng biến môi trường

export const getNetworks = () => {
  return axios.get(`${API_BASE}/get-networks`);
};
