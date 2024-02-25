import { httpMessages } from '../constants/httpMessages.js';
import { httpStatus } from '../constants/httpStatus.js';

export const errorHandler = (error, req, res, next) => {
  const statusCode = error.statusCode || httpStatus.INTERNAL_SERVER_ERROR;

  const message = error.message || httpMessages.INTERNAL_SERVER_ERROR;

  return res.status(statusCode).json({
    statusCode,
    message,
  });
};
