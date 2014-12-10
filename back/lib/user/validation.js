'use strict';

var mongoose = require('mongoose');



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
  var gender=data.gender.trim();

  if(name != "" && email != "" && username != "" && password != "" && gender != ""){

     model.status=true;
     model.data={"name":name,"email":email,"username":username,"password":password,"city":city,"gender":gender};

  }else{

    model.status=false;
  }

  return model;
}
exports.signup = signup;

//Method to start the login master process//
var login=function(data){

  var model={};
  var username=data.username.trim();
  var password=data.password.trim();

  if(username != "" && password != "" ){

    model.status=true;
    model.data={"username":username,"password":password};

  }else{

    model.status=false;
  }

  return model;

}
exports.login = login;

//Method to start the social login master process//
var socialLogin=function(data){

  var model={};
  var name=data.name.trim();
  var email=data.email.trim();
  var social_id=data.social_id.trim();
  var profile_type=data.profile_type.trim();
  var avatar=data.avatar.trim();
  var gender=data.gender.trim();

  if(name != "" && email != "" && social_id != "" && profile_type != "" && avatar != "" && gender != ""){

    model.status=true;
    model.data={"name":name,"email":email,"social_id":social_id,"profile_type":profile_type,"avatar":avatar,"gender":gender};

  }else{

    model.status=false;
  }

  return model;


}
exports.socialLogin = socialLogin;

//Method to start the forget password master process//
var forgetPassword=function(data){

  var model={};
  var username=data.username.trim();

  if(username != ""){

    model.status=true;
    model.data={"username":username};

  }else{

    model.status=false;
  }

  return model;

}
exports.forgetPassword = forgetPassword;

//Method to start the change password master process//
var changePassword=function(data){

  var model={};
  var user_id=data.user_id.trim();
  var new_password=data.new_password.trim();

  if(user_id != "" && new_password != "" ){
    
    model.status=true;
    model.data={"user_id":user_id,"new_password":new_password};

  }else{

    model.status=false;
  }

  return model;

}
exports.changePassword = changePassword;


//###############################################//
//***************END PUBLIC METHOD***************//
//###############################################//
