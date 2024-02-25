import express from 'express';
import fileUpload from 'express-fileupload';
import passport from 'passport';
import cors from 'cors';
import { PORT } from './configuration/configuration.js';
import { corsConfiguration } from './configuration/corsConfiguration.js';
import { databaseConnection } from './libraries/mongooseLibrary.js';
import authenticationRoutes from './routes/authenticationRoutes.js';
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import './middleware/authenticationMiddleware.js';

// Initialize
export const app = express();
databaseConnection();

// Settings
app.set('port', PORT);

// Middlewares
app.use(express.json());
app.use(cors(corsConfiguration));
app.use(
  fileUpload({
    tempFileDir: './upload',
    useTempFiles: true,
  }),
);
app.use(passport.initialize());

// Routes
app.use('/api/authentication', authenticationRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

//Error Handler
app.use(errorHandler);

export default app;
