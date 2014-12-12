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
1.1-True authenticateUser()
1.1.1 getUserProfile()
1.2- False
1.2.1- updateLoginCount()
1.2.2- True isThirdAttempt()
1.2.2.1- blockUser()
1.2.2.2- sendNotificationMail()

*/
var login=function(req, res,model){

  //1-Check if the userExist()
  userModel.findOne({'username':model.username},function(err,user){

    //1.1 authenticateUser()
    if(user != null){

      if(user.status == 1){
            user.comparePassword(model.password, function(err, isMatch) {
              if (err) throw err;

              //1.1.1 getUserProfile()
              if(isMatch){

                user.login_count=0;
                user.save(function(err,userObj){

                  responseUserProfile(req, res,user);

                });//End user.save()


              }else{
                  //1.2.1- updateLoginCount()
                  user.login_count++;
                  //1.2.2- True isThirdAttempt()
                  if(user.login_count >= 3){

                    //1.2.2.1- blockUser()
                    user.status=3;
                    //1.2.2.2- sendNotificationMail()
                    // mail.welcome({"name":model.name,"email":model.email});//Send welcome mail
                  }

                  user.save(function(err,userObj){

                    render.RenderDefault(req, res, 421);//Invalid credentials

                  });//End user.save()

              }//End isMatch
            });//End comparePassword()
          }else{

            render.RenderDefault(req, res, 422);//Your user has been blocked
          }//End else status ==1



    }
    else{
         render.RenderDefault(req, res, 421);//Invalid credentials

    }//End else user!=null

  });//End user.findOne
}

exports.login = login;

//###############################################//
//***************END PUBLIC METHOD***************//
//###############################################//


//###############################################//
//************BEGING PRIVATE METHOD**************//
//###############################################//
var responseUserProfile=function(req, res,user){

  var response={};
  response.data={"user":{"_id":user._id,"account_id":user.account_id,"name":user.name,
                         "avatar":user.avatar,"profile_type":user.profile_type,
                         "status":user.status,"language":user.language}};
  render.RenderModel(req, res, 200,response);//Signup successfully

}

//###############################################//
//*************END PRIVATE METHOD****************//
//###############################################//
