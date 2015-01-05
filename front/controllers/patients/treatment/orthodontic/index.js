'use strict';

var orthodonticLib = require('../../../../lib/patients/treatment/orthodontic/main');

module.exports = function (router) {

  router.post('/diagnosis/update', function (req, res) {

    orthodonticLib.updateDiagnosis(req,res);

  });

  router.post('/treatmentPlan/update', function (req, res) {

    orthodonticLib.updateTreatmentPlan(req,res);

  });

  router.post('/occlusionDiagnosis/update', function (req, res) {

    orthodonticLib.updateOcclusionDiagnosis(req,res);

  });

  router.post('/treatmentTimeline/add', function (req, res) {

    orthodonticLib.addEventTimeline(req,res);

  });

  router.post('/facialDiagnosis/update', function (req, res) {

    orthodonticLib.updateFacialDiagnosis(req,res);

  });

  router.post('/temporomandibular/update', function (req, res) {

    orthodonticLib.updateTemporomandibular(req,res);

  });

  router.post('/file/upload', function (req, res) {

    
    orthodonticLib.fileUpload(req,res);

  });


};
