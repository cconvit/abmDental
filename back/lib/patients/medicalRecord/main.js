'use strict';

var render = require('../../util/render');
var validator = require('./validation');
var newPatientClass = require('./newPatient');
var findPatientClass = require('./findPatient');

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


var findPatient=function(req, res){

  //Validate request message//
  var model=validator.findPatient(req.body.data);

  //isValid//
  if(model.status){
    findPatientClass.findPatient(req,res,model.data);
  }else
    render.RenderDefault(req, res, 510);//Error bad request message

  }

  exports.findPatient = findPatient;
