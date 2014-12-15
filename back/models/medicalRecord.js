'use strict';

var mongoose = require('mongoose');

var medicalRecordModel=function(){

  var medicalRecordSchema=mongoose.Schema({

    _id:{
           account_id:{type:mongoose.Schema.Types.ObjectId,ref: 'account'},
           id_number:{ type: String, required: true}
        },
    personal_info:{
                      names:{ type: String, required: true},
                      last_name:{ type: String, required: true},
                      id_type:{ type: String, required: true},
                      image:String,
                      date_of_birth:Date,
                      place_of_birth:String,
                      age:Number,
                      civil_status:String,
                      genre:String,
                      origin:String,
                      occupation:String,
                      workplace:String,
                      phone:String,
                      cell_phone:String,
                      email:String,
                      neighborhood:String,
                      home_phone:String,
                      department:String
                  },
      emergency_contact:{

                      names:String,
                      last_name:String,
                      id_number:String,
                      id_type:String,
                      relationship:String,
                      occupation:String,
                      phone:String,
                      cell_phone:String
                  },
      family_history:{

                      family:String
                  },
      chief_complaint:{

                      chief_complaint:String
                  },
      medical_history:{

                      prenatal_natal:String,
                      organ_of_sense:String,
                      childhood_diseases:String,
                      psychiatric:String,
                      immunizations:String,
                      cardio_vascular_system:String,
                      surgical:String,
                      endocrine_system:String,
                      traumatic:String,
                      hematopoietic_system:String,
                      hospital_record:String,
                      immune_system:String,
                      allergies_toxic:String,
                      nervous_system:String,
                      hemorragic:String,
                      respiratory_system:String,
                      infectious_diseases:String,
                      habits:String,
                      genito_gynecology:String,
                      others:String
                    },
      dental_history:{
                      dental_info:String
                    },
      risk_factors:{
                      oral_hygiene:String,
                      use_of:String,
                      bleeding_gums:String,
                      habits:String,
                      others:String
                    },
      current_medication:{
                      medication:String
                    }

  },{ _id: false });

  return mongoose.model('medicalRecord', medicalRecordSchema);
}

module.exports = new medicalRecordModel();
