import axios from 'axios';
import config from '../config';
import { credentialOptions } from './../utils/constants'
const API_URL = config.apiUrl;

export const uploadImage = async (file, type) => {
   const formData = new FormData();
   formData.append('file', file);

   const res = await axios.post(`${API_URL}/upload/upload?type=${type}`, formData, {
      headers: {
         'Content-Type': 'multipart/form-data',
      },
      ...credentialOptions
   });
   return res.data.data;
};
