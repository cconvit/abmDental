'use strict';
var backend = require('./backend');
var signupModel=require('../../models/backend/signup');
var loginModel=require('../../models/backend/login');
var socialLoginModel=require('../../models/backend/socialLogin');
var forgetPasswordModel=require('../../models/backend/forgetPassword');
//###############################################//
//*************BEGING PUBLIC METHOD**************//
//###############################################//
//Method to start the signup master process//
var signup=function(req, res){

  var data=new signupModel(req);
  backend.send("/user/signup",req,res,data,signupResponse);
}
exports.signup = signup;

//Method to start the login master process//
var login=function(req, res){
  req.session.passport={};
  var data=new loginModel(req);
  backend.send("/user/login",req,res,data,loginResponse);
}
exports.login = login;

//Method to start the social login master process//
var socialLogin=function(req, res){

  var data=new socialLoginModel(req);
  backend.send("/user/login/social",req,res,data,loginResponse);

}
exports.socialLogin = socialLogin;

//Method to start the forget password master process//
var forgetPassword=function(req, res){

  var data=new forgetPasswordModel(req);
  backend.send("/user/password/forget",req,res,data,forgetPasswordResponse);

}
exports.forgetPassword = forgetPassword;

//Method to start the change password master process//
var changePassword=function(req, res){

}
exports.changePassword = changePassword;

//Method to start the forget password reset master process//
var forgetPasswordReset=function(req, res){

}
exports.forgetPasswordReset = forgetPasswordReset;

//###############################################//
//***************END PUBLIC METHOD***************//
//###############################################//


//###############################################//
//************BEGING PRIVATE METHOD**************//
//###############################################//
var signupResponse=function(req,res,response){

  if(response.status_code == 200){

    req.session.profile=response.data.user;
    res.redirect("/dashboard");

  }else{

    res.redirect("/error");
  }
}
exports.signupResponse = signupResponse;

var loginResponse=function(req,res,response){

  if(response.status_code == 200){

    req.session.profile=response.data.user;
    res.redirect("/dashboard");

  }else{

    res.redirect("/error");
  }
}
exports.loginResponse = loginResponse;

var forgetPasswordResponse=function(req,res,response){

  if(response.status_code == 200){

    res.redirect("/success");

  }else{

    res.redirect("/error");
  }
}
exports.forgetPasswordResponse = forgetPasswordResponse;




//###############################################//
//*************END PRIVATE METHOD****************//
//###############################################//
