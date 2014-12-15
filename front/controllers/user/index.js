'use strict';

var userLib = require('../../lib/user/main');
var passport = require('passport');

module.exports = function (router) {

  router.get('/logout', function (req, res) {

     req.session.destroy();
     res.redirect('/');

  });
  //Router for signup process//
  router.post('/signup', function (req, res) {

    userLib.signup(req,res);
  });
  //Router for normal login process//
  router.post('/login', function (req, res) {

    userLib.login(req,res);

  });

  //Router for normal login process//
  router.get('/login/social', function (req, res) {

    userLib.socialLogin(req,res);

  });

  //Router for forget password process//
  router.post('/password/forget', function (req, res) {

    userLib.forgetPassword(req,res);

  });

  //Router for forget password process//
  router.post('/password/forget/reset', function (req, res) {

    userLib.forgetPasswordReset(req,res);

  });

  //Router for change password process
  router.post('/password/change', function (req, res) {

    userLib.changePassword(req,res);

  });

  router.get('/facebook/auth/', passport.authenticate('facebook',{"scope":global.config.social_api.facebook.scope}));

  router.get('/facebook/auth/callback',passport.authenticate('facebook', { successRedirect: '/user/login/social',failureRedirect: '/error' }));

  router.get('/twitter/auth/', passport.authenticate('twitter',{"scope":global.config.social_api.twitter.scope}));

  router.get('/twitter/auth/callback',passport.authenticate('twitter', { successRedirect: '/user/login/social',failureRedirect: '/error' }));

  router.get('/google/auth/', passport.authenticate('google',{"scope":global.config.social_api.google.scope}));

  router.get('/google/auth/callback',
  passport.authenticate('google', { failureRedirect: '/error' }),function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/user/login/social');
  });

};
