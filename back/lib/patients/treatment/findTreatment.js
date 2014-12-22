'use strict';

var render = require('../../util/render');
var log = require('../../util/log');

var orthodonticTreatmentModel = require('../../../models/orthodonticTreatment');
var medicalRecordModel = require('../../../models/medicalRecord');


//###############################################//
//*************BEGING PUBLIC METHOD**************//
//###############################################//
/*

*/
var findTreatment=function(req, res,model){

  //1-Check if the medicalRecordExist()
  var ObjectId = require('mongoose').Types.ObjectId;
  medicalRecordModel.findById({"account_id":new ObjectId(model.account_id),"id_number":model.id_number},{ sort:{"treatment_timeline.event.datetime": -1 } },function(err,medicalRecord){

    if(medicalRecord != null)
      {
        orthodonticTreatmentModel.findById({"account_id":new ObjectId(model.account_id),"id_number":model.id_number},function(err,orthodonticTreatment){


          responseTreatment(req, res,medicalRecord,orthodonticTreatment);
        });

      }
      else{

        render.RenderDefault(req, res, 427);//Medical record not found
      }
  });
}

exports.findTreatment = findTreatment;

//###############################################//
//***************END PUBLIC METHOD***************//
//###############################################//


//###############################################//
//************BEGING PRIVATE METHOD**************//
//###############################################//

var responseTreatment=function(req, res,mr,ortho){

  var response={};
  response.data={"id_number":mr._id.id_number,"personal_info":mr.personal_info,"treatment":{"orthodontic":ortho}};

  render.RenderModel(req, res, 200,response);//Signup successfully

}

//###############################################//
//*************END PRIVATE METHOD****************//
//###############################################//
