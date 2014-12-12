'use strict';

var userModel = require('../../models/user');
var accountModel = require('../../models/account');
var render = require('../util/render');
var mail = require('../aws/mail');
var log = require('../util/log');

//###############################################//
//*************BEGING PUBLIC METHOD**************//
//###############################################//
//Method to start the signup master process//
/*
   1- Check if userExist()
       1.1-True Response User already exist
       1.2- False
            1.2.1- createAccount()
            1.2.2- createUser()
*/
var signup=function(req, res,model){

 //1-Check if the userExist()
  userModel.findOne({'username':model.username},function(err,user){

      if(user != null)
        render.RenderDefault(req, res, 420);//user already exist
      else{
        //1.2.1 createAccount()
        var account=new accountModel({'plan_id':1,'city':model.city,'country':model.country,'status':1,'cr_time':new Date(),'ut_time':new Date()});
        account.save(function(err,accountObj){

           //Account successfully created
           if(!err){

             //BEGIN Update model object to aggregate user info//
             model.account_id=accountObj._id;
             model.user_type=1;
             model.profile_type=1;
             model.login_count=0;
             model.status=1;
             model.ut_time=new Date();
             model.cr_time=new Date();
             //END Update model object to aggregate user info//

             //1.2.2 createUser()
             var user=new userModel(model);
             user.save(function(err,userObj){

                 if(err){
                    accountObj.remove(function(err){});

                    if(err.name == "ValidationError")
                      render.RenderDefault(req, res, 425);//La contraseña no cumple con los estándares
                    else
                      render.RenderDefault(req, res, 520);//Error creating account

                 }else{
                     var response={};
                     response.data={"user":{"_id":userObj._id,"account_id":model.account_id,"name":model.name,"avatar":model.avatar,"status":model.status,"language":model.language}};

                     log.info("New Account created")
                     mail.welcome({"name":model.name,"email":model.email});//Send welcome mail
                     render.RenderModel(req, res, 200,response);//Signup successfully
                 }
               });//End user.save()

           }else{
             render.RenderDefault(req, res, 520);//Error creating account
             log.error("Error creating account");
           }
        });//End account.save()

      }//End else user!=null

  });//End user.findOne

}
exports.signup = signup;


//###############################################//
//***************END PUBLIC METHOD***************//
//###############################################//


//###############################################//
//************BEGING PRIVATE METHOD**************//
//###############################################//


//###############################################//
//*************END PRIVATE METHOD****************//
//###############################################//
