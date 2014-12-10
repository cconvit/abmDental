'use strict';

var mongoose = require('mongoose');
var StatusModel = require('../../models/status');

//Send an standar JSON response message
var RenderDefault = function(req, res, status_code) {

    //Find the status_code in the data base
    StatusModel.findOne({_id: status_code}, function(err, status) {

        if (err)
            console.log(err);
        else if (status)
            res.json({status_code: status._id, status_desc: status.desc,data:{}});
        else
            res.json({status_code: 500, status_desc: "system error",data:{}});//system error

    });

}

exports.RenderDefault = RenderDefault;

//Method to send a JSON response with a model message
var RenderModel = function(req, res, status_code, model) {

    //Find the status_code in the data base
    StatusModel.findOne({_id: status_code}, function(err, status) {

        if (err)
            console.log(err);
        else if (status) {
            model.status_code = status._id;
            model.status_desc = status.desc;
            res.json(model);
        } else
            res.json({status_code: 500, status_desc: "system error"});//system error

    });

}

exports.RenderModel = RenderModel;
