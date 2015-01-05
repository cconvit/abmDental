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

  router.post('/list', function (req, res) {

    medicalRecordLib.listMedicalRecord(req,res);

  });

  router.post('/del', function (req, res) {

    medicalRecordLib.delMedicalRecord(req,res);
    
  });

  router.post('/generalInfo/personalInfo/update', function (req, res) {

    medicalRecordLib.updatePersonalInfo(req,res);

  });

  router.post('/generalInfo/personalInfo/portrait/upload', function (req, res) {

    medicalRecordLib.updatePersonalInfoPortrait(req,res);

  });

  router.post('/generalInfo/emergencyContact/update', function (req, res) {

    medicalRecordLib.updateEmergencyContact(req,res);

  });

  router.post('/anamnesis/chiefComplaint/update', function (req, res) {

    medicalRecordLib.updateChiefComplaint(req,res);

  });

  router.post('/anamnesis/familyHistory/update', function (req, res) {

    medicalRecordLib.updateFamilyHistory(req,res);

  });

  router.post('/anamnesis/medicalHistory/update', function (req, res) {

    medicalRecordLib.updateMedicalHistory(req,res);

  });

  router.post('/anamnesis/dentalHistory/update', function (req, res) {

    medicalRecordLib.updateDentalHistory(req,res);

  });

  router.post('/anamnesis/riskFactors/update', function (req, res) {

    medicalRecordLib.updateRiskFactors(req,res);

  });

  router.post('/anamnesis/currentMedication/update', function (req, res) {

    medicalRecordLib.updateCurrentMedication(req,res);

  });


};
