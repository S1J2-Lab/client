import axios from 'axios';
import { API_TIMEOUT, BASE_URL } from './config';
import { normalizeApiError, type ApiErrorResponse } from './error';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: API_TIMEOUT,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!axios.isAxiosError<ApiErrorResponse>(error)) {
      return Promise.reject({
        code: 'UNKNOWN_ERROR',
        message: '알 수 없는 오류가 발생했어요.',
      });
    }

    if (!error.response) {
      return Promise.reject({
        code: 'NETWORK_ERROR',
        message: '네트워크 연결을 확인해주세요.',
      });
    }

    return Promise.reject(
      normalizeApiError(error.response.data, error.response.status),
    );
  },
);
