!function(a){"use strict";a(document).ready((function(){a(document).on("submit",".wcsn-api-form",(function(e){e.preventDefault();var t=a(this),n=t.find('input[type="submit"]');if(t.hasClass("loading"))return!1;a.ajax({url:wc_serial_numbers_frontend_vars.ajax_url,method:"POST",data:t.serialize(),dataType:"json",beforeSend:function(){t.addClass("loading"),n.attr("data-label",n.val()).attr("disabled","disabled").val(wc_serial_numbers_frontend_vars.i18n.loading)},complete:function(a){var e=a.responseJSON;e&&e.message&&window.alert(e.message),n.removeAttr("disabled").val(n.attr("data-label")),t.removeClass("loading")}})}))}))}(jQuery);