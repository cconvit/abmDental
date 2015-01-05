$("#viewMedicalRecord").click(function() {

  var identity=$("#viewMedicalRecord").attr('data_identity');
  var csrf=$("#viewMedicalRecord").attr('data_csrf');
  var action=$("#viewMedicalRecord").attr('data_action');

  sendForm(identity,csrf,action);

  return false; // avoid to execute the actual submit of the form.
});

var sendForm=function(id,csrf,action){

  var form = $(document.createElement('form'));
  $(form).attr("action", action);
  $(form).attr("method", "POST");

  var identity = $("<input>").attr("type", "hidden").attr("name", "sa_identity").val(id);
  var csrf = $("<input>").attr("type", "hidden").attr("name", "_csrf").val(csrf);
  $(form).append($(identity));
  $(form).append($(csrf));
  $(form).submit();

}
