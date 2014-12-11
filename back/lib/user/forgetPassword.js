'use strict';

var userModel = require('../../models/user');
var resetPass = require('../../models/resetPass');
var render = require('../util/render');
var mail = require('../aws/mail');
var log = require('../util/log');




//###############################################//
//*************BEGING PUBLIC METHOD**************//
//###############################################//
/*
1- Check if userExist()
1.1-True sendResetPasswordMail()
1.2- False
*/
var forgetPassword=function(req, res,model){

  //1-Check if the userExist()
  userModel.findOne({'username':model.username},function(err,user){


    if(user != null){

          var rquest_reset=new resetPass({"user_id":user._id,"cr_time":new Date()});
          rquest_reset.save(function(err,resetObj){

            mail.resetPassword({"name":user.name,"email":user.email,"reset_id":resetObj._id});//Send welcome mail
            render.RenderModel(req, res, 200,{"reset_id":resetObj._id});//Signup successfully

          });//End rquest_reset.save()
    }
    else{
      render.RenderDefault(req, res, 424);//Usuario no existe en el sistema

    }//End else user!=null

  });//End user.findOne
}

exports.forgetPassword = forgetPassword;

/*
1- Check if resetRequestExist()
1.1-True updatePassword()
1.2- False
*/
var forgetPasswordReset=function(req, res,model){

  //1-Check if the userExist()
  resetPass.findOne({'_id':model.reset_id},function(err,reset){


    if(reset != null){

      userModel.findOne({'_id':reset.user_id},function(err,user){

      user.password=model.new_password;
      user.save(function(err,userObj){

        reset.remove(function(err){});
        mail.resetPasswordConfirmation({"name":user.name,"email":user.email});//Send welcome mail
        render.RenderDefault(req, res, 200);//Signup successfully

      });//End rquest_reset.save()
    });//End User find
    }
    else{
      render.RenderDefault(req, res, 424);//Usuario no existe en el sistema

    }//End else user!=null

  });//End user.findOne
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
