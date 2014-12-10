'use strict';

var userModel = require('../../models/user');
var accountModel = require('../../models/account');
var render = require('../util/render');
var mail = require('../aws/mail');
var log = require('../util/log');

//###############################################//
//*************BEGING PUBLIC METHOD**************//
//###############################################//
//Method to authenticate an user with his social network master process//
/*
1- Check if userExist()
1.1-True updateUserProfile()
1.2- False
1.2.1- createAccount()
1.2.2- createUser()
1.2.3- welcomeMail()
*/
var socialLogin=function(req, res,model){

  //1-Check if the userExist()
  userModel.findOne({'social_id':model.social_id,'profile_type':model.profile_type},function(err,user){

    //1.1 updateUserProfile()
    if(user != null){

      user.avatar=model.avatar;
      user.gender=model.gender;
      user.email=model.email;
      user.name=model.name;

      user.save(function(err,userObj){

        responseUserProfile(req, res,userObj);

      });//End user.save()


    }
      else{
        //1.2.1 createAccount()
        var account=new accountModel({'plan_id':1,'status':1,'cr_time':new Date(),'ut_time':new Date()});
        account.save(function(err,accountObj){

          //Account successfully created
          if(!err){

            //BEGIN Update model object to aggregate user info//
            model.account_id=accountObj._id;
            model.user_type=1;
            model.login_count=0;
            model.status=1;
            model.ut_time=new Date();
            model.cr_time=new Date();
            //END Update model object to aggregate user info//

            //1.2.2 createUser()
            var user=new userModel(model);
            user.save(function(err,userObj){

              log.info("New Account created")
              mail.welcome({"name":model.name,"email":model.email});//Send welcome mail
              responseUserProfile(req, res,userObj);

            });//End user.save()

          }else{
            render.RenderDefault(req, res, 520);//Error creating account
            log.error("Error creating account");
          }
        });//End account.save()

      }//End else user!=null

    });//End user.findOne
}

exports.socialLogin = socialLogin;

//###############################################//
//***************END PUBLIC METHOD***************//
//###############################################//


//###############################################//
//************BEGING PRIVATE METHOD**************//
//###############################################//
var responseUserProfile=function(req, res,user){

  var response={};
  response.data={"user":{"_id":user._id,"account_id":user.account_id,"name":user.name,"avatar":user.avatar,"status":user.status}};
  render.RenderModel(req, res, 200,response);//Signup successfully

}

//###############################################//
//*************END PRIVATE METHOD****************//
//###############################################//
