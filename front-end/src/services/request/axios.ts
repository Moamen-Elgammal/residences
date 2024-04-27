import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import qs from 'qs';

import {
  createRequestInterceptor,
  createResponseInterceptor,
} from './axiosInterceptors';
import { REQUEST_TIMEOUT } from './consts';
import { validateStatus } from './utils/validateStatus';
import config from '@/config/config';

type createAxiosInstanceParams = Partial<AxiosRequestConfig> & {
  handleError?: (error: Error) => PromiseRejectionEvent;
};

const API_URL = config.apiUrl;

export const createAxiosInstance = ({
  baseURL,
  data,
  method,
  timeout,
  url,
  headers,
}: createAxiosInstanceParams = {}): AxiosInstance => {
  const axiosInstance = Axios.create({
    baseURL: baseURL || API_URL,
    data,
    method,
    timeout: timeout || REQUEST_TIMEOUT,
    url,
    validateStatus,
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: 'brackets', encode: false });
    },
  });

  // Request handling
  axiosInstance.interceptors.request.use(createRequestInterceptor(headers));

  // Response handling
  axiosInstance.interceptors.response.use(createResponseInterceptor());

  return axiosInstance;
};

const axios = createAxiosInstance();

export { axios };
