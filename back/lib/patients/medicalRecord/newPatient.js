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
      render.RenderDefault(req, res, 426);//Patient already exist
      else{

        var mr=new medicalRecordModel({"_id":{"account_id":model.account_id,"id_number":model.id_number},"personal_info":{"names":model.names,"last_name":model.last_name,"id_type":model.id_type}});
        mr.save(function(err,accountObj){

          //Medical Record successfully created
          if(!err){
            render.RenderDefault(req, res, 200);//Error creating medicalRecord
          }else{
            render.RenderDefault(req, res, 521);//Error creating medicalRecord
            log.error("Error creating medicalRecord");
          }
        });
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

//###############################################//
//*************END PRIVATE METHOD****************//
//###############################################//
