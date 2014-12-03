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
      buttondown_class: 'btn red-flamingo',
      buttonup_class: 'btn red-flamingo',
      min: 0,
      max: 100,
      step: 0.5,
      decimals: 2,
      boostat: 5,
      maxboostedstep: 10,
      postfix: 'mm'
    });

    $("#mandibularMidlineDistance").TouchSpin({
      buttondown_class: 'btn red-flamingo',
      buttonup_class: 'btn red-flamingo',
      min: 0,
      max: 100,
      step: 0.5,
      decimals: 2,
      boostat: 5,
      maxboostedstep: 10,
      postfix: 'mm'
    });
  }

  var handleLogin= function() {

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
      initLogin: function() {

        handleLogin();
      },
      initMedicalRecord: function() {

        handleDatePickers();
      }
  };

}();
