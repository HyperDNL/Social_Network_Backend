import { Router } from 'express';
import {
  signUp,
  signIn,
  refreshToken,
  signOut,
} from '../controllers/authenticationController.js';
import { verifyUser } from '../middleware/authenticationMiddleware.js';

const router = Router();

router.post('/sign-up', signUp);

router.post('/sign-in', verifyUser('user-signin'), signIn);

router.post('/refresh-token', refreshToken);

router.get('/sign-out', verifyUser('user-authentication'), signOut);

export default router;
