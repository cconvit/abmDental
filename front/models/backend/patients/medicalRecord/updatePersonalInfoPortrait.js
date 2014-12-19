'use strict';
var moment = require('moment');

module.exports = function newPatientModel(req,key) {

  var date_of_birth=(req.body.dateOfBirth != '')? moment(req.body.dateOfBirth, "DD-MM-YYYY").format('YYYY-DD-MM'):'';

  return {
    "api_key":"537e5431cb0d7a1f4100064e",
    "language":"SPA",
    "timestamp":new Date(),
    "auth_code":"2014-09-26",
    "data":{
      "account_id":req.session.profile.account_id,
      "user_id":req.session.profile._id,
      "id_number":req.body.identity,
      "personal_info":{
                        "image":key
                      }
    }

  };
};
