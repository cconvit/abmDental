//###############################################//
//**************BEGING INDEX PAGE****************//
//###############################################//
var sendLogin=function(){

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

}

$("#login-button").click(function() {

    sendLogin();
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
                      $('#newPatient-form').trigger("reset");
                      $("#findIdentity-form" ).submit();
                    }, 1000);


        alert_notification(data.alert.type,data.alert.msg,data.alert.title);
      }else{
        alert_notification(data.alert.type,data.alert.msg,data.alert.title);
        }

      }
    });

    return false; // avoid to execute the actual submit of the form.
  });



  $("#generalInfo-personalInfo-button").click(function() {

    // Get some values from elements on the page:
    var $form = $("#generalInfo-personalInfo-form"),
    url = $form.attr( "action" );
    var msg=$("#generalInfo-personalInfo-button").attr( "data-msg" );
    blockPortlet('#generalInfo-personalInfo-portlet',msg);


    $.ajax({
      type: "POST",
      url: url,
      data: $form.serialize(),
      dataType: 'json',
      success: function(data)
      {
        alert_notification(data.alert.type,data.alert.msg,data.alert.title);
        Metronic.unblockUI('#generalInfo-personalInfo-portlet');
        $("#patient_name h1").text($("#names").val()+" "+$("#lastName").val());
    }
      });

      return false; // avoid to execute the actual submit of the form.
    });

$("#generalInfo-emergencyConatct-button").click(function() {

  // Get some values from elements on the page:
  var $form = $("#generalInfo-emergencyConatct-form"),
  url = $form.attr( "action" );
  var msg=$("#generalInfo-emergencyConatct-button").attr( "data-msg" );
  blockPortlet('#generalInfo-emergencyConatct-portlet',msg);

  $.ajax({
    type: "POST",
    url: url,
    data: $form.serialize(),
    dataType: 'json',
    success: function(data)
    {
      alert_notification(data.alert.type,data.alert.msg,data.alert.title);
      Metronic.unblockUI('#generalInfo-emergencyConatct-portlet');
    }
  });

  return false; // avoid to execute the actual submit of the form.
});

$("#anamnesis-chiefComplaint-button").click(function() {

  // Get some values from elements on the page:
  var $form = $("#anamnesis-chiefComplaint-form"),
  url = $form.attr( "action" );
  var msg=$("#anamnesis-chiefComplaint-button").attr( "data-msg" );
  blockPortlet('#anamnesis-chiefComplaint-portlet',msg);

  $.ajax({
    type: "POST",
    url: url,
    data: $form.serialize(),
    dataType: 'json',
    success: function(data)
    {
      alert_notification(data.alert.type,data.alert.msg,data.alert.title);
      Metronic.unblockUI('#anamnesis-chiefComplaint-portlet');
    }
  });

  return false; // avoid to execute the actual submit of the form.
});

$("#anamnesis-familyHistory-button").click(function() {

  // Get some values from elements on the page:
  var $form = $("#anamnesis-familyHistory-form"),
  url = $form.attr( "action" );
  var msg=$("#anamnesis-familyHistory-button").attr( "data-msg" );
  blockPortlet('#anamnesis-familyHistory-portlet',msg);

  $.ajax({
    type: "POST",
    url: url,
    data: $form.serialize(),
    dataType: 'json',
    success: function(data)
    {
      alert_notification(data.alert.type,data.alert.msg,data.alert.title);
      Metronic.unblockUI('#anamnesis-familyHistory-portlet');
    }
  });

  return false; // avoid to execute the actual submit of the form.
});

$("#anamnesis-medicalHistory-button").click(function() {

  // Get some values from elements on the page:
  var $form = $("#anamnesis-medicalHistory-form"),
  url = $form.attr( "action" );
  var msg=$("#anamnesis-medicalHistory-button").attr( "data-msg" );
  blockPortlet('#anamnesis-medicalHistory-portlet',msg);

  $.ajax({
    type: "POST",
    url: url,
    data: $form.serialize(),
    dataType: 'json',
    success: function(data)
    {
      alert_notification(data.alert.type,data.alert.msg,data.alert.title);
      Metronic.unblockUI('#anamnesis-medicalHistory-portlet');
    }
  });

  return false; // avoid to execute the actual submit of the form.
});

$("#anamnesis-dentalHistory-button").click(function() {

  // Get some values from elements on the page:
  var $form = $("#anamnesis-dentalHistory-form"),
  url = $form.attr( "action" );
  var msg=$("#anamnesis-dentalHistory-button").attr( "data-msg" );
  blockPortlet('#anamnesis-dentalHistory-portlet',msg);

  $.ajax({
    type: "POST",
    url: url,
    data: $form.serialize(),
    dataType: 'json',
    success: function(data)
    {
      alert_notification(data.alert.type,data.alert.msg,data.alert.title);
      Metronic.unblockUI('#anamnesis-dentalHistory-portlet');
    }
  });

  return false; // avoid to execute the actual submit of the form.
});

$("#anamnesis-riskFactors-button").click(function() {

  // Get some values from elements on the page:
  var $form = $("#anamnesis-riskFactors-form"),
  url = $form.attr( "action" );
  var msg=$("#anamnesis-riskFactors-button").attr( "data-msg" );
  blockPortlet('#anamnesis-riskFactors-portlet',msg);

  $.ajax({
    type: "POST",
    url: url,
    data: $form.serialize(),
    dataType: 'json',
    success: function(data)
    {
      alert_notification(data.alert.type,data.alert.msg,data.alert.title);
      Metronic.unblockUI('#anamnesis-riskFactors-portlet');
    }
  });

  return false; // avoid to execute the actual submit of the form.
});

$("#anamnesis-currentMedication-button").click(function() {

  // Get some values from elements on the page:
  var $form = $("#anamnesis-currentMedication-form"),
  url = $form.attr( "action" );
  var msg=$("#anamnesis-currentMedication-button").attr( "data-msg" );
  blockPortlet('#anamnesis-currentMedication-portlet',msg);

  $.ajax({
    type: "POST",
    url: url,
    data: $form.serialize(),
    dataType: 'json',
    success: function(data)
    {
      alert_notification(data.alert.type,data.alert.msg,data.alert.title);
      Metronic.unblockUI('#anamnesis-currentMedication-portlet');
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

var blockPortlet=function(id,msg){

  Metronic.blockUI({
    target: id,
    boxed: true,
    message: msg,
    cenrerY: true,
    cenrerX: true,
    animate: true
  });


}
