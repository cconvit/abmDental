'use strict';


var moment = require('moment');
var util=require('../../util/others');

var files=require('../../aws/files');

//##############BEGIN BACKEND MODELS#####################//
var backend = require('../../backend');
var newPatientModel=require('../../../models/backend/patients/medicalRecord/newPatient');
var listPatientsModelBack=require('../../../models/backend/patients/medicalRecord/listPatients');
var findMedicalRecordModelBack=require('../../../models/backend/patients/medicalRecord/findMedicalRecord');
var delMedicalRecordModelBack=require('../../../models/backend/patients/medicalRecord/delMedicalRecord');
var updatePersonalInfoModelBack=require('../../../models/backend/patients/medicalRecord/updatePersonalInfo');
var updatePersonalInfoPortraitModelBack=require('../../../models/backend/patients/medicalRecord/updatePersonalInfoPortrait');
var updateEmergencyContactModelBack=require('../../../models/backend/patients/medicalRecord/updateEmergencyContact');
var updateChiefComplaintModelBack=require('../../../models/backend/patients/medicalRecord/updateChiefComplaint');
var updateFamilyHistoryModelBack=require('../../../models/backend/patients/medicalRecord/updateFamilyHistory');
var updateMedicalHistoryModelBack=require('../../../models/backend/patients/medicalRecord/updateMedicalHistory');
var updateDentalHistoryModelBack=require('../../../models/backend/patients/medicalRecord/updateDentalHistory');
var updateRiskFactorsModelBack=require('../../../models/backend/patients/medicalRecord/updateRiskFactors');
var updateCurrentMedicationModelBack=require('../../../models/backend/patients/medicalRecord/updateCurrentMedication');
//##############END BACKEND MODELS#####################//


//##############BEGIN PAGE MODELS#####################//
var indexModel=require('../../../models/index');
var listPatientsModel=require('../../../models/patients/list');
var findMedicalRecordModel=require('../../../models/medicalRecord/findMedicalRecord');
var delMedicalRecordModel=require('../../../models/medicalRecord/delMedicalRecord');
var updatePersonalInfoModel=require('../../../models/medicalRecord/updatePersonalInfo');
var updateEmergencyContactModel=require('../../../models/medicalRecord/updateEmergencyContact');
var updateChiefComplaintModel=require('../../../models/medicalRecord/updateChiefComplaint');
var updateFamilyHistoryModel=require('../../../models/medicalRecord/updateFamilyHistory');
var updateMedicalHistoryModel=require('../../../models/medicalRecord/updateMedicalHistory');
var updateDentalHistoryModel=require('../../../models/medicalRecord/updateDentalHistory');
var updateRiskFactorsModel=require('../../../models/medicalRecord/updateRiskFactors');
var updateCurrentMedicationModel=require('../../../models/medicalRecord/updateCurrentMedication');
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

var listPatients=function(req, res){

  var data=new listPatientsModelBack(req);
  backend.send("/patients/medicalRecord/list",req,res,data,listPatientsResponse);
}
exports.listPatients = listPatients;


var findMedicalRecord=function(req, res){

  var data=new findMedicalRecordModelBack(req);
  backend.send("/patients/medicalRecord/find",req,res,data,findMedicalRecordResponse);
}
exports.findMedicalRecord = findMedicalRecord;

var delMedicalRecord=function(req, res){

  var data=new delMedicalRecordModelBack(req);
  backend.send("/patients/medicalRecord/del",req,res,data,delMedicalRecordResponse);
}
exports.delMedicalRecord = delMedicalRecord;


var updatePersonalInfo=function(req, res){

  var data=new updatePersonalInfoModelBack(req);
  backend.send("/patients/medicalRecord/generalInfo/personalInfo/update",req,res,data,updatePersonalInfoResponse);
}
exports.updatePersonalInfo = updatePersonalInfo;

var updatePersonalInfoPortrait=function(req, res){

  var next=function(req,res,key,url){

    var data=new updatePersonalInfoPortraitModelBack(req,key);
    backend.send("/patients/medicalRecord/generalInfo/personalInfo/portrait/upload",req,res,data,updatePersonalInfoPortraitResponse,url);

  }
  files.portrait(req,res,next);
}
exports.updatePersonalInfoPortrait = updatePersonalInfoPortrait;


var updateEmergencyContact=function(req, res){

  var data=new updateEmergencyContactModelBack(req);
  backend.send("/patients/medicalRecord/generalInfo/emergencyContact/update",req,res,data,updateEmergencyConatctResponse);
}
exports.updateEmergencyContact = updateEmergencyContact;

var updateChiefComplaint=function(req, res){

  var data=new updateChiefComplaintModelBack(req);
  backend.send("/patients/medicalRecord/anamnesis/chiefComplaint/update",req,res,data,updateChiefComplaintResponse);
}
exports.updateChiefComplaint = updateChiefComplaint;

var updateFamilyHistory=function(req, res){

  var data=new updateFamilyHistoryModelBack(req);
  backend.send("/patients/medicalRecord/anamnesis/familyHistory/update",req,res,data,updateFamilyHistoryResponse);
}
exports.updateFamilyHistory = updateFamilyHistory;

var updateMedicalHistory=function(req, res){

  var data=new updateMedicalHistoryModelBack(req);
  backend.send("/patients/medicalRecord/anamnesis/medicalHistory/update",req,res,data,updateMedicalHistoryResponse);
}
exports.updateMedicalHistory = updateMedicalHistory;

var updateDentalHistory=function(req, res){

  var data=new updateDentalHistoryModelBack(req);
  backend.send("/patients/medicalRecord/anamnesis/dentalHistory/update",req,res,data,updateDentalHistoryResponse);
}
exports.updateDentalHistory = updateDentalHistory;

var updateRiskFactors=function(req, res){

  var data=new updateRiskFactorsModelBack(req);
  backend.send("/patients/medicalRecord/anamnesis/riskFactors/update",req,res,data,updateRiskFactorsResponse);
}
exports.updateRiskFactors = updateRiskFactors;

var updateCurrentMedication=function(req, res){

  var data=new updateCurrentMedicationModelBack(req);
  backend.send("/patients/medicalRecord/anamnesis/currentMedication/update",req,res,data,updateCurrentMedicationResponse);
}
exports.updateCurrentMedication = updateCurrentMedication;

//###############################################//
//***************END PUBLIC METHOD***************//
//###############################################//


//###############################################//
//************BEGING PRIVATE METHOD**************//
//###############################################//

var newPatientResponse=function(req,res,response){

  var model=new indexModel();
  model.status_code=response.status_code;
  defaultResponse(req,res,model,"newPatient");

}
exports.newPatientResponse = newPatientResponse;

var listPatientsResponse=function(req,res,response){

  var model=new listPatientsModel(req);
  model.status_code=response.status_code;

  if(response.status_code == 200){

    model.patients=response.data.patients;
    res.render('patients/list', model);

  }else
    defaultResponse(req,res,model,"listPatients");

}
exports.listPatientsResponse = listPatientsResponse;

var findMedicalRecordResponse=function(req,res,response){

  var model=new findMedicalRecordModel(req);
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
exports.findMedicalRecordResponse = findMedicalRecordResponse;

var delMedicalRecordResponse=function(req,res,response){

  var model=new delMedicalRecordModel();
  model.status_code=response.status_code;
  defaultResponse(req,res,model,"delMedicalRecord");

}
exports.delMedicalRecordResponse=delMedicalRecordResponse;

var updatePersonalInfoResponse=function(req,res,response){

  var model=new updatePersonalInfoModel();
  model.status_code=response.status_code;
  defaultResponse(req,res,model,"updatePersonalInfo");

}
exports.updatePersonalInfoResponse = updatePersonalInfoResponse;

var updatePersonalInfoPortraitResponse=function(req,res,response,url){

  var model=new updatePersonalInfoModel();
  model.status_code=response.status_code;
  if(response.status_code == 200)model.personal_info.image=url;
  defaultResponse(req,res,model,"updatePersonalInfoPortrait");

}
exports.updatePersonalInfoPortraitResponse = updatePersonalInfoPortraitResponse;

var updateEmergencyConatctResponse=function(req,res,response){

  var model=new updateEmergencyContactModel();
  model.status_code=response.status_code;
  defaultResponse(req,res,model,"updateEmergengyContact");

}
exports.updateEmergencyConatctResponse = updateEmergencyConatctResponse;

var updateChiefComplaintResponse=function(req,res,response){

  var model=new updateChiefComplaintModel();
  model.status_code=response.status_code;
  defaultResponse(req,res,model,"updateChiefComplaint");

}

exports.updateChiefComplaintResponse = updateChiefComplaintResponse;

var updateFamilyHistoryResponse=function(req,res,response){

  var model=new updateFamilyHistoryModel();
  model.status_code=response.status_code;
  defaultResponse(req,res,model,"updateFamilyHistory");

}
exports.updateFamilyHistoryResponse = updateFamilyHistoryResponse;

var updateMedicalHistoryResponse=function(req,res,response){

  var model=new updateMedicalHistoryModel();
  model.status_code=response.status_code;
  defaultResponse(req,res,model,"updateMedicalHistory");

}
exports.updateMedicalHistoryResponse = updateMedicalHistoryResponse;

var updateDentalHistoryResponse=function(req,res,response){

  var model=new updateDentalHistoryModel();
  model.status_code=response.status_code;
  defaultResponse(req,res,model,"updateDentalHistory");

}
exports.updateDentalHistoryResponse = updateDentalHistoryResponse;

var updateRiskFactorsResponse=function(req,res,response){

  var model=new updateRiskFactorsModel();
  model.status_code=response.status_code;
  defaultResponse(req,res,model,"updateRiskFactors");

}
exports.updateRiskFactorsResponse = updateRiskFactorsResponse;


var updateCurrentMedicationResponse=function(req,res,response){

  var model=new updateCurrentMedicationModel();
  model.status_code=response.status_code;
  defaultResponse(req,res,model,"updateCurrentMedication");

}
exports.updateCurrentMedicationResponse = updateCurrentMedicationResponse;

var defaultResponse=function(req,res,model,key){

  util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert={"type":data[key+"_"+model.status_code+"_type"] ,"msg": data[key+"_"+model.status_code+"_msg"],"title": data[key+"_"+model.status_code+"_title"]};
      res.json(model);
    });


}

//###############################################//
//*************END PRIVATE METHOD****************//
//###############################################//
