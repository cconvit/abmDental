var alert_notification=function(type,msg,title){

  switch(type)
  {
    case "loginError":
                toastr.options = {
                  "closeButton": false,
                  "debug": false,
                  "positionClass": "toast-top-full-width",
                  "onclick": null,
                  "showDuration": 1000,
                  "hideDuration": 1000,
                  "timeOut": 2000,
                  "extendedTimeOut": 1000,
                  "showEasing": "swing",
                  "hideEasing": "linear",
                  "showMethod": "fadeIn",
                  "hideMethod": "fadeOut"
                };
                toastr.error(msg, title);
    }


}
