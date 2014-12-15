'use strict';

var render = require('../../util/render');
var log = require('../../util/log');

var medicalRecordModel = require('../../../models/medicalRecord');


//###############################################//
//*************BEGING PUBLIC METHOD**************//
//###############################################//
/*

*/
var newPatient=function(req, res,model){

  //1-Check if the medicalRecordExist()
  var ObjectId = require('mongoose').Types.ObjectId;
  medicalRecordModel.findById({"account_id":new ObjectId(model.account_id),"id_number":model.id_number},function(err,medicalRecord){

    if(medicalRecord != null)
      {
        responseMedicalRecord(req, res,medicalRecord);
      }
      else{

        render.RenderDefault(req, res, 421);//Invalid credentials
      }
  });
}

exports.newPatient = newPatient;

//###############################################//
//***************END PUBLIC METHOD***************//
//###############################################//


//###############################################//
//************BEGING PRIVATE METHOD**************//
//###############################################//

var responseMedicalRecord=function(req, res,mr){

  var response={};
  response.data={"personal_info":mr.personal_info};
  render.RenderModel(req, res, 200,response);//Signup successfully
  
}

//###############################################//
//*************END PRIVATE METHOD****************//
//###############################################//
