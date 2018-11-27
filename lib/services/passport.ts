import * as passport from "passport";
const GoogleStrategy = require("passport-google-oauth20");
import * as mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import { getKeys } from "../config/KeyProxy";
import { userSchema } from "../model/User";

const User = mongoose.model("users", userSchema);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: getKeys().getGoogleClientId(),
      clientSecret: getKeys().getClientSecret(),
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    (acesssToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          //we already have a record with user ID
          done(null, existingUser);
        } else {
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);

export let isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return true;
};
