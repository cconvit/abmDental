'use strict';

//###############################################//
//*************BEGING PUBLIC METHOD**************//
//###############################################//

var findTreatment=function(data){

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
exports.findTreatment = findTreatment;


var updateDiagnosis=function(data){

  var model={};
  var account_id=data.account_id.trim();
  var user_id=data.user_id.trim();
  var id_number=data.id_number.trim();

  if(account_id != "" && user_id != ""  && id_number != "" ){

    model.status=true;
    model.data={"account_id":account_id,"user_id":user_id,"id_number":id_number,"diagnosis":data.diagnosis};

  }else{

    model.status=false;
  }

  return model;

}
exports.updateDiagnosis = updateDiagnosis;

var updateTreatmentPlan=function(data){

  var model={};
  var account_id=data.account_id.trim();
  var user_id=data.user_id.trim();
  var id_number=data.id_number.trim();

  if(account_id != "" && user_id != ""  && id_number != "" ){

    model.status=true;
    model.data={"account_id":account_id,"user_id":user_id,"id_number":id_number,"treatment_plan":data.treatment_plan};

  }else{

    model.status=false;
  }

  return model;
}
exports.updateTreatmentPlan = updateTreatmentPlan;

var updateOcclusionDiagnosis=function(data){

  var model={};
  var account_id=data.account_id.trim();
  var user_id=data.user_id.trim();
  var id_number=data.id_number.trim();

  if(account_id != "" && user_id != ""  && id_number != "" ){

    model.status=true;
    model.data={"account_id":account_id,"user_id":user_id,"id_number":id_number,"occlusion_diagnosis":data.occlusion_diagnosis};

  }else{

    model.status=false;
  }

  return model;

}
exports.updateOcclusionDiagnosis = updateOcclusionDiagnosis;

var addTreatmentTimeline=function(data){

  var model={};
  var account_id=data.account_id.trim();
  var user_id=data.user_id.trim();
  var id_number=data.id_number.trim();

  if(account_id != "" && user_id != ""  && id_number != "" ){

    model.status=true;
    model.data={"account_id":account_id,"user_id":user_id,"id_number":id_number,"event":data.event};

  }else{

    model.status=false;
  }

  return model;

}
exports.addTreatmentTimeline = addTreatmentTimeline;

var updateFacialDiagnosis=function(data){

  var model={};
  var account_id=data.account_id.trim();
  var user_id=data.user_id.trim();
  var id_number=data.id_number.trim();

  if(account_id != "" && user_id != ""  && id_number != "" ){

    model.status=true;
    model.data={"account_id":account_id,"user_id":user_id,"id_number":id_number,"facial_diagnosis":data.facial_diagnosis};

  }else{

    model.status=false;
  }

  return model;
}
exports.updateFacialDiagnosis = updateFacialDiagnosis;

var updateTemporomandibular=function(data){

  var model={};
  var account_id=data.account_id.trim();
  var user_id=data.user_id.trim();
  var id_number=data.id_number.trim();

  if(account_id != "" && user_id != ""  && id_number != "" ){

    model.status=true;
    model.data={"account_id":account_id,"user_id":user_id,"id_number":id_number,"temporomandibular":data.temporomandibular};

  }else{

    model.status=false;
  }

  return model;

}
exports.updateTemporomandibular = updateTemporomandibular;

var fileUpload=function(data){

  var model={};
  var account_id=data.account_id.trim();
  var user_id=data.user_id.trim();
  var id_number=data.id_number.trim();


  if(account_id != "" && user_id != ""  && id_number != ""){

    model.status=true;
    model.data={"account_id":account_id,"user_id":user_id,"id_number":id_number,"file":data.file};

  }else{

    model.status=false;
  }

  return model;

}
exports.fileUpload = fileUpload;

var fileView=function(data){

  var model={};
  var account_id=data.account_id.trim();
  var user_id=data.user_id.trim();
  var id_number=data.id_number.trim();


  if(account_id != "" && user_id != ""  && id_number != ""){

    model.status=true;
    model.data={"account_id":account_id,"user_id":user_id,"id_number":id_number,"file":data.file};

  }else{

    model.status=false;
  }

  return model;

}
exports.fileView = fileView;


//###############################################//
//***************END PUBLIC METHOD***************//
//###############################################//
