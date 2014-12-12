'use strict';

var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


var config=function(app){

  passport.use(new FacebookStrategy(global.config.social_api.facebook.login,
  function(accessToken, refreshToken, profile, done) {

    var avatar=global.config.social_api.facebook.graph+profile._json.id+"/picture?redirect=1&type=normal&width=200&height=200"
    var user={"social_id":profile._json.id,"profile_type":"2","name":profile._json.name,
                 "email":profile._json.email,"avatar":avatar,
                 "gender":profile._json.gender};

    done(null, user);

  }
));

passport.use(new TwitterStrategy(global.config.social_api.twitter.login,
function(token, tokenSecret, profile, done) {


  var user={"social_id":profile._json.id_str,"profile_type":"3","name":profile._json.name,
  "email":"pepe@pepe.com","avatar":profile._json.profile_image_url,
  "gender":""};

  done(null, user);

}
));

passport.use(new GoogleStrategy(global.config.social_api.google.login,
function(accessToken, refreshToken, profile, done) {

  var user={"social_id":profile._json.id,"profile_type":"4","name":profile._json.name,
  "email":profile._json.email,"avatar":profile._json.picture,
  "gender":profile._json.gender};

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
