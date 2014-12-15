'use strict';


var IndexModel = require('../models/index');
var dashboardModel = require('../models/dashboard');

module.exports = function (router) {

    var model = new IndexModel();

    router.use(function(req, res, next) {

      // log each request to the console
      res.locals.context ={"locality":(req.session.language == null)?"en_US":req.session.language};

      // continue doing what we were doing and go to the route
      next();
    });


    router.get('/setLanguage/:locale', function (req, res) {

      req.session.language=req.params.locale;
      res.locals.context ={"locality":req.params.locale};
      res.redirect('/dashboard');

    });

    router.get('/', function (req, res) {


        res.render('index', {});

    });

    router.get('/dashboard', function (req, res) {

        var model=new dashboardModel(req.session.profile);
        //res.locals.context ={"locality":req.session.profile.language};
        console.log(model);
        res.render('dashboard', model);

    });

    router.get('/error', function (req, res) {


      res.json(req.session);

    });

};
