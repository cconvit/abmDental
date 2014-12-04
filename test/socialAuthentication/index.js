'use strict';

var http = require('http');
var express = require('express');
var kraken = require('kraken-js');
var passport = require('passport')
, FacebookStrategy = require('passport-facebook').Strategy;


var options, app, server;

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
        next(null, config);

        passport.use(new FacebookStrategy({
          clientID: "1024949640864497",
          clientSecret: "34bfd397111e7503867453d57a7ba986",
          callbackURL: "http://localhost:30000/auth/facebook/callback"
        },
        function(accessToken, refreshToken, profile, done) {
        }
        ));
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
