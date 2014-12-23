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
//##############END BACKEND MODELS#####################//


//##############BEGIN PAGE MODELS#####################//
var indexModel=require('../../../../models/index');
var updateDiagnosisModel=require('../../../../models/treatment/orthodontic/updateDiagnosis');
var updateTreatmentPlanModel=require('../../../../models/treatment/orthodontic/updateTreatmentPlan');
var updateOcclusionDiagnosisModel=require('../../../../models/treatment/orthodontic/updateOcclusionDiagnosis');
var addEventTimelineModel=require('../../../../models/treatment/orthodontic/addEventTimeline');
var updateFacialDiagnosisModel=require('../../../../models/treatment/orthodontic/updateFacialDiagnosis');
var updateTemporomandibularModel=require('../../../../models/treatment/orthodontic/updateTemporomandibular');
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

//###############################################//
//***************END PUBLIC METHOD***************//
//###############################################//


//###############################################//
//************BEGING PRIVATE METHOD**************//
//###############################################//

var updateDiagnosisResponse=function(req,res,response){

  var model=new updateDiagnosisModel();
  model.status_code=response.status_code;

  if(response.status_code == 200){

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="success";
      model.alert.msg = data.updateDiagnosis_200_msg;
      model.alert.title = data.updateDiagnosis_200_title;
      res.json(model);
    });

  }else{

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="warning";

      switch(model.status_code){

          case 427:
            model.alert.msg = data.updateDiagnosis_427_msg;
            model.alert.title = data.updateDiagnosis_427_title;
            break;
          case 530:
            model.alert.type="error";
            model.alert.msg = data.updateDiagnosis_530_msg;
            model.alert.title = data.updateDiagnosis_530_title;
            break;
          }

          res.json(model);
        });
      }
    }
exports.updateDiagnosisResponse = updateDiagnosisResponse;

var updateTreatmentPlanResponse=function(req,res,response){

  var model=new updateTreatmentPlanModel();
  model.status_code=response.status_code;

  if(response.status_code == 200){

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="success";
      model.alert.msg = data.updateTreatmentPlan_200_msg;
      model.alert.title = data.updateTreatmentPlan_200_title;
      res.json(model);
    });

  }else{

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="warning";

      switch(model.status_code){

          case 427:
            model.alert.msg = data.updateTreatmentPlan_427_msg;
            model.alert.title = data.updateTreatmentPlan_427_title;
            break;
          case 531:
            model.alert.type="error";
            model.alert.msg = data.updateTreatmentPlan_531_msg;
            model.alert.title = data.updateTreatmentPlan_531_title;
            break;
          }

          res.json(model);
        });
      }
    }
exports.updateTreatmentPlanResponse = updateTreatmentPlanResponse;

var updateOcclusionDiagnosisResponse=function(req,res,response){

  var model=new updateOcclusionDiagnosisModel();
  model.status_code=response.status_code;

  if(response.status_code == 200){

  util.getMessageLocale("/alerts/index",res,function(res,data){

    model.alert.type="success";
    model.alert.msg = data.updateOcclusionDiagnosis_200_msg;
    model.alert.title = data.updateOcclusionDiagnosis_200_title;
    res.json(model);
  });

  }else{

  util.getMessageLocale("/alerts/index",res,function(res,data){

    model.alert.type="warning";

    switch(model.status_code){

        case 427:
          model.alert.msg = data.updateOcclusionDiagnosis_427_msg;
          model.alert.title = data.updateOcclusionDiagnosis_427_title;
          break;
        case 532:
          model.alert.type="error";
          model.alert.msg = data.updateOcclusionDiagnosis_532_msg;
          model.alert.title = data.updateOcclusionDiagnosis_532_title;
          break;
        }

        res.json(model);
      });
    }
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

  if(response.status_code == 200){

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="success";
      model.alert.msg = data.updateFacialDiagnosis_200_msg;
      model.alert.title = data.updateFacialDiagnosis_200_title;
      res.json(model);
    });

  }else{

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="warning";

      switch(model.status_code){

        case 427:
          model.alert.msg = data.updateFacialDiagnosis_427_msg;
          model.alert.title = data.updateFacialDiagnosis_427_title;
          break;
          case 534:
            model.alert.type="error";
            model.alert.msg = data.updateFacialDiagnosis_534_msg;
            model.alert.title = data.updateFacialDiagnosis_534_title;
            break;
          }

          res.json(model);
        });
      }
}
exports.updateFacialDiagnosisResponse = updateFacialDiagnosisResponse;

var updateTemporomandibularResponse=function(req,res,response){

  var model=new updateTemporomandibularModel();
  model.status_code=response.status_code;

  if(response.status_code == 200){

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="success";
      model.alert.msg = data.updateTemporomandibular_200_msg;
      model.alert.title = data.updateTemporomandibular_200_title;
      res.json(model);
    });

  }else{

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="warning";

      switch(model.status_code){

          case 427:
            model.alert.msg = data.updateTemporomandibular_427_msg;
            model.alert.title = data.updateTemporomandibular_427_title;
            break;
          case 535:
            model.alert.type="error";
            model.alert.msg = data.updateTemporomandibular_535_msg;
            model.alert.title = data.updateTemporomandibular_535_title;
            break;
          }

          res.json(model);
        });
      }
}
exports.updateTemporomandibularResponse = updateTemporomandibularResponse;

//###############################################//
//*************END PRIVATE METHOD****************//
//###############################################//
