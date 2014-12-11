'use strict';

var userModel = require('../../models/user');
var render = require('../util/render');
var log = require('../util/log');


//###############################################//
//*************BEGING PUBLIC METHOD**************//
//###############################################//
/*
1- Check if userExist()
1.1-True compareActualPassword()
1.1.1 True updatePassword()
1.2- False
*/
var changePassword=function(req, res,model){

  //1-Check if the userExist()
  userModel.findOne({'_id':model.user_id},function(err,user){


    if(user != null){
        //1.1 compareActualPassword()
        user.comparePassword(model.old_password, function(err, isMatch) {
          if (err) throw err;

          //1.1.1 updatePassword()
          if(isMatch){

            user.password=model.new_password;
            user.save(function(err,userObj){

              render.RenderDefault(req, res, 200);//Password anterior no válido

            });//End user.save()


          }else{

                render.RenderDefault(req, res, 423);//Password anterior no válido

          }//End isMatch
        });//End comparePassword()
    }
    else{
      render.RenderDefault(req, res, 424);//Usuario no existe en el sistema

    }//End else user!=null

  });//End user.findOne
}

exports.changePassword = changePassword;

//###############################################//
//***************END PUBLIC METHOD***************//
//###############################################//


//###############################################//
//************BEGING PRIVATE METHOD**************//
//###############################################//

//###############################################//
//*************END PRIVATE METHOD****************//
//###############################################//
