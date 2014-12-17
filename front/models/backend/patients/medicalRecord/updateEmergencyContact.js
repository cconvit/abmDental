'use strict';

module.exports = function updateEmergencyContactModel(req) {

  return {
    "api_key":"537e5431cb0d7a1f4100064e",
    "language":"SPA",
    "timestamp":new Date(),
    "auth_code":"2014-09-26",
    "data":{
      "account_id":req.session.profile.account_id,
      "user_id":req.session.profile._id,
      "id_number":req.body.identity,
      "emergency_contact":{
                            "names":req.body.ec_names,
                            "last_name":req.body.ec_lastName,
                            "id_number":req.body.ec_identity,
                            "id_type":req.body.ec_identityType,
                            "relationship":req.body.ec_relationship,
                            "occupation":req.body.ec_occupation,
                            "phone":req.body.ec_phone,
                            "cell_phone":req.body.ec_cell_phone
                          }
    }

  };
};
