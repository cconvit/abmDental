'use strict';

var treatmentLib = require('../../../lib/patients/treatment/main');

module.exports = function (router) {

  router.post('/find', function (req, res) {

    treatmentLib.findTreatment(req,res);

  });

  router.post('/orthodontic/diagnosis/update', function (req, res) {

    treatmentLib.updateDiagnosis(req,res);

  });

  router.post('/orthodontic/treatmentPlan/update', function (req, res) {

    treatmentLib.updateTreatmentPlan(req,res);

  });

  router.post('/orthodontic/occlusionDiagnosis/update', function (req, res) {

    treatmentLib.updateOcclusionDiagnosis(req,res);

  });

  router.post('/orthodontic/treatmentTimeline/add', function (req, res) {

    treatmentLib.addTreatmentTimeline(req,res);

  });

  router.post('/orthodontic/facialDiagnosis/update', function (req, res) {

    treatmentLib.updateFacialDiagnosis(req,res);

  });

  router.post('/orthodontic/temporomandibular/update', function (req, res) {

    treatmentLib.updateTemporomandibular(req,res);

  });

};
