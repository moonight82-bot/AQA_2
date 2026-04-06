import axios from 'axios';
import { config } from '../config/config.js';

export const apiClient = axios.create({
  baseURL: config.baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (request) => {
    console.log('\n===== REQUEST =====');
    console.log('Method:', request.method?.toUpperCase());
    console.log('URL:', `${request.baseURL}${request.url}`);
    console.log('Headers:', request.headers);

    if (request.data) {
      console.log('Body:', request.data);
    }

    return request;
  },
  (error) => {
    console.log('\n===== REQUEST ERROR =====');
    console.log('Message:', error.message);
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => {
    console.log('\n===== RESPONSE =====');
    console.log('Status:', response.status);
    console.log('URL:', `${response.config.baseURL}${response.config.url}`);
    console.log('Data:', response.data);

    return response;
  },
  (error) => {
    console.log('\n===== RESPONSE ERROR =====');

    if (error.response) {
      console.log('Status:', error.response.status);
      console.log('URL:', `${error.config?.baseURL}${error.config?.url}`);
      console.log('Data:', error.response.data);
    } else {
      console.log('Message:', error.message);
    }

    return Promise.reject(error);
  },
);
