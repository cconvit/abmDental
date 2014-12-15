'use strict';

var order_language=function(lg){

  var language={};

  switch(lg){

    case "es_ES":
      language.first={"name":"ES","locale":lg};
      language.second={"name":"EN","locale":"us_US"};
      break;
      case "us_US":
        language.first={"name":"EN","locale":lg};
        language.second={"name":"ES","locale":"es_ES"};
        break;

      }
   return language;
}

exports.order_language = order_language;


var getMessageLocale=function(path,res,next){

  var i18n = res.app.kraken.get('i18n');
  var locals = res.locals;
  var locality = locals && locals.context && locals.context.locality || i18n.fallback;
  var bundle;
  var bundalo = require('bundalo');

  bundle = bundalo({'contentPath': i18n.contentPath, 'fallback': locality, 'engine': "none"});

  bundle.get({'bundle': '/alerts/index', 'model': {}, 'locality': locality}, function (err, data) {

        next(res,data);

    });

}

exports.getMessageLocale = getMessageLocale;
