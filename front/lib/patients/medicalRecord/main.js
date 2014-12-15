'use strict';



var util=require('../../util/others');

//##############BEGIN BACKEND MODELS#####################//
var backend = require('../../backend');
var newPatientModel=require('../../../models/backend/patients/medicalRecord/newPatient');
//##############END BACKEND MODELS#####################//


//##############BEGIN PAGE MODELS#####################//
var indexModel=require('../../../models/index');
//##############END PAGE MODELS#####################//


//###############################################//
//*************BEGING PUBLIC METHOD**************//
//###############################################//
//Method to start the signup master process//
var newPatient=function(req, res){

  var data=new newPatientModel(req);
  backend.send("/patients/medicalRecord/add",req,res,data,newPatientResponse);
}
exports.newPatient = newPatient;


var findPatient=function(req, res){

  var data=new findPatientModel(req);
  backend.send("/patients/medicalRecord/find",req,res,data,findPatientResponse);
}
exports.findPatient = findPatient;


//###############################################//
//***************END PUBLIC METHOD***************//
//###############################################//


//###############################################//
//************BEGING PRIVATE METHOD**************//
//###############################################//

var newPatientResponse=function(req,res,response){

  var model=new indexModel();
  model.status_code=response.status_code;

  if(response.status_code == 200){

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="success";
      model.alert.msg = data.newPatient_200_msg;
      model.alert.title = data.newPatient_200_title;
      res.json(model);
    });

  }else{

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="warning";

      switch(model.status_code){

        case 510:
          model.alert.msg = data.newPatient_510_msg;
          model.alert.title = data.newPatient_510_title;
          break;
        case 426:
          model.alert.msg = data.newPatient_426_msg;
          model.alert.title = data.newPatient_426_title;
          break;
        case 521:
          model.alert.type="error";
          model.alert.msg = data.newPatient_521_msg;
          model.alert.title = data.newPatient_521_title;
          break;
        }

      res.json(model);
    });
  }
}
exports.newPatientResponse = newPatientResponse;

var findPatientResponse=function(req,res,response){

  var model=new indexModel();
  model.status_code=response.status_code;

  if(response.status_code == 200){

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="success";
      model.alert.msg = data.newPatient_200_msg;
      model.alert.title = data.newPatient_200_title;
      res.json(model);
    });

  }else{

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="warning";

      switch(model.status_code){

        case 510:
          model.alert.msg = data.newPatient_510_msg;
          model.alert.title = data.newPatient_510_title;
          break;
          case 426:
            model.alert.msg = data.newPatient_426_msg;
            model.alert.title = data.newPatient_426_title;
            break;
            case 521:
              model.alert.type="error";
              model.alert.msg = data.newPatient_521_msg;
              model.alert.title = data.newPatient_521_title;
              break;
            }

            res.json(model);
          });
        }
      }
      exports.findPatientResponse = findPatientResponse;



//###############################################//
//*************END PRIVATE METHOD****************//
//###############################################//
