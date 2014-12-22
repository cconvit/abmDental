'use strict';
var moment = require('moment');

module.exports = function newPatientModel(req) {

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
                        "names":req.body.names,
                        "last_name":req.body.lastName,
                        "id_type":req.body.identityType,
                        "date_of_birth":new Date(date_of_birth),
                        "place_of_birth":req.body.placeOfBirth,
                        "age":req.body.age,
                        "civil_status":req.body.civilStatus,
                        "genre":req.body.genre,
                        "origin":req.body.origin,
                        "occupation":req.body.occupation,
                        "workplace":req.body.workplace,
                        "phone":req.body.phone,
                        "cell_phone":req.body.cellPhone,
                        "email":req.body.email,
                        "neighborhood":req.body.neighborhood,
                        "home_phone":req.body.homePhone,
                        "department":req.body.department,
                        "image":req.body.avatar
                      }
    }

  };
};
