'use strict';


var ProfileModel = require('../../models/profile');


module.exports = function (router) {

    var model = new ProfileModel();


    router.get('/', function (req, res) {

        res.format({
            json: function () {
                res.json(model);
            },
            html: function () {
                res.render('settings/index', model);
            }
        });
    });

};
