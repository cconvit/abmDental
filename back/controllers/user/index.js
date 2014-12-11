'use strict';

var userLib = require('../../lib/user/main');

module.exports = function (router) {

    //Router for signup process//
    router.post('/signup', function (req, res) {

      userLib.signup(req,res);

    });
    //Router for normal login process//
    router.post('/login', function (req, res) {

      userLib.login(req,res);

    });
    //Router for social lign process//
    router.post('/login/social', function (req, res) {

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

};
