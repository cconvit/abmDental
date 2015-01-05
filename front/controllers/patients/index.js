'use strict';


var PatientsModel = require('../../models/patients');
var medicalRecordLib = require('../../lib/patients/medicalRecord/main');
var treatmentLib = require('../../lib/patients/treatment/main');

var findMedicalRecordModel=require('../../models/medicalRecord/findMedicalRecord');
var findTreatmentModel=require('../../models/treatment/findTreatment');
var listModel=require('../../models/patients/list');


module.exports = function (router) {

    var model = new PatientsModel();


    router.get('/', function (req, res) {

        res.format({
            json: function () {
                res.json(model);
            },
            html: function () {
                res.render('patients/index', model);
            }
        });
    });

    router.get('/medicalRecord', function (req, res) {

        res.render('patients/medicalRecord', new findMedicalRecordModel(req.session.profile));

    });

    //Find Medical Record
    router.post('/medicalRecord', function (req, res) {

      medicalRecordLib.findMedicalRecord(req,res);

    });

    router.get('/treatment', function (req, res) {


      //treatmentLib.findTreatment(req,res);
      res.render('patients/treatment',new findTreatmentModel(req.session.profile));

    });

    router.post('/treatment', function (req, res) {

      treatmentLib.findTreatment(req,res);

    });

    router.get('/list', function (req, res) {

      medicalRecordLib.listPatients(req,res);
      //res.render('patients/list',new listModel(req.session.profile));

    });

};
