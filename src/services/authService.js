import axios from 'axios';
import config from '../config';
import { credentialOptions } from './../utils/constants'

const API_URL = config.apiUrl;
const API_BASE = `${API_URL}/auth`;

export const login = async (credentials) => {
   const response = await axios.post(`${API_BASE}/login`, credentials, credentialOptions);
   return response.data;
};


export const register = async (credentials) => {
   const response = await axios.post(`${API_BASE}/register`, credentials);
   return response.data;
};

export const checkLogin = async () => {
   const response = await axios.get(`${API_BASE}/me`, credentialOptions);
   return response.data;
}