'use strict';

var render = require('../../util/render');
var validator = require('./validation');
var findTreatmentClass = require('./findTreatment');
var updateOrthodonticClass = require('./updateOrthodontic');


var findTreatment=function(req, res){

  //Validate request message//
  var model=validator.findTreatment(req.body.data);

  //isValid//
  if(model.status){
    findTreatmentClass.findTreatment(req,res,model.data);
  }else
    render.RenderDefault(req, res, 427);//Error bad request message

  }

exports.findTreatment = findTreatment;


var updateDiagnosis=function(req, res){

  //Validate request message//
  var model=validator.updateDiagnosis(req.body.data);

  //isValid//
  if(model.status){
    updateOrthodonticClass.updateDiagnosis(req,res,model.data);
  }else
    render.RenderDefault(req, res, 427);//Error bad request message


}
exports.updateDiagnosis = updateDiagnosis;

var updateTreatmentPlan=function(req, res){

  //Validate request message//
  var model=validator.updateTreatmentPlan(req.body.data);

  //isValid//
  if(model.status){
    updateOrthodonticClass.updateTreatmentPlan(req,res,model.data);
  }else
    render.RenderDefault(req, res, 427);//Error bad request message

}
exports.updateTreatmentPlan = updateTreatmentPlan;

var updateOcclusionDiagnosis=function(req, res){

  //Validate request message//
  var model=validator.updateOcclusionDiagnosis(req.body.data);

  //isValid//
  if(model.status){
    updateOrthodonticClass.updateOcclusionDiagnosis(req,res,model.data);
  }else
    render.RenderDefault(req, res, 427);//Error bad request message


}
exports.updateOcclusionDiagnosis = updateOcclusionDiagnosis;

var addTreatmentTimeline=function(req, res){

  //Validate request message//
  var model=validator.addTreatmentTimeline(req.body.data);

  //isValid//
  if(model.status){
    updateOrthodonticClass.addTreatmentTimeline(req,res,model.data);
  }else
    render.RenderDefault(req, res, 427);//Error bad request message


}
exports.addTreatmentTimeline = addTreatmentTimeline;

var updateFacialDiagnosis=function(req, res){

  //Validate request message//
  var model=validator.updateFacialDiagnosis(req.body.data);

  //isValid//
  if(model.status){
    updateOrthodonticClass.updateFacialDiagnosis(req,res,model.data);
  }else
    render.RenderDefault(req, res, 427);//Error bad request message

}
exports.updateFacialDiagnosis = updateFacialDiagnosis;

var updateTemporomandibular=function(req, res){

  //Validate request message//
  var model=validator.updateTemporomandibular(req.body.data);

  //isValid//
  if(model.status){
    updateOrthodonticClass.updateTemporomandibular(req,res,model.data);
  }else
    render.RenderDefault(req, res, 427);//Error bad request message

}
exports.updateTemporomandibular = updateTemporomandibular;

var fileUpload=function(req, res){

  //Validate request message//
  var model=validator.fileUpload(req.body.data);

  //isValid//
  if(model.status){
    updateOrthodonticClass.fileUpload(req,res,model.data);
  }else
    render.RenderDefault(req, res, 427);//Error bad request message

}
exports.fileUpload = fileUpload;
