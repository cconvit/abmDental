
var AWS = require('aws-sdk');
var fs = require('fs');
var path = require('path');
var crypto=require('crypto');

AWS.config.loadFromPath(__dirname+'/../../config/AWS.json');


var portrait=function(req,res,next){

  var file=req.files[0];
  var name = crypto.randomBytes(48).toString('hex');

  name=name+path.extname(file.name);

  var s3 = new AWS.S3({params: {Bucket: 'dev-abmdental-portrait'}});

  var path_file = file.path;
  var key="portrait/"+name;
  fs.readFile(path_file, function(err, file_buffer){

    var params = {
      Bucket: 'dev-abmdental-files',
      Key: key,
      Body: file_buffer
    };

    s3.putObject(params, function (err) {

      if (err) {
        console.log("Error uploading data: ", err);
      } else {
        getFile("dev-abmdental-files",key,req,res,next);

      }

      });


  });

    }
exports.portrait = portrait;


var getFile=function(bucket,key,req,res,next){

  var s3 = new AWS.S3({params: {Bucket: 'dev-abmdental-files'}});


    var params = {
      Bucket: 'dev-abmdental-files',
      Key: key
    };

    s3.getSignedUrl('getObject',params, function (err, url) {

         next(req,res,key,url);

    });




}
exports.getFile = getFile;
