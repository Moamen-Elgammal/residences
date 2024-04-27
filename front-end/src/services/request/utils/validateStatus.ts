import { throwableErrors } from '../consts';

export const validateStatus = (statusCode: number) =>
  Number.isInteger(statusCode) && !throwableErrors.includes(statusCode);
