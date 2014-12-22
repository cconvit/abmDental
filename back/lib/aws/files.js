
var AWS = require('aws-sdk');


AWS.config.loadFromPath(__dirname+'/../../config/AWS.json');

var deleteFile=function(bucket,key){

  var s3 = new AWS.S3({params: {Bucket: 'dev-abmdental-files'}});


    var params = {
      Bucket: 'dev-abmdental-files',
      Key: key
    };

    s3.deleteObject(params, function (err, data) {
console.log(err);
        console.log(data);

    });




}
exports.deleteFile = deleteFile;
