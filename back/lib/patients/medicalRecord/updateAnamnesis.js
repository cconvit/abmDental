'use strict';

var render = require('../../util/render');
var log = require('../../util/log');

var medicalRecordModel = require('../../../models/medicalRecord');


//###############################################//
//*************BEGING PUBLIC METHOD**************//
//###############################################//
/*

*/
var updateChiefComplaint=function(req, res,model){

  var ObjectId = require('mongoose').Types.ObjectId;

  medicalRecordModel.findOneAndUpdate({"_id":{"account_id":new ObjectId(model.account_id),"id_number":model.id_number}},
  {$set: {"chief_complaint":model.chief_complaint}},
  function(err, numAffected) {

    if(!err)
      render.RenderDefault(req, res, 200);//Medical record not found
      else
        render.RenderDefault(req, res, 524);//Medical record not found

      });

}

exports.updateChiefComplaint = updateChiefComplaint;

var updateFamilyHistory=function(req, res,model){

  var ObjectId = require('mongoose').Types.ObjectId;

  medicalRecordModel.findOneAndUpdate({"_id":{"account_id":new ObjectId(model.account_id),"id_number":model.id_number}},
  {$set: {"family_history":model.family_history}},
  function(err, numAffected) {

    if(!err)
      render.RenderDefault(req, res, 200);//Medical record not found
      else
        render.RenderDefault(req, res, 525);//Medical record not found

      });
}

exports.updateFamilyHistory = updateFamilyHistory;

var updateMedicalHistory=function(req, res,model){

  var ObjectId = require('mongoose').Types.ObjectId;

  medicalRecordModel.findOneAndUpdate({"_id":{"account_id":new ObjectId(model.account_id),"id_number":model.id_number}},
  {$set: {"medical_history":model.medical_history}},
  function(err, numAffected) {

    if(!err)
      render.RenderDefault(req, res, 200);//Medical record not found
      else
        render.RenderDefault(req, res, 526);//Medical record not found

      });
}

exports.updateMedicalHistory = updateMedicalHistory;

var updateDentalHistory=function(req, res,model){

  var ObjectId = require('mongoose').Types.ObjectId;

  medicalRecordModel.findOneAndUpdate({"_id":{"account_id":new ObjectId(model.account_id),"id_number":model.id_number}},
  {$set: {"dental_history":model.dental_history}},
  function(err, numAffected) {

    if(!err)
      render.RenderDefault(req, res, 200);//Medical record not found
      else
        render.RenderDefault(req, res, 527);//Medical record not found

      });
}

exports.updateDentalHistory = updateDentalHistory;

var updateRiskFactors=function(req, res,model){

  var ObjectId = require('mongoose').Types.ObjectId;

  medicalRecordModel.findOneAndUpdate({"_id":{"account_id":new ObjectId(model.account_id),"id_number":model.id_number}},
  {$set: {"risk_factors":model.risk_factors}},
  function(err, numAffected) {

    if(!err)
      render.RenderDefault(req, res, 200);//Medical record not found
      else
        render.RenderDefault(req, res, 528);//Medical record not found

      });
}

exports.updateRiskFactors = updateRiskFactors;

var updateCurrentMedication=function(req, res,model){

  var ObjectId = require('mongoose').Types.ObjectId;

  medicalRecordModel.findOneAndUpdate({"_id":{"account_id":new ObjectId(model.account_id),"id_number":model.id_number}},
  {$set: {"current_medication":model.current_medication}},
  function(err, numAffected) {

    if(!err)
       render.RenderDefault(req, res, 200);//Medical record not found
      else
        render.RenderDefault(req, res, 529);//Medical record not found

      });
}

exports.updateCurrentMedication = updateCurrentMedication;

//###############################################//
//***************END PUBLIC METHOD***************//
//###############################################//


//###############################################//
//************BEGING PRIVATE METHOD**************//
//###############################################//

//###############################################//
//*************END PRIVATE METHOD****************//
//###############################################//
