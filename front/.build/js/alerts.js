var alert_notification=function(type,msg,title){

  switch(type)
  {
     case "success":
          toast_top_right();
          toastr.success(msg, title);
     break;

     case "error":
       toast_top_right();
       toastr.error(msg, title);
       break;

     case "warning":
       toast_top_right();
       toastr.warning(msg, title);
       break;

     case "loginError":
          toast_top_right();
          toastr.error(msg, title);
     break;

     case "forgetPasswordError":
           toast_top_right();
           toastr.error(msg, title);
     break;

     case "signupError":
           toast_top_right();
           toastr.error(msg, title);
     break;

    }

}

var toast_top_right=function(){

  toastr.options = {
    "closeButton": true,
    "debug": false,
    "positionClass": "toast-top-right",
    "onclick": null,
    "showDuration": 1000,
    "hideDuration": 1000,
    "timeOut": 4000,
    "extendedTimeOut": 1000,
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  };

}
