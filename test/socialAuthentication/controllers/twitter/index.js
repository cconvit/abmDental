'use strict';

var passport = require('passport')
var TwitterModel = require('../../models/twitter');


module.exports = function (router) {

    var model = new TwitterModel();


    router.get('/auth/', passport.authenticate('twitter'));

    // Facebook will redirect the user to this URL after approval.  Finish the
    // authentication process by attempting to obtain an access token.  If
    // access was granted, the user will be logged in.  Otherwise,
    // authentication has failed.
    router.get('/auth/callback',
    passport.authenticate('twitter', { successRedirect: '/pepe2',
    failureRedirect: '/login2' }));

};
