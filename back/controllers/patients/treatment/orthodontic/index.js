'use strict';

var treatmentLib = require('../../../../lib/patients/treatment/main');

module.exports = function (router) {

  router.post('/find', function (req, res) {

    treatmentLib.findTreatment(req,res);

  });

  router.post('/diagnosis/update', function (req, res) {

    treatmentLib.updateDiagnosis(req,res);

  });

  router.post('/treatmentPlan/update', function (req, res) {

    treatmentLib.updateTreatmentPlan(req,res);

  });

  router.post('/occlusionDiagnosis/update', function (req, res) {

    treatmentLib.updateOcclusionDiagnosis(req,res);

  });

  router.post('/treatmentTimeline/add', function (req, res) {

    treatmentLib.addTreatmentTimeline(req,res);

  });

  router.post('/facialDiagnosis/update', function (req, res) {

    treatmentLib.updateFacialDiagnosis(req,res);

  });

  router.post('/temporomandibular/update', function (req, res) {

    treatmentLib.updateTemporomandibular(req,res);

  });

  router.post('/file/upload', function (req, res) {

    treatmentLib.fileUpload(req,res);

  });

  router.post('/file/view', function (req, res) {

    treatmentLib.fileView(req,res);

  });


};
