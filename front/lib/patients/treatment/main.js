'use strict';

var moment = require('moment');
var util=require('../../util/others');

var files=require('../../aws/files');

//##############BEGIN BACKEND MODELS#####################//
var backend = require('../../backend');
var findMedicalRecordModelBack=require('../../../models/backend/patients/medicalRecord/findMedicalRecord');
//##############END BACKEND MODELS#####################//


//##############BEGIN PAGE MODELS#####################//
var indexModel=require('../../../models/index');
var findMedicalRecordModel=require('../../../models/medicalRecord/findMedicalRecord');
//##############END PAGE MODELS#####################//


//###############################################//
//*************BEGING PUBLIC METHOD**************//
//###############################################//
//Method to start the signup master process//
var findTreatment=function(req, res){

  var data=new findMedicalRecordModelBack(req);
  backend.send("/patients/medicalRecord/find",req,res,data,findMedicalRecordResponse);
}
exports.findTreatment = findTreatment;


//###############################################//
//***************END PUBLIC METHOD***************//
//###############################################//


//###############################################//
//************BEGING PRIVATE METHOD**************//
//###############################################//

var findTreatmentResponse=function(req,res,response){

  var model=new findMedicalRecordModel();
  model.status_code=response.status_code;

  if(response.status_code == 200){


    model.chief_complaint=response.data.chief_complaint;
    model.family_history=response.data.family_history;
    model.medical_history=response.data.medical_history;
    model.dental_history=response.data.dental_history;
    model.risk_factors=response.data.risk_factors;
    model.current_medication=response.data.current_medication;
    model.emergency_contact=response.data.emergency_contact;
    model.personal_info=response.data.personal_info;
    var date_of_birth=moment(model.personal_info.date_of_birth).format('DD-MM-YYYY');
    model.personal_info.date_of_birth=date_of_birth;
    model.id_number=response.data.id_number;
    model.personal_info.avatar=model.personal_info.image;

    var next=function(req,res,key,url){
       model.personal_info.image=url;
       res.render('patients/medicalRecord', model);
    }
    if(model.personal_info.image != '' && model.personal_info.image != null)
        files.getFile("dev-abmdental-files",model.personal_info.image,req,res,next);
    else
        next(req,res,'',global.config.aws.s3.default_portrait);

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
exports.findTreatmentResponse = findTreatmentResponse;

//###############################################//
//*************END PRIVATE METHOD****************//
//###############################################//
