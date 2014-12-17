'use strict';


var moment = require('moment');
var util=require('../../util/others');

//##############BEGIN BACKEND MODELS#####################//
var backend = require('../../backend');
var newPatientModel=require('../../../models/backend/patients/medicalRecord/newPatient');
var findMedicalRecordModelBack=require('../../../models/backend/patients/medicalRecord/findMedicalRecord');
var updatePersonalInfoModelBack=require('../../../models/backend/patients/medicalRecord/updatePersonalInfo');
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
var findMedicalRecordModel=require('../../../models/medicalRecord/findMedicalRecord');
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
      model.alert.msg = data.updatePersonalInfo_200_msg;
      model.alert.title = data.updatePersonalInfo_200_title;
      res.json(model);
    });

  }else{

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="warning";

      switch(model.status_code){

          case 427:
            model.alert.msg = data.updatePersonalInfo_427_msg;
            model.alert.title = data.updatePersonalInfo_427_title;
            break;
          case 522:
            model.alert.type="error";
            model.alert.msg = data.updatePersonalInfo_522_msg;
            model.alert.title = data.updatePersonalInfo_522_title;
            break;
          }

            res.json(model);
          });
        }
      }
exports.updatePersonalInfoResponse = updatePersonalInfoResponse;

var updateEmergencyConatctResponse=function(req,res,response){

  var model=new updateEmergencyContactModel();
  model.status_code=response.status_code;

  if(response.status_code == 200){

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="success";
      model.alert.msg = data.updateEmergengyContact_200_msg;
      model.alert.title = data.updateEmergengyContact_200_title;
      res.json(model);
    });

  }else{

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="warning";

      switch(model.status_code){

        case 427:
          model.alert.msg = data.updateEmergencyContact_427_msg;
          model.alert.title = data.updateEmergencyContact_427_title;
          break;
        case 523:
          model.alert.type="error";
          model.alert.msg = data.updateEmergencyContact_523_msg;
          model.alert.title = data.updateEmergencyContact_523_title;
          break;
        }

          res.json(model);
        });
      }
    }
exports.updateEmergencyConatctResponse = updateEmergencyConatctResponse;

var updateChiefComplaintResponse=function(req,res,response){

  var model=new updateChiefComplaintModel();
  model.status_code=response.status_code;

  if(response.status_code == 200){

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="success";
      model.alert.msg = data.updateChiefComplaint_200_msg;
      model.alert.title = data.updateChiefComplaint_200_title;
      res.json(model);
    });

  }else{

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="warning";

      switch(model.status_code){

        case 427:
          model.alert.msg = data.updateChiefComplaint_427_msg;
          model.alert.title = data.updateChiefComplaint_427_title;
          break;
        case 524:
          model.alert.type="error";
          model.alert.msg = data.updateChiefComplaint_524_msg;
          model.alert.title = data.updateChiefComplaint_524_title;
          break;
        }

          res.json(model);
        });
      }
    }

exports.updateChiefComplaintResponse = updateChiefComplaintResponse;

var updateFamilyHistoryResponse=function(req,res,response){

  var model=new updateFamilyHistoryModel();
  model.status_code=response.status_code;

  if(response.status_code == 200){

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="success";
      model.alert.msg = data.updateFamilyHistory_200_msg;
      model.alert.title = data.updateFamilyHistory_200_title;
      res.json(model);
    });

  }else{

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="warning";

      switch(model.status_code){

        case 427:
          model.alert.msg = data.updateFamilyHistory_427_msg;
          model.alert.title = data.updateFamilyHistory_427_title;
          break;
        case 525:
          model.alert.type="error";
          model.alert.msg = data.updateFamilyHistory_525_msg;
          model.alert.title = data.updateFamilyHistory_525_title;
          break;
        }

          res.json(model);
        });
      }
    }
exports.updateFamilyHistoryResponse = updateFamilyHistoryResponse;

var updateMedicalHistoryResponse=function(req,res,response){

var model=new updateMedicalHistoryModel();
model.status_code=response.status_code;

if(response.status_code == 200){

  util.getMessageLocale("/alerts/index",res,function(res,data){

    model.alert.type="success";
    model.alert.msg = data.updateMedicalHistory_200_msg;
    model.alert.title = data.updateMedicalHistory_200_title;
    res.json(model);
  });

}else{

  util.getMessageLocale("/alerts/index",res,function(res,data){

    model.alert.type="warning";

    switch(model.status_code){

      case 427:
        model.alert.msg = data.updateMedicalHistory_427_msg;
        model.alert.title = data.updateMedicalHistory_427_title;
        break;
      case 526:
        model.alert.type="error";
        model.alert.msg = data.updateMedicalHistory_526_msg;
        model.alert.title = data.updateMedicalHistory_526_title;
        break;
      }

        res.json(model);
      });
    }
  }
exports.updateMedicalHistory = updateMedicalHistoryResponse;

var updateDentalHistoryResponse=function(req,res,response){

  var model=new updateDentalHistoryModel();
  model.status_code=response.status_code;

  if(response.status_code == 200){

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="success";
      model.alert.msg = data.updateDentalHistory_200_msg;
      model.alert.title = data.updateDentalHistory_200_title;
      res.json(model);
    });

  }else{

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="warning";

      switch(model.status_code){

        case 427:
          model.alert.msg = data.updateDentalHistory_427_msg;
          model.alert.title = data.updateDentalHistory_427_title;
          break;
        case 527:
          model.alert.type="error";
          model.alert.msg = data.updateDentalHistory_527_msg;
          model.alert.title = data.updateDentalHistory_527_title;
          break;
        }

          res.json(model);
        });
      }
    }
exports.updateDentalHistoryResponse = updateDentalHistoryResponse;

var updateRiskFactorsResponse=function(req,res,response){

  var model=new updateRiskFactorsModel();
  model.status_code=response.status_code;

  if(response.status_code == 200){

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="success";
      model.alert.msg = data.updateRiskFactors_200_msg;
      model.alert.title = data.updateRiskFactors_200_title;
      res.json(model);
    });

  }else{

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="warning";

      switch(model.status_code){

        case 427:
          model.alert.msg = data.updateRiskFactors_427_msg;
          model.alert.title = data.updateRiskFactors_427_title;
          break;
        case 528:
          model.alert.type="error";
          model.alert.msg = data.updateRiskFactors_528_msg;
          model.alert.title = data.updateRiskFactors_528_title;
          break;
        }

          res.json(model);
        });
      }
    }
exports.updateRiskFactorsResponse = updateRiskFactorsResponse;


var updateCurrentMedicationResponse=function(req,res,response){

  var model=new updateCurrentMedicationModel();
  model.status_code=response.status_code;

  if(response.status_code == 200){

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="success";
      model.alert.msg = data.updateCurrentMedication_200_msg;
      model.alert.title = data.updateCurrentMedication_200_title;
      res.json(model);
    });

  }else{

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="warning";

      switch(model.status_code){

        case 427:
          model.alert.msg = data.updateCurrentMedication_427_msg;
          model.alert.title = data.updateCurrentMedication_427_title;
          break;
        case 529:
          model.alert.type="error";
          model.alert.msg = data.updateCurrentMedication_529_msg;
          model.alert.title = data.updateCurrentMedication_529_title;
          break;
        }

          res.json(model);
        });
      }
    }
exports.updateCurrentMedicationResponse = updateCurrentMedicationResponse;

//###############################################//
//*************END PRIVATE METHOD****************//
//###############################################//
