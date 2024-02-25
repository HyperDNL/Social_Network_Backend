import { Router } from 'express';
import {
  profile,
  updateProfile,
  updateProfilePicture,
  followUser,
  changeFollowRequestStatus,
  unfollowUser,
  getFollowing,
  getFollowers,
  getNotifications,
  getNotification,
  getUserProfile,
  searchUsers,
} from '../controllers/userController.js';
import { verifyUser } from '../middleware/authenticationMiddleware.js';

const router = Router();

router.get('/profile', verifyUser('user-authentication'), profile);

router.put('/update-profile', verifyUser('user-authentication'), updateProfile);

router.put(
  '/update-profile-picture',
  verifyUser('user-authentication'),
  updateProfilePicture,
);

router.put('/follow/:id', verifyUser('user-authentication'), followUser);

router.put(
  '/follow-request/:id',
  verifyUser('user-authentication'),
  changeFollowRequestStatus,
);

router.put('/unfollow/:id', verifyUser('user-authentication'), unfollowUser);

router.get('/following', verifyUser('user-authentication'), getFollowing);

router.get('/followers', verifyUser('user-authentication'), getFollowers);

router.get(
  '/notifications',
  verifyUser('user-authentication'),
  getNotifications,
);

router.get(
  '/notifications/:id',
  verifyUser('user-authentication'),
  getNotification,
);

router.get('/profile/:id', verifyUser('user-authentication'), getUserProfile);

router.get('/search', verifyUser('user-authentication'), searchUsers);

export default router;
