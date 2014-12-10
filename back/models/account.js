'use strict';

var mongoose = require('mongoose');

var accountModel=function(){

  var accountSchema=mongoose.Schema({

    plan_id:{ type: Number, required: true },
    name:String,
    avatar:String,
    city:String,
    country:String,
    status:{ type: Number, required: true },
    ut_time:Date,
    cr_time:Date
  });

  return mongoose.model('account', accountSchema);
}


module.exports = new accountModel();
