'use strict';

module.exports = function newPatientModel(req) {

  return {
    "api_key":"537e5431cb0d7a1f4100064e",
    "language":"SPA",
    "timestamp":new Date(),
    "auth_code":"2014-09-26",
    "data":{
      "account_id":req.session.profile.account_id,
      "user_id":req.session.profile._id,
      "id_number":req.body.identity,
      "medical_history":{
                              "prenatal_natal":req.body.prenatal,
                              "organ_of_sense":req.body.organOfSense,
                              "childhood_diseases":req.body.childhoodDiseases,
                              "psychiatric":req.body.psychiatric,
                              "immunizations":req.body.immunizations,
                              "cardio_vascular_system":req.body.cardioVascularSystem,
                              "surgical":req.body.surgical,
                              "endocrine_system":req.body.endocrineSystem,
                              "traumatic":req.body.traumatic,
                              "hematopoietic_system":req.body.hematopoieticSystem,
                              "hospital_record":req.body.hospitalRecords,
                              "immune_system":req.body.immuneSystem,
                              "allergies_toxic":req.body.allergiesToxic,
                              "nervous_system":req.body.nervousSystem,
                              "hemorrhagic":req.body.hemorrhagic,
                              "respiratory_system":req.body.respiratorySystem,
                              "infectious_diseases":req.body.infectiousDiseases,
                              "habits":req.body.habits,
                              "genito_gynecology":req.body.gynecologyObstetric,
                              "others":req.body.others
                          }
    }

  };
};
