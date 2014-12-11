'use strict';


module.exports = function signupModel(req) {
    return {
      "api_key":"537e5431cb0d7a1f4100064e",
      "language":"SPA",
      "timestamp":new Date(),
      "auth_code":"2014-09-26",
      "data":{
        "name":req.body.fullname,
        "email":req.body.email,
        "username":req.body.username,
        "password":req.body.password,
        "city":req.body.city,
        "gender":""
      }

    };
};
