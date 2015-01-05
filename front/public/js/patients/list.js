var viewPatientMedicalRecord=function(id,csrf){

  var form=sendForm(id,csrf,"/patients/medicalRecord");
  $(form).submit();
}

var viewPatientTreatment=function(id,csrf){

  var form=sendForm(id,csrf,"/patients/treatment");
  $(form).submit();
}

var deletePatient=function(id,csrf){

  var form=sendForm(id,csrf,"/patients/medicalRecord/del");

  var $form = $(form);

  url = $form.attr( "action" );
  var msg=$("#patients-list-portlet").attr( "data-msg" );
  blockPortlet('#patients-list-portlet',msg);

  $.ajax({
    type: "POST",
    url: url,
    data: $form.serialize(),
    dataType: 'json',
    success: function(data)
    {
      alert_notification(data.alert.type,data.alert.msg,data.alert.title);
      Metronic.unblockUI('#patients-list-portlet');
      var table = $('#patientsTable').DataTable();
      table.row( $("#tr-"+id) ).remove().draw();
    }
  });

}

var sendForm=function(id,csrf,action){

  var form = $(document.createElement('form'));
  $(form).attr("action", action);
  $(form).attr("method", "POST");

  var identity = $("<input>").attr("type", "hidden").attr("name", "sa_identity").val(id);
  var csrf = $("<input>").attr("type", "hidden").attr("name", "_csrf").val(csrf);
  $(form).append($(identity));
  $(form).append($(csrf));
  return form;

}
