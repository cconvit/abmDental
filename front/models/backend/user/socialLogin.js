'use strict';


module.exports = function socialLoginModel(req) {
  return {
    "api_key":"537e5431cb0d7a1f4100064e",
    "language":"SPA",
    "timestamp":new Date(),
    "auth_code":"2014-09-26",
    "data":req.session.passport.user
  };
};
