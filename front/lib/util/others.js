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
