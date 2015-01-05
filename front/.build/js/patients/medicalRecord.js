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
    //uploadFiles();
    $.ajax({
      type: "POST",
      url: url,
      data: $form.serialize(),
      dataType: 'json',
      success: function(data)
      {
        var notification=function(){

          alert_notification(data.alert.type,data.alert.msg,data.alert.title);
          Metronic.unblockUI('#generalInfo-personalInfo-portlet');
          $("#patient_name h1").text($("#names").val()+" "+$("#lastName").val());
        }

        if(files.length == 0){
          notification();
        }else{

          uploadFiles(notification);
        }
    }
      });

      return false; // avoid to execute the actual submit of the form.
    });
    var files=[];

    // Add events
    $('input[type=file]').on('change', prepareUpload);

    // Grab the files and set them to our variable
    function prepareUpload(event)
    {
      
      files = event.target.files;
    }

var uploadFiles=function(notification){

  // Create a formdata object and add the files
  var data = new FormData();

  data.append("_csrf",$("input:hidden[name=_csrf]").val());
  data.append("identity",$('#generalInfo-personalInfo-form').find('input[name="identity"]').val());

  $.each(files, function(key, value)
  {
    data.append(key, value);
  });

  $.ajax({
    url: '/patients/medicalRecord/generalInfo/personalInfo/portrait/upload',
    type: 'POST',
    data: data,
    cache: false,
    dataType: 'json',
    processData: false, // Don't process the files
    contentType: false, // Set content type to false as jQuery will tell the server its a query string request
    success: function(data, textStatus, jqXHR)
    {
      if(typeof data.error === 'undefined')
        {
          // Success so call function to process the form
          //submitForm(event, data);
          $('img',$("#patient_portrait" )).attr('src',data.personal_info.image);
          notification();
          console.log("success");
        }
        else
          {
            // Handle errors here
            console.log('ERRORS: ' + data.error);
          }
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
          // Handle errors here
          console.log('ERRORS: ' + textStatus);
          // STOP LOADING SPINNER
        }
      });


}

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
