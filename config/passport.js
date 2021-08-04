require("dotenv").config();
const passport = require("passport");
const User = require("../model/user");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.Client_ID,
      clientSecret: process.env.Client_secret,
      callbackURL: "/redirect/google_auth",
    },
    (accessToken, refreshToken, profile, cb) => {
      User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          console.log(currentUser);
        } else {
          new User({
            username: profile.displayName,
            gender: profile.gender,
            googleId: profile.id,
          })
            .save()
            .then((newUser) => {
              console.log("user is created " + newUser);
              cb(null, newUser);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    }
  )
);
