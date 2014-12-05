'use strict';

var http = require('http');
var express = require('express');
var kraken = require('kraken-js');
var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy,
    TwitterStrategy = require('passport-twitter').Strategy,
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
    var session = require('express-session')
    var RedisStore = require('connect-redis')(session);


var options, app, server;


passport.use(new FacebookStrategy({
  clientID: "1024949640864497",
  clientSecret: "34bfd397111e7503867453d57a7ba986",
  callbackURL: "http://test.app.abmdental.com.co:3000/facebook/auth/callback"
},
function(accessToken, refreshToken, profile, done) {
console.log("TOKEN:"+accessToken+"END")

var user={};
user.facebook=profile;
user.name="Hola Mundo carlos convit";

done(null, user);

}
));

passport.use(new TwitterStrategy({
  consumerKey: "MCEqLTjLNBYtPgmaZrfRL0VQA",
  consumerSecret: "MLtirCctLfuivg3gftX3ueNek2zDW214UpFdkV6HreqfVwjz8x",
  callbackURL: "http://test.app.abmdental.com.co:3000/twitter/auth/callback"
},
function(token, tokenSecret, profile, done) {

  var user={};
  user.twitter=profile;
  user.name="Hola Twitter carlos convit";

  done(null, user);

  }
));

passport.use(new GoogleStrategy({
  clientID: "310583780016-iagpd3ae5g3p51ht09l7felu8iug05us.apps.googleusercontent.com",
  clientSecret: "7EVY4JNw9F7KgCbL1Vt8dIrc",
  callbackURL: "http://test.app.abmdental.com.co:3000/google/auth/callback"
},
function(accessToken, refreshToken, profile, done) {

console.log("oeoe");
console.log(profile);
console.log("oeoe2");
  var user={};
  user.google=profile;
  user.name="Hola Google carlos convit";

  done(null, user);


}
));

passport.serializeUser(function(user, done){
  done(null, user);
});

passport.deserializeUser(function(user, done){
  done(null, user);
});



/*
 * Create and configure application. Also exports application instance for use by tests.
 * See https://github.com/krakenjs/kraken-js#options for additional configuration options.
 */
options = {
    onconfig: function (config, next) {
        /*
         * Add any additional config setup or overrides here. `config` is an initialized
         * `confit` (https://github.com/krakenjs/confit/) configuration object.
         */
         app.use(session({
           secret: "y0urR4nd0mT0k3n",
           resave: true,
           saveUninitialized: true,
           store : new RedisStore({
             host : "pub-redis-14583.us-east-1-4.4.ec2.garantiadata.com",
             port : "14583",
             user : "abmdentalDev",
             pass : "Aa123456*"
           }),
           cookie : {
             maxAge : 604800 // one week
           }
         }));
         app.use(passport.initialize());
         app.use(passport.session());

        next(null, config);


    }
};

app = module.exports = express();
app.use(kraken(options));

app.on('start', function () {
    console.log('Application ready to serve requests.');
    console.log('Environment: %s', app.kraken.get('env:env'));
});



/*
 * Create and start HTTP server.
 */
if (!module.parent) {

    /*
     * This is only done when this module is run directly, e.g. `node .` to allow for the
     * application to be used in tests without binding to a port or file descriptor.
     */
    server = http.createServer(app);
    server.listen(process.env.PORT || 3000);
    server.on('listening', function () {
        console.log('Server listening on http://localhost:%d', this.address().port);
    });

}
