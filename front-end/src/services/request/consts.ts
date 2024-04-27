import { AxiosResponse } from 'axios';

export const REQUEST_TIMEOUT = 60000;

export const ERROR_MESSAGE_502 = '502 Bad Gateway';

// Error codes 400 - 499
const CLIENT_ERROR_CODES = Array.from({ length: 100 }, (_, i) => i + 400);

export const SERVER_ERROR_CODES = [500, 503, 504] as const;

export const throwableErrors = [...CLIENT_ERROR_CODES, ...SERVER_ERROR_CODES];

export class ResponseError extends Error {
  public response: AxiosResponse;

  constructor(response: AxiosResponse) {
    super(response.statusText);
    this.response = response;
  }
}
