'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

var userModel=function(){

  var userSchema=mongoose.Schema({

    account_id:{type:mongoose.Schema.Types.ObjectId,ref: 'account'},
    user_type:Number,
    profile_type:Number,
    social_id:String,
    name:String,
    gender:String,
    email:String,
    username:String,
    password:{ type: String, required: false, validate: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ },
    avatar:String,
    login_count:Number,
    status:Number,
    language:String,
    ut_time:Date,
    cr_time:Date
  });


  userSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);

      // hash the password using our new salt
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);

        // override the cleartext password with the hashed one
        user.password = hash;
        next();
      });
    });
  });

  userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
    });
  };

  return mongoose.model('user', userSchema);
}


module.exports = new userModel();
