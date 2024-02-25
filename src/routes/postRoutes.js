import { Router } from 'express';
import {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deleteImageFromPost,
  deletePost,
} from '../controllers/postController.js';
import { verifyUser } from '../middleware/authenticationMiddleware.js';

const router = Router();

router.post('/', verifyUser('user-authentication'), createPost);

router.get('/', verifyUser('user-authentication'), getPosts);

router.get('/:id', verifyUser('user-authentication'), getPost);

router.put('/:id', verifyUser('user-authentication'), updatePost);

router.delete(
  '/:id/images/:imageId',
  verifyUser('user-strategy'),
  deleteImageFromPost,
);

router.delete('/:id', verifyUser('user-strategy'), deletePost);

export default router;
