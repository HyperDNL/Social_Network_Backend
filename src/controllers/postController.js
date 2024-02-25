import { httpMessages } from '../constants/httpMessages.js';
import { httpStatus } from '../constants/httpStatus.js';

export const createPost = async (req, res) => {
  try {
    return res.status(httpStatus.CREATED).send('Create post');
  } catch (error) {
    const { message } = error;

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: message || httpMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

export const getPosts = async (req, res) => {
  try {
    return res.status(httpStatus.OK).send('Get posts');
  } catch (error) {
    const { message } = error;

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: message || httpMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

export const getPost = async (req, res) => {
  try {
    return res.status(httpStatus.OK).send('Get post');
  } catch (error) {
    const { message } = error;

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: message || httpMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

export const updatePost = async (req, res) => {
  try {
    return res.status(httpStatus.OK).send('Update post');
  } catch (error) {
    const { message } = error;

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: message || httpMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

export const deleteImageFromPost = async (req, res) => {
  try {
    return res.status(httpStatus.DELETED).send('Delete image from post');
  } catch (error) {
    const { message } = error;

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: message || httpMessages.INTERNAL_SERVER_ERROR,
    });
  }
};

export const deletePost = async (req, res) => {
  try {
    return res.status(httpStatus.DELETED).send('Delete post');
  } catch (error) {
    const { message } = error;

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      message: message || httpMessages.INTERNAL_SERVER_ERROR,
    });
  }
};
