import { config } from 'dotenv';

config();

export const PORT = process.env.PORT;
export const MONGO_DB_URI = process.env.MONGO_DB_URI;
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_SESSION_EXPIRY = process.env.JWT_SESSION_EXPIRY;
export const JWT_REFRESH_TOKEN_EXPIRY = process.env.JWT_REFRESH_TOKEN_EXPIRY;
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
export const MAX_IMAGE_SIZE = process.env.MAX_IMAGE_SIZE;
export const ALLOWED_IMAGE_EXTENSIONS = JSON.parse(
  process.env.ALLOWED_IMAGE_EXTENSIONS,
);
export const CORS_ORIGIN = JSON.parse(process.env.CORS_ORIGIN);
export const CORS_METHODS = JSON.parse(process.env.CORS_METHODS);
export const CORS_ALLOWED_HEADERS = JSON.parse(
  process.env.CORS_ALLOWED_HEADERS,
);
