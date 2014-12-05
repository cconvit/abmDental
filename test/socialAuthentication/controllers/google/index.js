'use strict';

var passport = require('passport')
var GoogleModel = require('../../models/google');


module.exports = function (router) {

    var model = new GoogleModel();


    router.get('/auth/', passport.authenticate('google',{ scope: 'https://www.googleapis.com/auth/plus.profile.emails.read' }));

    // Facebook will redirect the user to this URL after approval.  Finish the
    // authentication process by attempting to obtain an access token.  If
    // access was granted, the user will be logged in.  Otherwise,
    // authentication has failed.
    router.get('/auth/callback',
    passport.authenticate('google', { failureRedirect: '/login3' }),function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/pepe3');
    });




};
