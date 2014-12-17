'use strict';

var util=require('../util/others');

//##############BEGIN BACKEND MODELS#####################//
var backend = require('../backend');
var signupModel=require('../../models/backend/user/signup');
var loginModel=require('../../models/backend/user/login');
var socialLoginModel=require('../../models/backend/user/socialLogin');
var forgetPasswordModel=require('../../models/backend/user/forgetPassword');
//##############END BACKEND MODELS#####################//

//##############BEGIN PAGE MODELS#####################//
var indexModel=require('../../models/index');
//##############END PAGE MODELS#####################//



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
  backend.send("/user/login/social",req,res,data,socialLoginResponse);

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

  var model=new indexModel();
  model.status_code=response.status_code;


  if(response.status_code == 200){

    req.session.profile=response.data.user;
    res.json(model);

  }else{

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="signupError";

      switch(model.status_code){

        case 420:
                    model.alert.msg = data.signupError_420_msg;
                    model.alert.title = data.signupError_420_title;
            break;
        case 425:
                    model.alert.msg = data.signupError_425_msg;
                    model.alert.title = data.signupError_425_title;
          break;
        case 520:
                    model.alert.msg = data.signupError_520_msg;
                    model.alert.title = data.signupError_520_title;
          break;
      }

      res.json(model);
    });
  }
}
exports.signupResponse = signupResponse;

var loginResponse=function(req,res,response){

  var model=new indexModel();
  model.status_code=response.status_code;

  if(response.status_code == 200){

    req.session.profile=response.data.user;
    res.json(model);

  }else{

       util.getMessageLocale("/alerts/index",res,function(res,data){

         model.alert.type="loginError";
         model.alert.msg = data.loginError_msg;
         model.alert.title = data.loginError_title;
         res.json(model);
     });
  }
}
exports.loginResponse = loginResponse;

var socialLoginResponse=function(req,res,response){

  var model=new indexModel();
  model.status_code=response.status_code;

  if(response.status_code == 200){

    req.session.profile=response.data.user;
    res.redirect("/dashboard");

  }else{

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="loginError";
      model.alert.msg = data.loginError_msg;
      model.alert.title = data.loginError_title;
      res.redirect("/socialError");
    });
  }
}
exports.socialLoginResponse = socialLoginResponse;

var forgetPasswordResponse=function(req,res,response){

  var model=new indexModel("");
  model.status_code=response.status_code;

  if(response.status_code == 200){

    res.json(model);

  }else{

    util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert.type="forgetPasswordError";
      model.alert.msg = data.forgetPasswordError_msg;
      model.alert.title = data.forgetPasswordError_title;
      res.json(model);
    });
  }
}
exports.forgetPasswordResponse = forgetPasswordResponse;

//###############################################//
//*************END PRIVATE METHOD****************//
//###############################################//
