import axios from 'axios';
import config from '../config';
const API_URL = config.apiUrl;
const API_BASE = `${API_URL}/auth`;

export const login = async (credentials) => {
   const response = await axios.post(`${API_BASE}/login`, credentials, {
      withCredentials: true
   });
   return response.data;
};


export const register = async (credentials) => {
   const response = await axios.post(`${API_BASE}/register`, credentials);
   return response.data;
};
