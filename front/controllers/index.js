'use strict';


var IndexModel = require('../models/index');
var dashboardModel = require('../models/dashboard');

module.exports = function (router) {

    var model = new IndexModel();

    router.use(function(req, res, next) {

      // log each request to the console
      res.locals.context ={"locality":(req.session.profile == null)?"es_ES":req.session.profile.language};

      // continue doing what we were doing and go to the route
      next();
    });


    router.get('/setLanguage/:locale', function (req, res) {

      req.session.profile.language=req.params.locale;
      res.redirect('/dashboard');

    });

    router.get('/', function (req, res) {

        model.alert={"type":"loginError","msg":"Mensaje","title":"Titulo"};
        res.render('index', model);

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
