import axios from 'axios';

import { API_BASE_URL } from '../constants/api';

const fetchAPI = axios.create({
  baseURL: API_BASE_URL,
});

fetchAPI.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

fetchAPI.defaults.headers['Authorization'] = 'Basic '

fetchAPI.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    const version = config.version || 1;
    config.url = `${API_BASE_URL}/v${version}${config.url}`;

    return config;
  },
);

export default fetchAPI;