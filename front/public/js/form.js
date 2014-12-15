//###############################################//
//**************BEGING INDEX PAGE****************//
//###############################################//

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

$("#forgetPassword-button").click(function() {

  // Get some values from elements on the page:
  var $form = $("#forgetPassword-form"),
  url = $form.attr( "action" );

  $.ajax({
    type: "POST",
    url: url,
    data: $form.serialize(),
    dataType: 'json',
    success: function(data)
    {
      if(data.status_code == 200)
        $(location).attr('href','/success');
        else{
          alert_notification(data.alert.type,data.alert.msg,data.alert.title);
          $('#forgetPassword-form').trigger("reset");
        }

      }
    });

    return false; // avoid to execute the actual submit of the form.
  });

  $("#signup-button").click(function() {

    // Get some values from elements on the page:
    var $form = $("#signup-form"),
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
            $("input[type='password']").val('');
          }

        }
      });

      return false; // avoid to execute the actual submit of the form.
    });

//###############################################//
//****************END INDEX PAGE*****************//
//###############################################//

//###############################################//
//*********BEGING MEDICAL RECORD PAGE***********//
//###############################################//

$("#newPatient-button").click(function() {

  // Get some values from elements on the page:
  var $form = $("#newPatient-form"),
  url = $form.attr( "action" );

  $.ajax({
    type: "POST",
    url: url,
    data: $form.serialize(),
    dataType: 'json',
    success: function(data)
    {

      if(data.status_code == 200){
        $('#new_patient').modal('toggle');

        setTimeout(
          function(){
                      $("#sa_identity").val($("#modalIdentity").val());
                      $("#findIdentity-form" ).submit();
                    }, 1000);

        $('#newPatient-form').trigger("reset");
        alert_notification(data.alert.type,data.alert.msg,data.alert.title);
      }else{
        alert_notification(data.alert.type,data.alert.msg,data.alert.title);
        }

      }
    });

    return false; // avoid to execute the actual submit of the form.
  });


//###############################################//
//************END MEDICAL RECORD PAGE************//
//###############################################//




//###############################################//
//*********BEGING MEDICAL RECORD PAGE***********//
//###############################################//

//###############################################//
//************END MEDICAL RECORD PAGE************//
//###############################################//


    $("#setLanguage").click(function() {

      var url = $(this).attr( "data-content" );

      // Get some values from elements on the page:
      $.ajax({
        type: "GET",
        url: url,
        success: function(data)
        {
          location.reload();

          }
        });

        return false; // avoid to execute the actual submit of the form.
      });
