import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';
import User from '../models/userModel.js';
import { JWT_SECRET } from '../configuration/configuration.js';
import { decryptPassword } from '../libraries/bcryptLibrary.js';
import { customizedMessages } from '../constants/customizedMessages.js';
import { httpMessages } from '../constants/httpMessages.js';
import { httpStatus } from '../constants/httpStatus.js';

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
};

passport.use(
  'user-authentication',
  new JwtStrategy(jwtOptions, async (jwt_payload, done) => {
    try {
      const { _id } = jwt_payload;
      const user = await User.findById(_id);

      if (user) {
        return done(null, user);
      }

      return done(null, false, {
        statusCode: httpStatus.NOT_FOUND,
        message: httpMessages.NOT_FOUND,
      });
    } catch (error) {
      return done(null, false, {
        statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        message: httpMessages.INTERNAL_SERVER_ERROR,
      });
    }
  }),
);

passport.use(
  'user-signin',
  new LocalStrategy(
    { usernameField: 'email', passwordField: 'password' },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          return done(null, false, {
            statusCode: httpStatus.NOT_FOUND,
            message: httpMessages.NOT_FOUND,
          });
        }

        const isMatch = await decryptPassword(password, user.password);

        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, {
            statusCode: httpStatus.UNAUTHORIZED,
            message: customizedMessages.INCORRECT_PASSWORD,
          });
        }
      } catch (error) {
        return done(null, false, {
          statusCode: httpStatus.INTERNAL_SERVER_ERROR,
          message: httpMessages.INTERNAL_SERVER_ERROR,
        });
      }
    },
  ),
);

export const verifyUser = (strategyName) => (req, res, next) => {
  passport.authenticate(strategyName, (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      const { statusCode, message } = info || {};

      const error = new Error(message || httpMessages.UNAUTHORIZED);

      error.statusCode = statusCode || httpStatus.UNAUTHORIZED;

      return next(error);
    }

    req.user = user;
    next();
  })(req, res, next);
};
