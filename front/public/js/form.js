$("#login-button").click(function() {

    // Get some values from elements on the page:
    var $form = $("#login-form"),
          url = $form.attr( "action" );

    $.ajax({
           type: "POST",
           url: url,
           data: $form.serialize(),
           dataType: 'json',
           success: function(data)
           {
             if(data.status_code == 200)
               $(location).attr('href','/dashboard');
             else{
               alert_notification(data.alert.type,data.alert.msg,data.alert.title);
               $('#login-form').trigger("reset");
             }

           }
         });

    return false; // avoid to execute the actual submit of the form.
});
