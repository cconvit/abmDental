'use strict';

var Client = require('node-rest-client').Client;
var url    = require('url');
var parameters=global.config.backend;
var send_url=parameters.protocol+"://"+parameters.host+":"+parameters.port
//###############################################//
//*************BEGING PUBLIC METHOD**************//
//###############################################//
//Method to start the signup master process//
var send=function(path,req, res,model,next){

  var client = new Client();

  client.post(send_url+path, getArgs(model), function(data,response) {
    //parsed response body as js object
    var obj=JSON.parse(data);
    next(req,res,obj);
  });//End client.post

}
exports.send = send;

//###############################################//
//***************END PUBLIC METHOD***************//
//###############################################//


//###############################################//
//************BEGING PRIVATE METHOD**************//
//###############################################//
var getArgs=function(model){

  var args = {
    data: model,
    headers:{"Content-Type": "application/json"}
  };
  return args
}
//###############################################//
//*************END PRIVATE METHOD****************//
//###############################################//
