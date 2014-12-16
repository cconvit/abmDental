'use strict';

var render = require('../../util/render');
var validator = require('./validation');
var newPatientClass = require('./newPatient');
var findMedicalRecordClass = require('./findMedicalRecord');
var updatePersonalInfoClass = require('./updatePersonalInfo');

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
    updatePersonalInfoClass.updatePersonalInfo(req,res,model.data);
  }else
    render.RenderDefault(req, res, 427);//Error bad request message

  }

exports.updatePersonalInfo = updatePersonalInfo;
