'use strict';

var mongoose = require('mongoose');

var resetPasswordModel=function(){

   var resetPasswordSchema=mongoose.Schema({

     user_id:{type:mongoose.Schema.Types.ObjectId,ref: 'user'},
     cr_time:Date
   });

  return mongoose.model('resetPassword', resetPasswordSchema);
}

module.exports = new resetPasswordModel();
