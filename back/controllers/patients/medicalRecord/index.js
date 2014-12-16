'use strict';

var medicalRecordLib = require('../../../lib/patients/medicalRecord/main');

module.exports = function (router) {

  //Router for signup process//
  router.post('/add', function (req, res) {

    medicalRecordLib.newPatient(req,res);

  });

  router.post('/find', function (req, res) {

    medicalRecordLib.findMedicalRecord(req,res);

  });

  router.post('/generalInfo/personalInfo/update', function (req, res) {

    medicalRecordLib.updatePersonalInfo(req,res);

  });


};
