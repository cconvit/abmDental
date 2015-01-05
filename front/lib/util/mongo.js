'use strict';
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var config=function(app){

  app.use(session({
    secret: "y0urR4nd0mT0k3n",
    resave: true,
    saveUninitialized: true,
    store : new MongoStore(global.config.mongo.store)
  }));

}

exports.config = config;
