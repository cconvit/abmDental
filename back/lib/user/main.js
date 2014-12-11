'use strict';
var render = require('../util/render');
var validator = require('./validation');
var signupClass = require('./signup');
var socialLoginClass = require('./socialLogin');
var loginClass = require('./login');
var forgetPasswordClass = require('./forgetPassword');
var changePasswordClass = require('./changePassword');

//###############################################//
//*************BEGING PUBLIC METHOD**************//
//###############################################//
//Method to start the signup master process//
var signup=function(req, res){

  //Validate request message//
  var model=validator.signup(req.body.data);

  //isValid//
  if(model.status){
    signupClass.signup(req,res,model.data);
  }else
    render.RenderDefault(req, res, 510);//Error bad request message


}
exports.signup = signup;

//Method to start the login master process//
var login=function(req, res){

  //Validate request message//
  var model=validator.login(req.body.data);

  //isValid//
  if(model.status){
    loginClass.login(req,res,model.data);
  }else
    render.RenderDefault(req, res, 510);//Error bad request message

}
exports.login = login;

//Method to start the social login master process//
var socialLogin=function(req, res){

  //Validate request message//
  var model=validator.socialLogin(req.body.data);

  //isValid//
  if(model.status){
    socialLoginClass.socialLogin(req,res,model.data);
  }else
    render.RenderDefault(req, res, 510);//Error bad request message

}
exports.socialLogin = socialLogin;

//Method to start the forget password master process//
var forgetPassword=function(req, res){

  //Validate request message//
  var model=validator.forgetPassword(req.body.data);

  //isValid//
  if(model.status){
    forgetPasswordClass.forgetPassword(req,res,model.data);
  }else
    render.RenderDefault(req, res, 510);//Error bad request message

}
exports.forgetPassword = forgetPassword;

//Method to start the change password master process//
var changePassword=function(req, res){

  //Validate request message//
  var model=validator.changePassword(req.body.data);

  //isValid//
  if(model.status){
    changePasswordClass.changePassword(req,res,model.data);
  }else
    render.RenderDefault(req, res, 510);//Error bad request message

}
exports.changePassword = changePassword;

//Method to start the forget password reset master process//
var forgetPasswordReset=function(req, res){

  //Validate request message//
  var model=validator.forgetPasswordReset(req.body.data);

  //isValid//
  if(model.status){
    forgetPasswordClass.forgetPasswordReset(req,res,model.data);
  }else
    render.RenderDefault(req, res, 510);//Error bad request message
  }
  exports.forgetPasswordReset = forgetPasswordReset;

//###############################################//
//***************END PUBLIC METHOD***************//
//###############################################//


//###############################################//
//************BEGING PRIVATE METHOD**************//
//###############################################//

//###############################################//
//*************END PRIVATE METHOD****************//
//###############################################//
