import { ALLOWED_IMAGE_EXTENSIONS } from '../configuration/configuration.js';

export const getFileExtension = (filename) =>
  filename.slice(filename.lastIndexOf('.') + 1).toLowerCase() || '';

export const getFileSizeInMB = (bytes) => bytes / (1024 * 1024);

export const isValidImageExtension = (extension) =>
  ALLOWED_IMAGE_EXTENSIONS.includes(extension);
