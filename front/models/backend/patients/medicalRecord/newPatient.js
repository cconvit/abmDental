'use strict';


module.exports = function newPatientModel(req) {

  return {
    "api_key":"537e5431cb0d7a1f4100064e",
    "language":"SPA",
    "timestamp":new Date(),
    "auth_code":"2014-09-26",
    "data":{
      "account_id":req.session.profile.account_id,
      "user_id":req.session.profile._id,
      "names":req.body.modalNames,
      "last_name":req.body.modalLastName,
      "id_number":req.body.modalIdentity,
      "id_type":req.body.modalIdentityType
    }

  };
};
