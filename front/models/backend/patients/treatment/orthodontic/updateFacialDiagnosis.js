'use strict';

module.exports = function updateDiagnosisModel(req) {

  return {
    "api_key":"537e5431cb0d7a1f4100064e",
    "language":"SPA",
    "timestamp":new Date(),
    "auth_code":"2014-09-26",
    "data":{
      "account_id":req.session.profile.account_id,
      "user_id":req.session.profile._id,
      "id_number":req.body.identity,
      "facial_diagnosis":{
                          "facial_type":req.body.faceType,
                          "asymmetry":req.body.asymmetry,
                          "smile_line":req.body.smileLine,
                          "lip_incompetence":req.body.lipIncompetence,
                          "facial_profile":req.body.facialProfile
                  }
    }

  };
};
