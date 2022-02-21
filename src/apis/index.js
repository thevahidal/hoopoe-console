import axios from 'axios';
import { login } from '../actions/auth';

import { API_BASE_URL } from '../constants/api';
import { store } from '../store';
import { refreshTokenAPI } from './auth';

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
    const token = store.getState().user.access;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    const version = config.version || 1;
    config.url = `${API_BASE_URL}/v${version}${config.url}`;

    return config;
  },
);


let isRefreshing = false;
let refreshSubscribers = [];

fetchAPI.interceptors.response.use(response => {
  return response;
}, error => {
  const { config, response: { status } } = error;
  const originalRequest = config;

  if (status === 401) {
    if (!isRefreshing) {
      isRefreshing = true;
      refreshTokenAPI()
        .then(res => {
          const { access, refresh } = res.data;
          store.dispatch(login(access, refresh));
          isRefreshing = false;
          onRefreshed(access);
        });
    }

    const retryOriginalRequest = new Promise((resolve, reject) => {
      subscribeRefreshToken(token => {
        originalRequest.headers['Authorization'] = 'Bearer ' + token;
        resolve(axios(originalRequest));
      });
    });
    return retryOriginalRequest;
  } else {
    return Promise.reject(error);
  }
});


const subscribeRefreshToken = (cb) => {
  refreshSubscribers.push(cb);
}

const onRefreshed = (token) => {
  refreshSubscribers.map(cb => cb(token));
}

export default fetchAPI;