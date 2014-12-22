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
