'use strict';

//###############################################//
//*************BEGING PUBLIC METHOD**************//
//###############################################//
//Method to start the signup master process//

//Method to start the change password master process//
var newPatient=function(data){

  var model={};
  var account_id=data.account_id.trim();
  var user_id=data.user_id.trim();
  var names=data.names.trim();
  var last_name=data.last_name.trim();
  var id_number=data.id_number.trim();
  var id_type=data.id_type.trim();

  if(account_id != "" && user_id != "" && names != "" && last_name != "" && id_number != "" && id_type != ""){

    model.status=true;
    model.data={"account_id":account_id,"user_id":user_id,"names":names,"last_name":last_name,"id_number":id_number,"id_type":id_type};

  }else{

    model.status=false;
  }

  return model;

}
exports.newPatient = newPatient;

var findMedicalRecord=function(data){

  var model={};
  var account_id=data.account_id.trim();
  var user_id=data.user_id.trim();
  var id_number=data.id_number.trim();

  if(account_id != "" && user_id != ""  && id_number != "" ){

    model.status=true;
    model.data={"account_id":account_id,"user_id":user_id,"id_number":id_number};

  }else{

    model.status=false;
  }

  return model;

}
exports.findMedicalRecord = findMedicalRecord;

var listMedicalRecord=function(data){

  var model={};
  var account_id=data.account_id.trim();
  var user_id=data.user_id.trim();

  if(account_id != "" && user_id != ""){

    model.status=true;
    model.data={"account_id":account_id,"user_id":user_id};

  }else{

    model.status=false;
  }

  return model;

}
exports.listMedicalRecord = listMedicalRecord;

var delMedicalRecord=function(data){

  var model={};
  var account_id=data.account_id.trim();
  var user_id=data.user_id.trim();
  var id_number=data.id_number.trim();

  if(account_id != "" && user_id != ""  && id_number != "" ){

    model.status=true;
    model.data={"account_id":account_id,"user_id":user_id,"id_number":id_number};

  }else{

    model.status=false;
  }

  return model;

}
exports.delMedicalRecord = delMedicalRecord;

var updatePersonalInfo=function(data){

  var model={};
  var account_id=data.account_id.trim();
  var user_id=data.user_id.trim();
  var id_number=data.id_number.trim();

  if(account_id != "" && user_id != ""  && id_number != "" ){

    model.status=true;
    model.data={"account_id":account_id,"user_id":user_id,"id_number":id_number,"personal_info":data.personal_info};

  }else{

    model.status=false;
  }

  return model;

}
exports.updatePersonalInfo = updatePersonalInfo;

var updatePersonalInfoPortrait=function(data){

  var model={};
  var account_id=data.account_id.trim();
  var user_id=data.user_id.trim();
  var id_number=data.id_number.trim();

  if(account_id != "" && user_id != ""  && id_number != "" ){

    model.status=true;
    model.data={"account_id":account_id,"user_id":user_id,"id_number":id_number,"personal_info":data.personal_info};

  }else{

    model.status=false;
  }

  return model;

}
exports.updatePersonalInfoPortrait = updatePersonalInfoPortrait;

var updateEmergencyContact=function(data){

  var model={};
  var account_id=data.account_id.trim();
  var user_id=data.user_id.trim();
  var id_number=data.id_number.trim();

  if(account_id != "" && user_id != ""  && id_number != "" ){

    model.status=true;
    model.data={"account_id":account_id,"user_id":user_id,"id_number":id_number,"emergency_contact":data.emergency_contact};

  }else{

    model.status=false;
  }

  return model;

}
exports.updateEmergencyContact = updateEmergencyContact;

var updateChiefComplaint=function(data){

  var model={};
  var account_id=data.account_id.trim();
  var user_id=data.user_id.trim();
  var id_number=data.id_number.trim();

  if(account_id != "" && user_id != ""  && id_number != "" ){

    model.status=true;
    model.data={"account_id":account_id,"user_id":user_id,"id_number":id_number,"chief_complaint":data.chief_complaint};

  }else{

    model.status=false;
  }

  return model;

}

exports.updateChiefComplaint = updateChiefComplaint;

var updateFamilyHistory=function(data){

  var model={};
  var account_id=data.account_id.trim();
  var user_id=data.user_id.trim();
  var id_number=data.id_number.trim();

  if(account_id != "" && user_id != ""  && id_number != "" ){

    model.status=true;
    model.data={"account_id":account_id,"user_id":user_id,"id_number":id_number,"family_history":data.family_history};

  }else{

    model.status=false;
  }

  return model;

}

exports.updateFamilyHistory = updateFamilyHistory;

var updateMedicalHistory=function(data){

  var model={};
  var account_id=data.account_id.trim();
  var user_id=data.user_id.trim();
  var id_number=data.id_number.trim();

  if(account_id != "" && user_id != ""  && id_number != "" ){

    model.status=true;
    model.data={"account_id":account_id,"user_id":user_id,"id_number":id_number,"medical_history":data.medical_history};

  }else{

    model.status=false;
  }

  return model;

}

exports.updateMedicalHistory = updateMedicalHistory;

var updateDentalHistory=function(data){

  var model={};
  var account_id=data.account_id.trim();
  var user_id=data.user_id.trim();
  var id_number=data.id_number.trim();

  if(account_id != "" && user_id != ""  && id_number != "" ){

    model.status=true;
    model.data={"account_id":account_id,"user_id":user_id,"id_number":id_number,"dental_history":data.dental_history};

  }else{

    model.status=false;
  }

  return model;

}

exports.updateDentalHistory = updateDentalHistory;

var updateRiskFactors=function(data){

  var model={};
  var account_id=data.account_id.trim();
  var user_id=data.user_id.trim();
  var id_number=data.id_number.trim();

  if(account_id != "" && user_id != ""  && id_number != "" ){

    model.status=true;
    model.data={"account_id":account_id,"user_id":user_id,"id_number":id_number,"risk_factors":data.risk_factors};

  }else{

    model.status=false;
  }

  return model;

}

exports.updateRiskFactors = updateRiskFactors;

var updateCurrentMedication=function(data){

  var model={};
  var account_id=data.account_id.trim();
  var user_id=data.user_id.trim();
  var id_number=data.id_number.trim();

  if(account_id != "" && user_id != ""  && id_number != "" ){

    model.status=true;
    model.data={"account_id":account_id,"user_id":user_id,"id_number":id_number,"current_medication":data.current_medication};

  }else{

    model.status=false;
  }

  return model;

}

exports.updateCurrentMedication = updateCurrentMedication;

//###############################################//
//***************END PUBLIC METHOD***************//
//###############################################//
