'use strict';


module.exports = function IndexModel(alert_type) {
    return {
             "alert":{"type":alert_type,"msg":"","title":""}
    };
};
