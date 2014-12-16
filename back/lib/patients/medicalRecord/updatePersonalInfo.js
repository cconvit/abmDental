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
  var set = {};
  for (var field in model.personal_info) {
    set['personal_info.' + field] = model.personal_info[field];
  }

  medicalRecordModel.findOneAndUpdate({"_id":{"account_id":new ObjectId(model.account_id),"id_number":model.id_number}},
  {$set: {"personal_info":model.personal_info}},
  function(err, numAffected) {

    render.RenderDefault(req, res, 200);//Medical record not found
    /*
    if(medicalRecord != null)
      {
        render.RenderDefault(req, res, 200);//Medical record not found

      }
      else{

        render.RenderDefault(req, res, 427);//Medical record not found
      }*/

  });

}

exports.updatePersonalInfo = updatePersonalInfo;

//###############################################//
//***************END PUBLIC METHOD***************//
//###############################################//


//###############################################//
//************BEGING PRIVATE METHOD**************//
//###############################################//

var responseMedicalRecord=function(req, res,mr){

  var response={};
  response.data={"id_number":mr._id.id_number,"personal_info":mr.personal_info};

  console.log(response.data.personal_info);
  render.RenderModel(req, res, 200,response);//Signup successfully

}

//###############################################//
//*************END PRIVATE METHOD****************//
//###############################################//
