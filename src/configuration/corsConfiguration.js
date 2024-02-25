import {
  CORS_ORIGIN,
  CORS_METHODS,
  CORS_ALLOWED_HEADERS,
} from './configuration.js';

const whitelist = CORS_ORIGIN || [];

export const corsConfiguration = {
  origin: (origin, callback) => {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: CORS_METHODS,
  allowedHeaders: CORS_ALLOWED_HEADERS,
};
