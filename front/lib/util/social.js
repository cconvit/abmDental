'use strict';

var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


var config=function(app){

  passport.use(new FacebookStrategy(global.config.social_api.facebook,
  function(accessToken, refreshToken, profile, done) {
    console.log("TOKEN:"+accessToken+"END")

    var user={};
    user.facebook=profile;
    user.name="Hola Mundo carlos convit";

    done(null, user);

  }
));

passport.use(new TwitterStrategy(global.config.social_api.twitter,
function(token, tokenSecret, profile, done) {

  var user={};
  user.twitter=profile;
  user.name="Hola Twitter carlos convit";

  done(null, user);

}
));

passport.use(new GoogleStrategy(global.config.social_api.google,
function(accessToken, refreshToken, profile, done) {

  var user={};
  user.google=profile;
  user.name="Hola Google carlos convit";

  done(null, user);


}
));

passport.serializeUser(function(user, done){
  done(null, user);
});

passport.deserializeUser(function(user, done){
  done(null, user);
});

app.use(passport.initialize());
app.use(passport.session());

}

exports.config = config;
