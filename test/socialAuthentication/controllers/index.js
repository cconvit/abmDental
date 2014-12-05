'use strict';


var IndexModel = require('../models/index');


module.exports = function (router) {

    var model = new IndexModel();


    router.get('/pepe', function (req, res) {
      console.log(req.session);
      console.log(req.session.passport);
        console.log(req.session.passport.user.facebook);
        res.render('index', {});

    });

    router.get('/pepe2', function (req, res) {
      console.log(req.session);
      console.log(req.session.passport);
      console.log(req.session.passport.user.twitter);
      res.render('index', {});

    });

    router.get('/pepe3', function (req, res) {
      console.log(req.session);
      console.log(req.session.passport);
      console.log(req.session.passport.user.google);
      res.render('index', {});

    });


};
