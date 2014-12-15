'use strict';

var mongoose = require('mongoose');



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

//###############################################//
//***************END PUBLIC METHOD***************//
//###############################################//