'use strict';

var moment = require('moment');
var util=require('../../../util/others');

var files=require('../../../aws/files');

//##############BEGIN BACKEND MODELS#####################//
var backend = require('../../../backend');
var updateDiagnosisModelBack=require('../../../../models/backend/patients/treatment/orthodontic/updateDiagnosis');
var updateTreatmentPlanModelBack=require('../../../../models/backend/patients/treatment/orthodontic/updateTreatmentPlan');
var updateOcclusionDiagnosisModelBack=require('../../../../models/backend/patients/treatment/orthodontic/updateOcclusionDiagnosis');
var addEventTimelineModelBack=require('../../../../models/backend/patients/treatment/orthodontic/addEventTimeline');
var updateFacialDiagnosisModelBack=require('../../../../models/backend/patients/treatment/orthodontic/updateFacialDiagnosis');
var updateTemporomandibularModelBack=require('../../../../models/backend/patients/treatment/orthodontic/updateTemporomandibular');
var fileUploadModelBack=require('../../../../models/backend/patients/treatment/orthodontic/fileUpload');

//##############END BACKEND MODELS#####################//


//##############BEGIN PAGE MODELS#####################//
var indexModel=require('../../../../models/index');
var updateDiagnosisModel=require('../../../../models/treatment/orthodontic/updateDiagnosis');
var updateTreatmentPlanModel=require('../../../../models/treatment/orthodontic/updateTreatmentPlan');
var updateOcclusionDiagnosisModel=require('../../../../models/treatment/orthodontic/updateOcclusionDiagnosis');
var addEventTimelineModel=require('../../../../models/treatment/orthodontic/addEventTimeline');
var updateFacialDiagnosisModel=require('../../../../models/treatment/orthodontic/updateFacialDiagnosis');
var updateTemporomandibularModel=require('../../../../models/treatment/orthodontic/updateTemporomandibular');
var fileUploadModel=require('../../../../models/treatment/orthodontic/fileUpload');
//##############END PAGE MODELS#####################//


//###############################################//
//*************BEGING PUBLIC METHOD**************//
//###############################################//
//Method to start the signup master process//
var updateDiagnosis=function(req, res){

  var data=new updateDiagnosisModelBack(req);
  backend.send("/patients/treatment/orthodontic/diagnosis/update",req,res,data,updateDiagnosisResponse);
}
exports.updateDiagnosis = updateDiagnosis;

var updateTreatmentPlan=function(req, res){

  var data=new updateTreatmentPlanModelBack(req);
  backend.send("/patients/treatment/orthodontic/treatmentPlan/update",req,res,data,updateTreatmentPlanResponse);
}
exports.updateTreatmentPlan = updateTreatmentPlan;

var updateOcclusionDiagnosis=function(req, res){

  var data=new updateOcclusionDiagnosisModelBack(req);
  backend.send("/patients/treatment/orthodontic/occlusionDiagnosis/update",req,res,data,updateOcclusionDiagnosisResponse);
}
exports.updateOcclusionDiagnosis = updateOcclusionDiagnosis;

var addEventTimeline=function(req, res){

  var data=new addEventTimelineModelBack(req);
  backend.send("/patients/treatment/orthodontic/treatmentTimeline/add",req,res,data,addEventTimelineResponse);
}
exports.addEventTimeline = addEventTimeline;

var updateFacialDiagnosis=function(req, res){

  var data=new updateFacialDiagnosisModelBack(req);
  backend.send("/patients/treatment/orthodontic/facialDiagnosis/update",req,res,data,updateFacialDiagnosisResponse);
}
exports.updateFacialDiagnosis = updateFacialDiagnosis;

var updateTemporomandibular=function(req, res){

  var data=new updateTemporomandibularModelBack(req);
  backend.send("/patients/treatment/orthodontic/temporomandibular/update",req,res,data,updateTemporomandibularResponse);
}
exports.updateTemporomandibular = updateTemporomandibular;

var fileUpload=function(req, res){

  var next=function(req,res,key){

    var data=new fileUploadModelBack(req,key);
    backend.send("/patients/treatment/orthodontic/file/upload",req,res,data,fileUploadResponse);

  }
  files.orthodonticFile(req,res,next);

  }

exports.fileUpload = fileUpload;

//###############################################//
//***************END PUBLIC METHOD***************//
//###############################################//


//###############################################//
//************BEGING PRIVATE METHOD**************//
//###############################################//

var updateDiagnosisResponse=function(req,res,response){

  var model=new updateDiagnosisModel();
  model.status_code=response.status_code;
  defaultResponse(req,res,model,"updateDiagnosis");

}
exports.updateDiagnosisResponse = updateDiagnosisResponse;

var updateTreatmentPlanResponse=function(req,res,response){

  var model=new updateTreatmentPlanModel();
  model.status_code=response.status_code;
  defaultResponse(req,res,model,"updateTreatmentPlan");

}
exports.updateTreatmentPlanResponse = updateTreatmentPlanResponse;

var updateOcclusionDiagnosisResponse=function(req,res,response){

  var model=new updateOcclusionDiagnosisModel();
  model.status_code=response.status_code;
  defaultResponse(req,res,model,"updateOcclusionDiagnosis");

}
exports.updateOcclusionDiagnosisResponse = updateOcclusionDiagnosisResponse;

var addEventTimelineResponse=function(req,res,response){

  var model=new addEventTimelineModel();
  model.status_code=response.status_code;

  if(response.status_code == 200){

  util.getMessageLocale("/alerts/index",res,function(res,data){

    model.alert.type="success";
    model.alert.msg = data.addEventTimeline_200_msg;
    model.alert.title = data.addEventTimeline_200_title;

    moment.locale((req.session.language == null)?"en_US":req.session.language);

    model.event=response.data.event;
    var datetime=moment(model.event.datetime);
    model.event.date=datetime.format('DD/MM/YYYY');
    model.event.hour=datetime.format('HH:mm');

    res.json(model);
  });

  }else{

  util.getMessageLocale("/alerts/index",res,function(res,data){

    model.alert.type="warning";

    switch(model.status_code){

        case 427:
          model.alert.msg = data.addEventTimeline_427_msg;
          model.alert.title = data.addEventTimeline_427_title;
          break;
        case 533:
          model.alert.type="error";
          model.alert.msg = data.addEventTimeline_533_msg;
          model.alert.title = data.addEventTimeline_533_title;
          break;
        }

        res.json(model);
      });
    }
}
exports.addEventTimelineResponse = addEventTimelineResponse;

var updateFacialDiagnosisResponse=function(req,res,response){

  var model=new updateFacialDiagnosisModel();
  model.status_code=response.status_code;
  console.log(model);
  defaultResponse(req,res,model,"updateFacialDiagnosis");

}
exports.updateFacialDiagnosisResponse = updateFacialDiagnosisResponse;

var updateTemporomandibularResponse=function(req,res,response){

  var model=new updateTemporomandibularModel();
  model.status_code=response.status_code;
  defaultResponse(req,res,model,"updateTemporomandibular");

}
exports.updateTemporomandibularResponse = updateTemporomandibularResponse;


var fileUploadResponse=function(req,res,response){

  var model=new fileUploadModel();
  model.status_code=response.status_code;
  defaultResponse(req,res,model,"fileUpload");

}
exports.fileUploadResponse = fileUploadResponse;


var defaultResponse=function(req,res,model,key){

  util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert={"type":data[key+"_"+model.status_code+"_type"] ,"msg": data[key+"_"+model.status_code+"_msg"],"title": data[key+"_"+model.status_code+"_title"]};
      res.json(model);
    });


}

//###############################################//
//*************END PRIVATE METHOD****************//
//###############################################//
