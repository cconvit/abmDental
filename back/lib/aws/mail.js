
var AWS = require('aws-sdk');

AWS.config.loadFromPath(__dirname+'/../../config/AWS.json');


var welcome=function(body){

  var sqs = new AWS.SQS();
  var message={"templeate":"welcome","data":body};

  var params = {
    MessageBody: JSON.stringify(message), /* required */
    QueueUrl: global.config.aws.sqs.mail, /* required */
    DelaySeconds: 0,
  };

  sqs.sendMessage(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
      });

}
exports.welcome = welcome;


var resetPassword=function(body){

  var sqs = new AWS.SQS();
  var message={"templeate":"resetPassword","data":body};

  var params = {
    MessageBody: JSON.stringify(message), /* required */
    QueueUrl: global.config.aws.sqs.mail, /* required */
    DelaySeconds: 0,
  };

  sqs.sendMessage(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
      });

    }
    exports.resetPassword = resetPassword;

var resetPasswordConfirmation=function(body){

  var sqs = new AWS.SQS();
  var message={"templeate":"resetPasswordConfirmation","data":body};

  var params = {
    MessageBody: JSON.stringify(message), /* required */
    QueueUrl: global.config.aws.sqs.mail, /* required */
    DelaySeconds: 0,
  };

  sqs.sendMessage(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
      });

    }
    exports.resetPasswordConfirmation = resetPasswordConfirmation;
