$("#orthodontic-facialDiagnosis-button").click(function() {

  // Get some values from elements on the page:
  var $form = $("#orthodontic-facialDiagnosis-form"),
  url = $form.attr( "action" );
  var msg=$("#orthodontic-facialDiagnosis-button").attr( "data-msg" );
  blockPortlet('#orthodontic-facialDiagnosis-portlet',msg);

  $.ajax({
    type: "POST",
    url: url,
    data: $form.serialize(),
    dataType: 'json',
    success: function(data)
    {
      alert_notification(data.alert.type,data.alert.msg,data.alert.title);
      Metronic.unblockUI('#orthodontic-facialDiagnosis-portlet');
    }
  });

  return false; // avoid to execute the actual submit of the form.
});

$("#orthodontic-temporomandibular-button").click(function() {

  // Get some values from elements on the page:
  var $form = $("#orthodontic-temporomandibular-form"),
  url = $form.attr( "action" );
  var msg=$("#orthodontic-temporomandibular-button").attr( "data-msg" );
  blockPortlet('#orthodontic-temporomandibular-portlet',msg);

  $.ajax({
    type: "POST",
    url: url,
    data: $form.serialize(),
    dataType: 'json',
    success: function(data)
    {
      alert_notification(data.alert.type,data.alert.msg,data.alert.title);
      Metronic.unblockUI('#orthodontic-temporomandibular-portlet');
    }
  });

  return false; // avoid to execute the actual submit of the form.
});

$("#orthodontic-diagnosis-button").click(function() {

  // Get some values from elements on the page:
  var $form = $("#orthodontic-diagnosis-form"),
  url = $form.attr( "action" );
  var msg=$("#orthodontic-diagnosis-button").attr( "data-msg" );
  blockPortlet('#orthodontic-diagnosis-portlet',msg);

  $.ajax({
    type: "POST",
    url: url,
    data: $form.serialize(),
    dataType: 'json',
    success: function(data)
    {
      alert_notification(data.alert.type,data.alert.msg,data.alert.title);
      Metronic.unblockUI('#orthodontic-diagnosis-portlet');
    }
  });

  return false; // avoid to execute the actual submit of the form.
});

$("#orthodontic-treatmentPlan-button").click(function() {

  // Get some values from elements on the page:
  var $form = $("#orthodontic-treatmentPlan-form"),
  url = $form.attr( "action" );
  var msg=$("#orthodontic-treatmentPlan-button").attr( "data-msg" );
  blockPortlet('#orthodontic-treatmentPlan-portlet',msg);

  $.ajax({
    type: "POST",
    url: url,
    data: $form.serialize(),
    dataType: 'json',
    success: function(data)
    {
      alert_notification(data.alert.type,data.alert.msg,data.alert.title);
      Metronic.unblockUI('#orthodontic-treatmentPlan-portlet');
    }
  });

  return false; // avoid to execute the actual submit of the form.
});


$("#orthodontic-occlusionDiagnosis-button").click(function() {

  // Get some values from elements on the page:
  var $form = $("#orthodontic-occlusionDiagnosis-form"),
  url = $form.attr( "action" );
  var msg=$("#orthodontic-occlusionDiagnosis-button").attr( "data-msg" );
  blockPortlet('#orthodontic-occlusionDiagnosis-portlet',msg);

  $.ajax({
    type: "POST",
    url: url,
    data: $form.serialize(),
    dataType: 'json',
    success: function(data)
    {
      alert_notification(data.alert.type,data.alert.msg,data.alert.title);
      Metronic.unblockUI('#orthodontic-occlusionDiagnosis-portlet');
    }
  });

  return false; // avoid to execute the actual submit of the form.
});

$("#orthodontic-treatmentTimeline-button").click(function() {

  // Get some values from elements on the page:
  var $form = $("#orthodontic-treatmentTimeline-form"),
  url = $form.attr( "action" );

  $.ajax({
    type: "POST",
    url: url,
    data: $form.serialize(),
    dataType: 'json',
    success: function(data)
    {

      if(data.status_code == 200){

        $("#orthodontic-treatmentTimeline-ul ul").prepend('<li class="timeline-'+data.event.type+'"><div class="timeline-time"><span class="date">'+data.event.date+' </span><span class="time">'+data.event.hour+' </span></div><div class="timeline-icon"><i class="fa fa-'+data.event.icon+'"></i></div><div class="timeline-body"><h2>'+data.event.title+'</h2><div class="timeline-content">'+data.event.description+'</div></div></li>');
        $('#orthodontic-treatmentTimeline').modal('toggle');
        $('#orthodontic-treatmentTimeline-form').trigger("reset");

          alert_notification(data.alert.type,data.alert.msg,data.alert.title);
        }else{
          alert_notification(data.alert.type,data.alert.msg,data.alert.title);
        }

      }
    });

    return false; // avoid to execute the actual submit of the form.
  });

  var orthodonticFiles=[];

  // Add events
  $('#orthodontic-fileUpload-form').find('input[type=file]').on('change', orthoPrepareUpload);

  // Grab the files and set them to our variable
  function orthoPrepareUpload(event)
  {

    orthodonticFiles = event.target.files;
  }

$("#orthodontic-fileUpload-button").click(function() {

  // Create a formdata object and add the files
  var data = new FormData();

  data.append("_csrf",$("input:hidden[name=_csrf]").val());
  data.append("identity",$('#orthodontic-fileUpload-form').find('input[name="identity"]').val());
  data.append("orthodonticsModalFileUploadName",$("#orthodonticsModalFileUploadName").val());
  $.each(orthodonticFiles, function(key, value)
  {
    data.append(key, value);
  });

  // Get some values from elements on the page:
  var $form = $("#orthodontic-fileUpload-form"),
  url = $form.attr( "action" );

  var msg=$("#orthodontic-facialDiagnosis-button").attr( "data-msg" );
  blockModal('#orthodontic-fileUpload-modal',msg);

  $.ajax({
    url: url,
    type: 'POST',
    data: data,
    cache: false,
    dataType: 'json',
    processData: false, // Don't process the files
    contentType: false, // Set content type to false as jQuery will tell the server its a query string request
    success: function(data)
    {
      if(data.status_code == 200){

        $('#orthodontic-fileUpload-modal-box').modal('toggle');
        Metronic.unblockUI('#orthodontic-fileUpload-modal');

          $('#orthodonticsModalFileUploadName').val('');
          $('#orthodontic-fileUpload').fileinput('clear');

          alert_notification(data.alert.type,data.alert.msg,data.alert.title);
        }else{
          alert_notification(data.alert.type,data.alert.msg,data.alert.title);
        }

      }
    });

    return false; // avoid to execute the actual submit of the form.
  });


  var orthodonticFileViewButton=function(id,url) {

    // Get some values from elements on the page:
    identity=$('#orthodontic-fileUpload-form').find('input[name="identity"]').val(),
    csrf=$("input:hidden[name=_csrf]").val();

    $.ajax({
      type: "POST",
      url: url,
      data: {"identity":identity,"file":{"_id":id},"_csrf":csrf},
      dataType: 'json',
      success: function(data)
      {
        if(data.status_code == 200)

          var win = window.open(data.data.url, '_system');
          win.focus();
      }
    });

    return false; // avoid to execute the actual submit of the form.
  };
