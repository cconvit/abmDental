'use strict';

var medicalRecordLib = require('../../../lib/patients/medicalRecord/main');

module.exports = function (router) {

  //Router for signup process//
  router.post('/add', function (req, res) {

    medicalRecordLib.newPatient(req,res);

  });


};
