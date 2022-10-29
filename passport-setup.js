const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
    //add to db if you want the user to be stored
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
   
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: "your_client_id_here",
    clientSecret: "you_secret_here",
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
))