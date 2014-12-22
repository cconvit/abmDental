'use strict';

module.exports = function addEventTimelineModel(req) {

  return {
    "api_key":"537e5431cb0d7a1f4100064e",
    "language":"SPA",
    "timestamp":new Date(),
    "auth_code":"2014-09-26",
    "data":{
      "account_id":req.session.profile.account_id,
      "user_id":req.session.profile._id,
      "id_number":req.body.identity,
      "event":{
                "title":req.body.orthodonticsModalTitle,
                "user_id":req.session.profile._id,
                "description":req.body.orthodonticsModalDescription,
                "type":req.body.orthodonticsModalType,
                "datetime":new Date()
                  }
    }

  };
};
