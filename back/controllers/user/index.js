'use strict';

var userLib = require('../../lib/user/user');


var UserModel = require('../../models/user');


module.exports = function (router) {

    var model = new UserModel();


    router.get('/', function (req, res) {

        res.format({
            json: function () {
                res.json(model);
            },
            html: function () {
                res.render('user/index', model);
            }
        });
    });
    //Router for signup process//
    router.post('/signup', function (req, res) {

      userLib.signup(req,res);

    });
    //Router for normal login process//
    router.post('/login', function (req, res) {});
    //Router for social lign process//
    router.post('/login/social', function (req, res) {});
    //Router for forget password process//
    router.post('/password/forget', function (req, res) {});
    //Router for change password process
    router.post('/password/change', function (req, res) {});

};
