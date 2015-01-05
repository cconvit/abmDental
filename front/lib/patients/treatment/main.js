'use strict';


var moment = require('moment');
var util=require('../../util/others');

var files=require('../../aws/files');

//##############BEGIN BACKEND MODELS#####################//
var backend = require('../../backend');
var findTreatmentModelBack=require('../../../models/backend/patients/treatment/findTreatment');
//##############END BACKEND MODELS#####################//


//##############BEGIN PAGE MODELS#####################//
var indexModel=require('../../../models/index');
var findTreatmentModel=require('../../../models/treatment/findTreatment');
//##############END PAGE MODELS#####################//


//###############################################//
//*************BEGING PUBLIC METHOD**************//
//###############################################//

var findTreatment=function(req, res){

  var data=new findTreatmentModelBack(req);
  backend.send("/patients/treatment/find",req,res,data,findTreatmentResponse);
}
exports.findTreatment = findTreatment;

//###############################################//
//***************END PUBLIC METHOD***************//
//###############################################//


//###############################################//
//************BEGING PRIVATE METHOD**************//
//###############################################//

var findTreatmentResponse=function(req,res,response){

  var model=new findTreatmentModel(req.session.profile);
  model.status_code=response.status_code;

  if(response.status_code == 200){
    model.treatment.orthodontic=response.data.treatment.orthodontic;
    model.personal_info=response.data.personal_info;
    model.id_number=response.data.id_number;
    model.personal_info.avatar=model.personal_info.image;

    if(model.treatment.orthodontic != null){
      
        model.treatment.orthodontic.files=[{"name":"Panoramica","id":"23dsdfsdf"},{"name":"Pariapical","id":"23sdfsfdsdfsdf"}];
        var event=model.treatment.orthodontic.treatment_timeline.event;
        for (var i = 0; i < event.length; i++) {

          moment.locale((req.session.language == null)?"en_US":req.session.language);
          var datetime=moment(event[i].datetime);

          event[i].date=datetime.format('DD/MM/YYYY');
          event[i].hour=datetime.format('HH:mm');

        }

        model.treatment.orthodontic.treatment_timeline.event=event;
    }

    var next=function(req,res,key,url){
      model.personal_info.image=url;
      res.render('patients/treatment', model);
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
              model.alert.msg = data.findTreatment_427_msg;
              model.alert.title = data.findTreatment_427_title;
              break;
            }

            res.render('patients/treatment', response);
          });
        }
      }
exports.findTreatmentResponse = findTreatmentResponse;



//###############################################//
//*************END PRIVATE METHOD****************//
//###############################################//
