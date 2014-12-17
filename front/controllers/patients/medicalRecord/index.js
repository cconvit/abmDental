'use strict';

var medicalRecordLib = require('../../../lib/patients/medicalRecord/main');

module.exports = function (router) {

  //Router for signup process//
  router.post('/add', function (req, res) {

    medicalRecordLib.newPatient(req,res);

  });

  router.post('/generalInfo/personalInfo', function (req, res) {

    medicalRecordLib.updatePersonalInfo(req,res);

  });

  router.post('/generalInfo/emergencyContact', function (req, res) {

    medicalRecordLib.updateEmergencyContact(req,res);

  });

  router.post('/anamnesis/chiefComplaint', function (req, res) {

    medicalRecordLib.updateChiefComplaint(req,res);

  });

  router.post('/anamnesis/familyHistory', function (req, res) {

    medicalRecordLib.updateFamilyHistory(req,res);

  });

  router.post('/anamnesis/medicalHistory', function (req, res) {

    medicalRecordLib.updateMedicalHistory(req,res);

  });

  router.post('/anamnesis/dentalHistory', function (req, res) {

    medicalRecordLib.updateDentalHistory(req,res);

  });

  router.post('/anamnesis/riskFactors', function (req, res) {

    medicalRecordLib.updateRiskFactors(req,res);

  });

  router.post('/anamnesis/currentMedication', function (req, res) {


    medicalRecordLib.updateCurrentMedication(req,res);

  });

};
