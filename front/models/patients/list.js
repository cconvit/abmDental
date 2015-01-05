'use strict';

var util = require('../../lib/util/others');

module.exports = function listModel(req) {
  return {
           language:util.order_language(req.session.language),
           profile: {
                      "name":req.session.profile.name,
                      "avatar":req.session.profile.avatar,
                      "language":req.session.profile.language
                    },
           patients:[]
  };
};
