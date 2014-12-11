'use strict';

var userLib = require('../../lib/user/main');
var passport = require('passport')

module.exports = function (router) {

  //Router for signup process//
  router.post('/signup', function (req, res) {

    userLib.signup(req,res);
  });
  //Router for normal login process//
  router.post('/login', function (req, res) {

    userLib.login(req,res);

  });

  //Router for normal login process//
  router.get('/facebook/login', function (req, res) {

    console.log(req.session);
    res.json({});

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

  router.get('/facebook/auth/', passport.authenticate('facebook'));

  router.get('/facebook/auth/callback',passport.authenticate('facebook', { successRedirect: '/user/facebook/login',failureRedirect: '/error' }));

  router.get('/twitter/auth/', passport.authenticate('twitter'));

  router.get('/twitter/auth/callback',passport.authenticate('twitter', { successRedirect: '/pepe',failureRedirect: '/error' }));

  router.get('/google/auth/', passport.authenticate('google',{scope:global.config.social_api.google.scope}));

  router.get('/google/auth/callback',
  passport.authenticate('google', { failureRedirect: '/error' }),function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/pepe');
  });

};
