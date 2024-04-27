import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';

import { ERROR_MESSAGE_502 } from './consts';

export const createRequestInterceptor =
  (headers?: AxiosRequestConfig['headers']) =>
  async (request: AxiosRequestConfig) => {
    const enhancedRequest = {
      ...request,
      headers: {
        ...request.headers,
        ...headers,
      },
    };

    enhancedRequest.data = decamelizeKeys(request.data);

    return enhancedRequest;
  };

export const createResponseInterceptor = () => (response: AxiosResponse) => {
  const data = response.data;

  if (data instanceof Object && Object.keys(data)) {
    response.data = camelizeKeys(data);
  }

  if (response.status === 502) {
    const error = new Error(ERROR_MESSAGE_502);

    return Promise.reject(error);
  }

  return response;
};
