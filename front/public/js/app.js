var app=function(){

  var path="http://d11or7sbz4vm1i.cloudfront.net";
  //var path="";
  var handlePortletTitle = function() {

    $(".portlet-title").click(function(){
       var box_block = $(this).nextAll('.portlet-body').first();
       var box_icon = $(this).find('a');

       if (box_block.css('display') == 'block')
        {
           box_block.css('display','none');
           box_icon.removeClass('collapse');
           box_icon.addClass('expand');

        }else
        {
           box_block.css('display','block');
           box_icon.removeClass('expand');
           box_icon.addClass('collapse');
        }
    });

  }

  var handleBootstrapTouchSpin = function() {

    $("#maxillaryMidlineDistance").TouchSpin({
      buttondown_class: 'btn green',
      buttonup_class: 'btn green',
      min: 0,
      max: 100,
      step: 0.5,
      decimals: 2,
      boostat: 5,
      maxboostedstep: 10,
      postfix: 'mm'
    });

    $("#mandibularMidlineDistance").TouchSpin({
      buttondown_class: 'btn green',
      buttonup_class: 'btn green',
      min: 0,
      max: 100,
      step: 0.5,
      decimals: 2,
      boostat: 5,
      maxboostedstep: 10,
      postfix: 'mm'
    });
  }

  var handleLogin= function(label_language) {

      $.backstretch([
        path+"/assets/admin/pages/media/bg/1.jpg",
        path+"/assets/admin/pages/media/bg/2.jpg",
        path+"/assets/admin/pages/media/bg/3.jpg",
        path+"/assets/admin/pages/media/bg/4.jpg",
        path+"/assets/admin/pages/media/bg/5.jpg"
        ], {
          fade: 1000,
          duration: 5000
        }
      );

      $("#select_language").select2({
        placeholder: '<i class="fa fa-map-marker"></i>&nbsp;'+label_language,
        allowClear: true,
        formatResult: format,
        formatSelection: format,
        escapeMarkup: function (m) {
          return m;
        }
      });


      $('#select_language').change(function () {
        $('.register-form').validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
      });

      function format(state) {
        if (!state.id) return state.text; // optgroup
          return "<img class='flag' src='/assets/global/img/flags/" + state.id + ".png'/>&nbsp;&nbsp;" + state.text;
        }

  }

  var handleDatePickers = function () {

    if (jQuery().datepicker) {
      $('.date-picker').datepicker({
        rtl: Metronic.isRTL(),
        orientation: "left",
        autoclose: true
      });
      //$('body').removeClass("modal-open"); // fix bug when inline picker is used in modal
    }

    /* Workaround to restrict daterange past date select: http://stackoverflow.com/questions/11933173/how-to-restrict-the-selectable-date-ranges-in-bootstrap-datepicker */
  }


  return {

      //main function to initiate the theme
      init: function() {

          handlePortletTitle(); // handles style customer tool
      },
      initTreatment: function() {

        handleBootstrapTouchSpin();
      },
      initLogin: function(label_language) {

        handleLogin(label_language);
      },
      initMedicalRecord: function() {

        handleDatePickers();
      }
  };

}();



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
