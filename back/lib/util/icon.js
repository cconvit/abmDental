'use strict';



//Send an standar JSON response message
var orthodonticTimeline = function(type) {

  switch(type){
    case "emergency":
            return "ambulance";

    case "retention":
            return "check-square-o";

    case "retirement":
      return "thumbs-o-up";

    case "control":
      return "history";

    case "assembly":
      return "cogs";

    case "diagnosis timeline-noline":
      return "pencil";

    case "diagnosis":
      return "pencil";
  }
}

exports.orthodonticTimeline = orthodonticTimeline;
