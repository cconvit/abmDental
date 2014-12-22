'use strict';

module.exports = function updateOcclusionDiagnosisModel(req) {

  return {
    "api_key":"537e5431cb0d7a1f4100064e",
    "language":"SPA",
    "timestamp":new Date(),
    "auth_code":"2014-09-26",
    "data":{
      "account_id":req.session.profile.account_id,
      "user_id":req.session.profile._id,
      "id_number":req.body.identity,
      "occlusion_diagnosis":{
                                "dentition_type":req.body.dentitionType,
                                "superior_arch":req.body.superiorArch,
                                "lower_arch":req.body.lowerArch,
                                "dm_rotation":req.body.rotation,
                                "dm_version":req.body.version,
                                "dm_gresion":req.body.gresion,
                                "dm_extrusion":req.body.extrusion,
                                "dm_intrusion":req.body.intrusion,
                                "spaced_teeth":req.body.spacedTeeth,
                                "overbite":req.body.overbite,
                                "overjet":req.body.overjet,
                                "left_molar_relationship":req.body.leftMolarRatio,
                                "right_molar_relationship":req.body.rightCanineRatio,
                                "left_canine_relationship":req.body.leftCanineRatio,
                                "right_canine_relationship":req.body.rightCanineRatio,
                                "maxillary_dental_midline":req.body.maxillaryMidline,
                                "maxillary_dental_distance":req.body.maxillaryMidlineDistance,
                                "mandibular_dental_midline":req.body.mandibularMidline,
                                "mandibular_dental_distance":req.body.mandibularMidlineDistance,
                                "left_working_side":req.body.workingSideRight,
                                "right_working_side":req.body.workingSideLeft,
                                "left_balancing_side":req.body.balancingSideRight,
                                "right_balancin_side":req.body.balancingSideLeft,
                                "protrusive_incisal_guide":req.body.protrusiveIncisalGuide,
                                "protrusive_interference":req.body.protrusiveInterference,
                                "spee_curve":req.body.speeCurve,
                                "dental_relationship":req.body.dentalRelationship
                  }
    }

  };
};
