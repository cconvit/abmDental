'use strict';


var PatientsModel = require('../../models/patients');
var medicalRecordLib = require('../../lib/patients/medicalRecord/main');
var treatmentLib = require('../../lib/patients/treatment/main');


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

        res.render('patients/medicalRecord', {});

    });

    //Find Medical Record
    router.post('/medicalRecord', function (req, res) {

      medicalRecordLib.findMedicalRecord(req,res);

    });

    router.get('/treatment', function (req, res) {


      //treatmentLib.findTreatment(req,res);
      res.render('patients/treatment', {});

    });

    router.post('/treatment', function (req, res) {

      console.log(req.body.sa_identity);
      var response={};
      response.patient={"names":"Carlos Eduardo","identity":req.body.sa_identity};
      response.orthodontics_time_line=[{
        "title":"EMERGENCY GOLPE",
        "desc":"Ricebean black-eyed pea maize scallion green bean spinach cabbage jicama bell pepper carrot onion corn plantain garbanzo. Winter purslane courgette pumpkin quandong komatsuna fennel green bean cucumber watercress. Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize scallion green bean spinach cabbage jicama bell pepper carrot onion corn plantain garbanzo.",
        "type":"emergency",
        "date":"19/11/2014",
        "hour":"13:23",
        "icon":"ambulance"
      },
      {
        "title":"RETENTION SUPERIOR",
        "desc":"Se le coloco el retenedor superios",
        "type":"retention",
        "date":"24/10/2014",
        "hour":"15:23",
        "icon":"check-square-o"
      },
      {
        "title":"RETIREMENT INFERIOR",
        "desc":"Se le retiraron los brackets inferiores",
        "type":"retirement",
        "date":"13/10/2014",
        "hour":"12:23",
        "icon":"thumbs-o-up"
      },
      {
        "title":"CONTROL 12",
        "desc":"Cambio del arco por un australiano 10",
        "type":"control",
        "date":"11/09/2014",
        "hour":"09:23",
        "icon":"history"
      },
      {
        "title":"ASSEMBLY SUPERIOR",
        "desc":"Montaje de los brackets superiores",
        "type":"assembly",
        "date":"09/08/2014",
        "hour":"10:23",
        "icon":"cogs"
      },
      {
        "title":"PATIENT DIAGNOSIS",
        "desc":"Diagnóstico del paciente",
        "type":"diagnosis timeline-noline",
        "date":"04/08/2014",
        "hour":"13:34",
        "icon":"pencil"
      }];
      res.render('patients/treatment', response);

    });

};
