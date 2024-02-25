import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: '',
    },
    profilePicture: {
      url: {
        type: String,
        default: '',
      },
      publicId: {
        type: String,
        default: '',
      },
    },
    dateBirth: {
      type: Date,
      default: Date.now,
    },
    phoneNumber: {
      type: String,
      trim: true,
      default: '',
    },
    genre: {
      type: String,
      trim: true,
      default: '',
    },
    privateProfile: {
      type: Boolean,
      default: false,
    },
    followers: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      },
    ],
    following: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      },
    ],
    posts: [
      {
        post: {
          type: Schema.Types.ObjectId,
          ref: 'Post',
        },
      },
    ],
    notifications: [
      {
        notification: {
          type: Schema.Types.ObjectId,
          ref: 'Notification',
        },
      },
    ],
    refreshToken: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: false,
    versionKey: false,
  },
);

userSchema.set('toJSON', {
  transform: (doc, ret, options) => {
    delete ret.password;
    delete ret.refreshToken;

    return ret;
  },
});

export default model('User', userSchema);
