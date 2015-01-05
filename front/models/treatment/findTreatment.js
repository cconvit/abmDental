'use strict';

var util = require('../../lib/util/others');


module.exports = function findTreatmentModel(profile) {
    return {
      language:util.order_language(profile.language),
      profile: {
                 "name":profile.name,
                 "avatar":profile.avatar,
                 "language":profile.language
               },
      id_number:"",
      personal_info: {},
      treatment: {}
    };
};
