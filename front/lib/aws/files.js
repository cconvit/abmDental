
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

var orthodonticFile=function(req,res,next){

  var file=req.files[0];

  var name = crypto.randomBytes(48).toString('hex');

  name=name+path.extname(file.name);

  var s3 = new AWS.S3({params: {Bucket: 'dev-abmdental-files'}});

  var metaData = getContentTypeByFile(name);
  var path_file = file.path;
  var key="orthodontic/"+req.session.profile.account_id+"/"+req.body.identity+"/"+name;
  fs.readFile(path_file, function(err, file_buffer){

    var params = {
      Bucket: 'dev-abmdental-files',
      Key: key,
      Body: file_buffer,
      ContentType: metaData
    };

    s3.putObject(params, function (err) {

      if (err) {
        console.log("Error uploading data: ", err);
      } else {
        next(req,res,key);

      }

      });


  });

    }
exports.orthodonticFile = orthodonticFile;


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


function getContentTypeByFile(fileName) {
  var rc = 'application/octet-stream';
  var fn = fileName.toLowerCase();

  if (fn.indexOf('.html') >= 0) rc = 'text/html';
  else if (fn.indexOf('.css') >= 0) rc = 'text/css';
  else if (fn.indexOf('.json') >= 0) rc = 'application/json';
  else if (fn.indexOf('.js') >= 0) rc = 'application/x-javascript';
  else if (fn.indexOf('.png') >= 0) rc = 'image/png';
  else if (fn.indexOf('.jpg') >= 0) rc = 'image/jpg';
  else if (fn.indexOf('.jpeg') >= 0) rc = 'image/jpeg';
  else if (fn.indexOf('.tiff') >= 0) rc = 'image/tiff';
  else if (fn.indexOf('.tif') >= 0) rc = 'image/tiff';
  else if (fn.indexOf('.gif') >= 0) rc = 'image/gif';

  return rc;
}
