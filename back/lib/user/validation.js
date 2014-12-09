'use strict';


//###############################################//
//*************BEGING PUBLIC METHOD**************//
//###############################################//
//Method to start the signup master process//
var signup=function(data){

  var model={};

  var name=data.name.trim();
  var email=data.email.trim();
  var username=data.username.trim();
  var password=data.password.trim();
  var city=data.city.trim();

  if(name != "" && email != "" && username != "" && password != "" ){

     model.status=true;
     model.data={"name":name,"email":email,"username":username,"password":password,"city":city};
  }else{

    model.status=false;
  }

  return model;
}
exports.signup = signup;

//Method to start the login master process//
var login=function(data){


}
exports.login = login;

//Method to start the social login master process//
var socialLogin=function(data){


}
exports.socialLogin = socialLogin;

//Method to start the forget password master process//
var forgetPassword=function(data){


}
exports.forgetPassword = forgetPassword;

//Method to start the change password master process//
var changePassword=function(data){


}
exports.changePassword = changePassword;


//###############################################//
//***************END PUBLIC METHOD***************//
//###############################################//
