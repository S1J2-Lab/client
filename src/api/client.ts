import axios from 'axios';
import { API_TIMEOUT, BASE_URL } from './config';
import { NETWORK_ERROR, normalizeApiError } from './error';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: API_TIMEOUT,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!axios.isAxiosError(error)) {
      return Promise.reject(normalizeApiError(error));
    }

    if (!error.response) {
      return Promise.reject(NETWORK_ERROR);
    }

    return Promise.reject(
      normalizeApiError(error.response.data, error.response.status),
    );
  },
);
