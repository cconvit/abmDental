'use strict';

var passport = require('passport')
var FacebookModel = require('../../models/facebook');


module.exports = function (router) {

    var model = new FacebookModel();


    router.get('/auth/facebook', passport.authenticate('facebook'));

    // Facebook will redirect the user to this URL after approval.  Finish the
    // authentication process by attempting to obtain an access token.  If
    // access was granted, the user will be logged in.  Otherwise,
    // authentication has failed.
    router.get('/auth/facebook/callback',
    passport.authenticate('facebook', { successRedirect: '/',
    failureRedirect: '/login' }));

};
