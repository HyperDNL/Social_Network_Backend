import { httpMessages } from '../constants/httpMessages.js';
import { httpStatus } from '../constants/httpStatus.js';

export const signUp = async (req, res) => {
  try {
    return res.status(httpStatus.CREATED).send('Sign up');
  } catch (error) {
    const { message } = error;

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: message || httpMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

export const signIn = async (req, res) => {
  try {
    return res.status(httpStatus.OK).send('Sign in');
  } catch (error) {
    const { message } = error;

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: message || httpMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

export const refreshToken = async (req, res) => {
  try {
    return res.status(httpStatus.OK).send('Refresh token');
  } catch (error) {
    const { message } = error;

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: message || httpMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

export const signOut = async (req, res) => {
  try {
    return res.status(httpStatus.OK).send('Sign out');
  } catch (error) {
    const { message } = error;

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: message || httpMessages.INTERNAL_SERVER_ERROR,
    });
  }
};
