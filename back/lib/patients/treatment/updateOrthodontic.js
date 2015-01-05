'use strict';

var render = require('../../util/render');
var log = require('../../util/log');
var files = require('../../aws/files');
var icon = require('../../util/icon');
var orthodonticTreatmentModel = require('../../../models/orthodonticTreatment');

//###############################################//
//*************BEGING PUBLIC METHOD**************//
//###############################################//
/*

*/
var updateDiagnosis=function(req, res,model){

  var ObjectId = require('mongoose').Types.ObjectId;

  orthodonticTreatmentModel.findOneAndUpdate({"_id":{"account_id":new ObjectId(model.account_id),"id_number":model.id_number}},
  {$set: {"diagnosis":model.diagnosis}},{upsert: true},
  function(err, numAffected) {

    if(!err)
      render.RenderDefault(req, res, 200);//Medical record not found
    else
      render.RenderDefault(req, res, 530);//Medical record not found

  });
}
exports.updateDiagnosis = updateDiagnosis;

var updateTreatmentPlan=function(req, res,model){

  var ObjectId = require('mongoose').Types.ObjectId;

  orthodonticTreatmentModel.findOneAndUpdate({"_id":{"account_id":new ObjectId(model.account_id),"id_number":model.id_number}},
  {$set: {"treatment_plan":model.treatment_plan}},{upsert: true},
  function(err, numAffected) {

    if(!err)
      render.RenderDefault(req, res, 200);//Medical record not found
    else
      render.RenderDefault(req, res, 531);//Medical record not found

  });

}
exports.updateTreatmentPlan = updateTreatmentPlan;

var updateOcclusionDiagnosis=function(req, res,model){

  var ObjectId = require('mongoose').Types.ObjectId;

  orthodonticTreatmentModel.findOneAndUpdate({"_id":{"account_id":new ObjectId(model.account_id),"id_number":model.id_number}},
  {$set: {"occlusion_diagnosis":model.occlusion_diagnosis}},{upsert: true},
  function(err, numAffected) {

    if(!err)
      render.RenderDefault(req, res, 200);//Medical record not found
    else
      render.RenderDefault(req, res, 532);//Medical record not found

  });

}
exports.updateOcclusionDiagnosis = updateOcclusionDiagnosis;

var addTreatmentTimeline=function(req, res,model){

  var ObjectId = require('mongoose').Types.ObjectId;

  model.event.icon=icon.orthodonticTimeline(model.event.type);


  orthodonticTreatmentModel.findOneAndUpdate({"_id":{"account_id":new ObjectId(model.account_id),"id_number":model.id_number}},
  {$push: {"treatment_timeline.event":model.event}},{upsert: true},
  function(err, numAffected) {

    if(!err){

      var response={};
      response.data={"event":model.event};

      render.RenderModel(req, res, 200,response);//Signup successfully

    }
    else
      render.RenderDefault(req, res, 533);//Medical record not found

  });

}
exports.addTreatmentTimeline = addTreatmentTimeline;

var updateFacialDiagnosis=function(req, res,model){

  var ObjectId = require('mongoose').Types.ObjectId;

  orthodonticTreatmentModel.findOneAndUpdate({"_id":{"account_id":new ObjectId(model.account_id),"id_number":model.id_number}},
  {$set: {"facial_diagnosis":model.facial_diagnosis}},{upsert: true},
  function(err, numAffected) {

    if(!err)
      render.RenderDefault(req, res, 200);//Medical record not found
    else
      render.RenderDefault(req, res, 534);//Medical record not found

  });
}
exports.updateFacialDiagnosis = updateFacialDiagnosis;

var updateTemporomandibular=function(req, res,model){

  var ObjectId = require('mongoose').Types.ObjectId;

  orthodonticTreatmentModel.findOneAndUpdate({"_id":{"account_id":new ObjectId(model.account_id),"id_number":model.id_number}},
  {$set: {"temporomandibular":model.temporomandibular}},{upsert: true},
  function(err, numAffected) {

    if(!err)
      render.RenderDefault(req, res, 200);//Medical record not found
    else
      render.RenderDefault(req, res, 535);//Medical record not found

  });
}
exports.updateTemporomandibular = updateTemporomandibular;

var fileUpload=function(req, res,model){

  var ObjectId = require('mongoose').Types.ObjectId;
  model.file._id=new ObjectId();

  orthodonticTreatmentModel.findOneAndUpdate({"_id":{"account_id":new ObjectId(model.account_id),"id_number":model.id_number}},
  {$push: {"files":model.file}},{upsert: true},
  function(err, numAffected) {

    if(!err){

      var response={};
      response.data={"file":model.file};

      render.RenderModel(req, res, 200,response);//Signup successfully

    }
    else
      render.RenderDefault(req, res, 536);//Medical record not found

  });

}
exports.fileUpload = fileUpload;

//###############################################//
//***************END PUBLIC METHOD***************//
//###############################################//


//###############################################//
//************BEGING PRIVATE METHOD**************//
//###############################################//


//###############################################//
//*************END PRIVATE METHOD****************//
//###############################################//
