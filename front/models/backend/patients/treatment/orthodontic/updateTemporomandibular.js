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
      "temporomandibular":{
                            "clicking_left":req.body.clickingLeft,
                            "clicking_right":req.body.clickingRight,
                            "pain_left":req.body.painLeft,
                            "pain_right":req.body.painRight,
                            "deviation_left":req.body.deviationLeft,
                            "deviation_right":req.body.deviationRight,
                            "deflection_left":req.body.deflectionLeft,
                            "deflection_right":req.body.deflectionRight
                  }
    }

  };
};
