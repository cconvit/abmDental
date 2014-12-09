'use strict';

var validator = require('./validation');

//###############################################//
//*************BEGING PUBLIC METHOD**************//
//###############################################//
//Method to start the signup master process//
var signup=function(req, res){

  res.json(validator.signup(req.body));


}
exports.signup = signup;

//Method to start the login master process//
var login=function(req, res){


}
exports.login = login;

//Method to start the social login master process//
var socialLogin=function(req, res){


}
exports.socialLogin = socialLogin;

//Method to start the forget password master process//
var forgetPassword=function(req, res){


}
exports.forgetPassword = forgetPassword;

//Method to start the change password master process//
var changePassword=function(req, res){


}
exports.changePassword = changePassword;


//###############################################//
//***************END PUBLIC METHOD***************//
//###############################################//


//###############################################//
//************BEGING PRIVATE METHOD**************//
//###############################################//

//Method to get one user base on his username//
var getUserByUsername=function(username){


}

//Method to get one user base on his social id//
var getUserBySocialId=function(social_id, social_type){


}
//###############################################//
//*************END PRIVATE METHOD****************//
//###############################################//
