'use strict';

var render = require('../../util/render');
var log = require('../../util/log');

var medicalRecordModel = require('../../../models/medicalRecord');


//###############################################//
//*************BEGING PUBLIC METHOD**************//
//###############################################//
/*

*/
var findMedicalRecord=function(req, res,model){

  //1-Check if the medicalRecordExist()
  var ObjectId = require('mongoose').Types.ObjectId;
  medicalRecordModel.findById({"account_id":new ObjectId(model.account_id),"id_number":model.id_number},function(err,medicalRecord){

    if(medicalRecord != null)
      {
        responseMedicalRecord(req, res,medicalRecord);
      }
      else{

        render.RenderDefault(req, res, 427);//Medical record not found
      }
  });
}

exports.findMedicalRecord = findMedicalRecord;

//###############################################//
//***************END PUBLIC METHOD***************//
//###############################################//


//###############################################//
//************BEGING PRIVATE METHOD**************//
//###############################################//

var responseMedicalRecord=function(req, res,mr){

  var response={};
  response.data={"id_number":mr._id.id_number,"personal_info":mr.personal_info,"emergency_contact":mr.emergency_contact,
                 "chief_complaint":mr.chief_complaint,"family_history":mr.family_history,
                 "medical_history":mr.medical_history,"dental_history":mr.dental_history,
                 "risk_factors":mr.risk_factors,"current_medication":mr.current_medication};

  render.RenderModel(req, res, 200,response);//Signup successfully

}

//###############################################//
//*************END PRIVATE METHOD****************//
//###############################################//
