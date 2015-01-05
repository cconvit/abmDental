
var i18n = res.app.kraken.get('i18n');
var locality = "US_us";
var bundle;
var bundalo = require('bundalo');

bundle = bundalo({'contentPath': i18n.contentPath, 'fallback': locality, 'engine': "none"});

bundle.get({'bundle': '/alerts/index', 'model': {}, 'locality': locality}, function (err, data) {

    console.log(data.fileUpload_200_type);

  });




/*

var util=require('./lib/util/others');
var model={};
model.status_code=200;
var res=

var defaultResponse=function(req,res,model,key){

  util.getMessageLocale("/alerts/index",res,function(res,data){

      model.alert={"type":"success" ,"msg": data[key+"_"+model.status_code+"_msg"],"title": data[key+"_"+model.status_code+"_title"]};
      res.json(model);
    });


}

defaultResponse(null,null,{},"fileUpload");

*/
