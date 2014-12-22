'use strict';

var mongoose = require('mongoose');

var orthodonticTreatmentModel=function(){

  var eventSchema=mongoose.Schema({
    title:String,
    user_id:{type:mongoose.Schema.Types.ObjectId,ref: 'user'},
    description:String,
    type:String,
    datetime:Date,
    icon:String
  },{ _id: false });
  var orthodonticTreatmentModelSchema=mongoose.Schema({

    _id:{
           account_id:{type:mongoose.Schema.Types.ObjectId,ref: 'account'},
           id_number:{ type: String, required: true}
        },
    diagnosis:{
                      facial:String,
                      skeletal:String,
                      dental:String

    },
    treatment_plan:{
                      plan:String
    },
    occlusion_diagnosis:{
                      dentition_type:String,
                      superior_arch:String,
                      lower_arch:String,
                      dm_rotation:String,
                      dm_version:String,
                      dm_gresion:String,
                      dm_extrusion:String,
                      dm_intrusion:String,
                      spaced_teeth:String,
                      overbite:String,
                      overjet:String,
                      left_molar_relationship:String,
                      right_molar_relationship:String,
                      left_canine_relationship:String,
                      right_canine_relationship:String,
                      maxillary_dental_midline:String,
                      maxillary_dental_distance:String,
                      mandibular_dental_midline:String,
                      mandibular_dental_distance:String,
                      left_working_side:String,
                      right_working_side:String,
                      left_balancing_side:String,
                      right_balancin_side:String,
                      protrusive_incisal_guide:String,
                      protrusive_interference:String,
                      spee_curve:String,
                      dental_relationship:String
    },
    treatment_timeline:{
                      event:[eventSchema]
    },
    facial_diagnosis:{
                      facial_type:String,
                      asymmetry:String,
                      smile_line:String,
                      lip_incompetence:String,
                      facial_profile:String
    },
    temporomandibular:{
                      clicking_left:String,
                      clicking_right:String,
                      pain_left:String,
                      pain_right:String,
                      deviation_left:String,
                      deviation_right:String,
                      deflection_left:String,
                      deflection_right:String
    }
  },{ _id: false });

  return mongoose.model('orthodonticTreatment', orthodonticTreatmentModelSchema);
}

module.exports = new orthodonticTreatmentModel();
