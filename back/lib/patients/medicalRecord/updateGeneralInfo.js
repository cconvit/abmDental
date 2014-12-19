'use strict';

var render = require('../../util/render');
var log = require('../../util/log');

var medicalRecordModel = require('../../../models/medicalRecord');


//###############################################//
//*************BEGING PUBLIC METHOD**************//
//###############################################//
/*

*/
var updatePersonalInfo=function(req, res,model){

  var ObjectId = require('mongoose').Types.ObjectId;

  medicalRecordModel.findOneAndUpdate({"_id":{"account_id":new ObjectId(model.account_id),"id_number":model.id_number}},
  {$set: {"personal_info":model.personal_info}},
  function(err, numAffected) {

    if(!err)
      render.RenderDefault(req, res, 200);//Medical record not found
    else
      render.RenderDefault(req, res, 522);//Medical record not found

  });

}

exports.updatePersonalInfo = updatePersonalInfo;

var updatePersonalInfoPortrait=function(req, res,model){

  var ObjectId = require('mongoose').Types.ObjectId;
console.log(model);
  medicalRecordModel.findOneAndUpdate({"_id":{"account_id":new ObjectId(model.account_id),"id_number":model.id_number}},
  {$set: {"personal_info.image":model.personal_info.image}},
  function(err, numAffected) {
console.log(err);
    if(!err)
        render.RenderDefault(req, res, 200);//Medical record not found
      else
        render.RenderDefault(req, res, 522);//Medical record not found

      });

    }

    exports.updatePersonalInfoPortrait = updatePersonalInfoPortrait;

var updateEmergencyContact=function(req, res,model){

  var ObjectId = require('mongoose').Types.ObjectId;

  medicalRecordModel.findOneAndUpdate({"_id":{"account_id":new ObjectId(model.account_id),"id_number":model.id_number}},
  {$set: {"emergency_contact":model.emergency_contact}},
  function(err, numAffected) {

    if(!err)
      render.RenderDefault(req, res, 200);//Medical record not found
      else
        render.RenderDefault(req, res, 523);//Medical record not found

     });

    }

exports.updateEmergencyContact = updateEmergencyContact;

//###############################################//
//***************END PUBLIC METHOD***************//
//###############################################//


//###############################################//
//************BEGING PRIVATE METHOD**************//
//###############################################//


//###############################################//
//*************END PRIVATE METHOD****************//
//###############################################//
