'use strict';


var moment = require('moment');
var util=require('../../util/others');

//##############BEGIN BACKEND MODELS#####################//
var backend = require('../../backend');
var newPatientModel=require('../../../models/backend/patients/medicalRecord/newPatient');
var findMedicalRecordModelBack=require('../../../models/backend/patients/medicalRecord/findMedicalRecord');
var updatePersonalInfoModelBack=require('../../../models/backend/patients/medicalRecord/updatePersonalInfo');
//##############END BACKEND MODELS#####################//


//##############BEGIN PAGE MODELS#####################//
var indexModel=require('../../../models/index');
var findMedicalRecordModel=require('../../../models/medicalRecord/findMedicalRecord');
var updatePersonalInfoModel=require('../../../models/medicalRecord/updatePersonalInfo');
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


var findMedicalRecord=function(req, res){

  var data=new findMedicalRecordModelBack(req);
  backend.send("/patients/medicalRecord/find",req,res,data,findMedicalRecordResponse);
}
exports.findMedicalRecord = findMedicalRecord;

var updatePersonalInfo=function(req, res){

  var data=new updatePersonalInfoModelBack(req);
  backend.send("/patients/medicalRecord/generalInfo/personalInfo/update",req,res,data,updatePersonalInfoResponse);
}
exports.updatePersonalInfo = updatePersonalInfo;


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

var findMedicalRecordResponse=function(req,res,response){

  var model=new findMedicalRecordModel();
  model.status_code=response.status_code;

  if(response.status_code == 200){

    model.personal_info=response.data.personal_info;
    var date_of_birth=moment(model.personal_info.date_of_birth).format('DD-MM-YYYY');
    model.personal_info.date_of_birth=date_of_birth;
    model.id_number=response.data.id_number;

    res.render('patients/medicalRecord', model);
  }else{

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert={};
      switch(model.status_code){

            case 427:
              model.alert.type="info";
              model.alert.msg = data.findMedicalRecord_427_msg;
              model.alert.title = data.findMedicalRecord_427_title;
              break;
            }

            res.render('patients/medicalRecord', response);
          });
        }
      }
exports.findMedicalRecordResponse = findMedicalRecordResponse;


var updatePersonalInfoResponse=function(req,res,response){

  var model=new updatePersonalInfoModel();
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
exports.updatePersonalInfoResponse = updatePersonalInfoResponse;

//###############################################//
//*************END PRIVATE METHOD****************//
//###############################################//
