'use strict';

var treatmentLib = require('../../../lib/patients/treatment/main');

module.exports = function (router) {

  router.post('/find', function (req, res) {

    treatmentLib.findTreatment(req,res);

  });


};
