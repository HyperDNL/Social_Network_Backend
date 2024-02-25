import { httpMessages } from '../constants/httpMessages.js';
import { httpStatus } from '../constants/httpStatus.js';

export const profile = async (req, res) => {
  try {
    return res.status(httpStatus.OK).send('Profile');
  } catch (error) {
    const { message } = error;

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: message || httpMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    return res.status(httpStatus.OK).send('Update profile');
  } catch (error) {
    const { message } = error;

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: message || httpMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

export const updateProfilePicture = async (req, res) => {
  try {
    return res.status(httpStatus.OK).send('Update profile picture');
  } catch (error) {
    const { message } = error;

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: message || httpMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

export const followUser = async (req, res) => {
  try {
    return res.status(httpStatus.OK).send('Follow user');
  } catch (error) {
    const { message } = error;

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: message || httpMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

export const changeFollowRequestStatus = async (req, res) => {
  try {
    return res.status(httpStatus.OK).send('Change follow request status');
  } catch (error) {
    const { message } = error;

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: message || httpMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

export const unfollowUser = async (req, res) => {
  try {
    return res.status(httpStatus.OK).send('Unfollow user');
  } catch (error) {
    const { message } = error;

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: message || httpMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

export const getFollowing = async (req, res) => {
  try {
    return res.status(httpStatus.OK).send('Get following');
  } catch (error) {
    const { message } = error;

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: message || httpMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

export const getFollowers = async (req, res) => {
  try {
    return res.status(httpStatus.OK).send('Get followers');
  } catch (error) {
    const { message } = error;

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: message || httpMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

export const getNotifications = async (req, res) => {
  try {
    return res.status(httpStatus.OK).send('Get notifications');
  } catch (error) {
    const { message } = error;

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: message || httpMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

export const getNotification = async (req, res) => {
  try {
    return res.status(httpStatus.OK).send('Get notification');
  } catch (error) {
    const { message } = error;

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: message || httpMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    return res.status(httpStatus.OK).send('User profile');
  } catch (error) {
    const { message } = error;

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: message || httpMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

export const searchUsers = async (req, res) => {
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
