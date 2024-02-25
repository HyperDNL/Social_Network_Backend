import jwt from 'jsonwebtoken';
import {
  JWT_SECRET,
  JWT_SESSION_EXPIRY,
  JWT_REFRESH_TOKEN_EXPIRY,
} from '../configuration/configuration.js';

const generateToken = (user, expiresIn) => {
  return jwt.sign(user, JWT_SECRET, {
    expiresIn,
  });
};

export const getToken = (user) => {
  return generateToken(user, parseInt(JWT_SESSION_EXPIRY));
};

export const getRefreshToken = (user) => {
  return generateToken(user, parseInt(JWT_REFRESH_TOKEN_EXPIRY));
};

export const verifyToken = (token) => {
  return (decodedToken = jwt.verify(token, JWT_SECRET));
};
