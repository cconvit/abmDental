'use strict';

var util = require('../../lib/util/others');

module.exports = function listModel(profile) {
  return {
           language:util.order_language(profile.language),
           profile: {
                      "name":profile.name,
                      "avatar":profile.avatar,
                      "language":profile.language
                    },
           patients:[
                    {
                      "names":"Carlos Euardo",
                      "last_name":"Convit Cordova",
                      "id_number":"398912"
                    },
                    {
                      "names":"Alexandra",
                      "last_name":"Barbera Mijares",
                      "id_number":"399587"
                    }
           ]
  };
};
