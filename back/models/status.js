'use strict';

var mongoose = require('mongoose');

var StatusModel=function(){

   var StatusSchema=mongoose.Schema({

     _id:Number,
     desc:String
   });

  return mongoose.model('Status', StatusSchema);
}

module.exports = new StatusModel();
