import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Keychain from 'react-native-keychain';

interface TokenResponse {
  access_token: string;
}

interface AuthData {
  accessToken: string;
  refreshToken: string;
}

interface FailedRequest {
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
}

let isRefreshing = false;
let failedQueue: FailedRequest[] = [];

const processQueue = (error: unknown, token: string | null) => {
  failedQueue.forEach(prom => {
    if (error) prom.reject(error);
    else if (token) prom.resolve(token);
  });
  failedQueue = [];
};

export const createApiInstance = (baseURL: string): AxiosInstance => {
  const api = axios.create({ baseURL });

  // Gắn accessToken vào mọi request
  api.interceptors.request.use(async (config)=> {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      const token: string = JSON.parse(credentials.password).accessToken;
      if (config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  });

  // Xử lý lỗi 401 và refresh token
  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({
              resolve: (token: string) => {
                if (originalRequest.headers) {
                  originalRequest.headers.Authorization = `Bearer ${token}`;
                }
                resolve(api(originalRequest));
              },
              reject: (err: unknown) => reject(err),
            });
          });
        }

        isRefreshing = true;

        try {
          const credentials = await Keychain.getGenericPassword();
          const { refreshToken }: AuthData = JSON.parse(credentials?.password || '{}');

          const refreshResponse = await axios.post<TokenResponse>('https://auth.example.com/refresh', {
            refresh_token: refreshToken,
          });

          const newAccessToken = refreshResponse.data.access_token;

          // Lưu token mới
          await Keychain.setGenericPassword('auth', JSON.stringify({
            accessToken: newAccessToken,
            refreshToken,
          }));

          processQueue(null, newAccessToken);

          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          }

          return api(originalRequest);
        } catch (err) {
          processQueue(err, null);
          return Promise.reject(err);
        } finally {
          isRefreshing = false;
        }
      }

      return Promise.reject(error);
    }
  );

  return api;
};
