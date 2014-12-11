'use strict';
var session = require('express-session');
var RedisStore = require('connect-redis')(session);


var config=function(app){

  app.use(session({
    secret: "y0urR4nd0mT0k3n",
    resave: true,
    saveUninitialized: true,
    store : new RedisStore(global.config.redis.store),
    cookie : global.config.redis.cookie
  }));

}

exports.config = config;
