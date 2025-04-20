import axios from 'axios';
import config from '../config';
const API_URL = config.apiUrl;

export const uploadImage = async (file, type) => {
   const formData = new FormData();
   formData.append('file', file);

   const res = await axios.post(`${API_URL}/upload/upload?type=${type}`, formData, {
      headers: {
         'Content-Type': 'multipart/form-data',
      },
   });
   return res.data.data;
};
