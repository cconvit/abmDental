'use strict';

var render = require('../../util/render');
var validator = require('./validation');
var newPatientClass = require('./newPatient');
var findMedicalRecordClass = require('./findMedicalRecord');
var updateGeneralInfoClass = require('./updateGeneralInfo');
var updateAnamnesisClass = require('./updateAnamnesis');

//Method to start the change password master process//
var newPatient=function(req, res){

  //Validate request message//
  var model=validator.newPatient(req.body.data);

  //isValid//
  if(model.status){
    newPatientClass.newPatient(req,res,model.data);
  }else
    render.RenderDefault(req, res, 510);//Error bad request message

  }

exports.newPatient = newPatient;


var findMedicalRecord=function(req, res){

  //Validate request message//
  var model=validator.findMedicalRecord(req.body.data);

  //isValid//
  if(model.status){
    findMedicalRecordClass.findMedicalRecord(req,res,model.data);
  }else
    render.RenderDefault(req, res, 427);//Error bad request message

  }

exports.findMedicalRecord = findMedicalRecord;

var updatePersonalInfo=function(req, res){

  //Validate request message//
  var model=validator.updatePersonalInfo(req.body.data);

  //isValid//
  if(model.status){
    updateGeneralInfoClass.updatePersonalInfo(req,res,model.data);
  }else
    render.RenderDefault(req, res, 427);//Error bad request message

  }

exports.updatePersonalInfo = updatePersonalInfo;

var updateEmergencyContact=function(req, res){

//Validate request message//
var model=validator.updateEmergencyContact(req.body.data);

//isValid//
if(model.status){
  updateGeneralInfoClass.updateEmergencyContact(req,res,model.data);
}else
  render.RenderDefault(req, res, 427);//Error bad request message
}

exports.updateEmergencyContact = updateEmergencyContact;

var updateChiefComplaint=function(req, res,model){

  //Validate request message//
  var model=validator.updateChiefComplaint(req.body.data);

  //isValid//
  if(model.status){
    updateAnamnesisClass.updateChiefComplaint(req,res,model.data);
  }else
    render.RenderDefault(req, res, 427);//Error bad request message

}

exports.updateChiefComplaint = updateChiefComplaint;

var updateFamilyHistory=function(req, res,model){

  //Validate request message//
  var model=validator.updateFamilyHistory(req.body.data);

  //isValid//
  if(model.status){
    updateAnamnesisClass.updateFamilyHistory(req,res,model.data);
  }else
    render.RenderDefault(req, res, 427);//Error bad request message

}

exports.updateFamilyHistory = updateFamilyHistory;

var updateMedicalHistory=function(req, res,model){

  //Validate request message//
  var model=validator.updateMedicalHistory(req.body.data);

  //isValid//
  if(model.status){
    updateAnamnesisClass.updateMedicalHistory(req,res,model.data);
  }else
    render.RenderDefault(req, res, 427);//Error bad request message

}

exports.updateMedicalHistory = updateMedicalHistory;

var updateDentalHistory=function(req, res,model){

  //Validate request message//
  var model=validator.updateDentalHistory(req.body.data);

  //isValid//
  if(model.status){
    updateAnamnesisClass.updateDentalHistory(req,res,model.data);
  }else
    render.RenderDefault(req, res, 427);//Error bad request message
}

exports.updateDentalHistory = updateDentalHistory;

var updateRiskFactors=function(req, res,model){

  //Validate request message//
  var model=validator.updateRiskFactors(req.body.data);

  //isValid//
  if(model.status){
    updateAnamnesisClass.updateRiskFactors(req,res,model.data);
  }else
    render.RenderDefault(req, res, 427);//Error bad request message
}

exports.updateRiskFactors = updateRiskFactors;

var updateCurrentMedication=function(req, res,model){

  //Validate request message//
  var model=validator.updateCurrentMedication(req.body.data);

  //isValid//
  if(model.status){
    updateAnamnesisClass.updateCurrentMedication(req,res,model.data);
  }else
    render.RenderDefault(req, res, 427);//Error bad request message
}

exports.updateCurrentMedication = updateCurrentMedication;
