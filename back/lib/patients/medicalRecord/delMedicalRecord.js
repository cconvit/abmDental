'use strict';

var render = require('../../util/render');
var log = require('../../util/log');

var medicalRecordModel = require('../../../models/medicalRecord');
var orthodonticTreatmentModel = require('../../../models/orthodonticTreatment');


//###############################################//
//*************BEGING PUBLIC METHOD**************//
//###############################################//
/*

*/
var delMedicalRecord=function(req, res,model){

  var ObjectId = require('mongoose').Types.ObjectId;

  orthodonticTreatmentModel.findOneAndRemove({"_id":{"account_id":new ObjectId(model.account_id),"id_number":model.id_number}},
  function(err, numAffected) {

    if(!err){

      medicalRecordModel.findOneAndRemove({"_id":{"account_id":new ObjectId(model.account_id),"id_number":model.id_number}},
      function(err, numAffected) {

        if(!err)
          render.RenderDefault(req, res, 200);//Medical record not found
          else
            render.RenderDefault(req, res, 537);//Medical record not found

          });
    }
      else
        render.RenderDefault(req, res, 538);//Medical record not found

   });
}

exports.delMedicalRecord = delMedicalRecord;

//###############################################//
//***************END PUBLIC METHOD***************//
//###############################################//


//###############################################//
//************BEGING PRIVATE METHOD**************//
//###############################################//


//###############################################//
//*************END PRIVATE METHOD****************//
//###############################################//
