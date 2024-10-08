!function(){"use strict";function e(a){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(a)}!function(a){if("undefined"==typeof wc_serial_numbers_vars)return!1;a(document).ready((function(){a(document).on("click",".wcsn-key",(function(){var e=a(this);if(!e.hasClass("copying")){var r=a("<input>");a("body").append(r),r.val(e.data("unmasked")).select(),document.execCommand("copy"),r.remove(),e.text(wc_serial_numbers_vars.i18n.copied).addClass("copying"),setTimeout((function(){e.text(e.data("masked")).removeClass("copying")}),1e3)}})).on("mouseenter mouseleave",".wcsn-key:not(.copying)",(function(e){var r=a(this);"mouseenter"===e.type?r.text(r.data("unmasked")):r.text(r.data("masked"))})).on("submit",".wcsn-api-form",(function(e){e.preventDefault();var r=a(this);a.ajax({url:wc_serial_numbers_vars.apiurl,method:"POST",data:r.serialize(),dataType:"json",beforeSend:function(){r.addClass("loading"),r.find(".wcsn-api-response").text("Loading...")},success:function(e){r.find(".wcsn-api-response").text(JSON.stringify(e,null,2))},error:function(e){r.find(".wcsn-api-response").text(JSON.stringify(e,null,2))},always:function(){r.removeClass("loading")}})})),a(".wcsn_search_product, .wc-serial-numbers-select-product").select2({ajax:{cache:!0,delay:500,url:wc_serial_numbers_vars.ajaxurl,method:"POST",dataType:"json",data:function(e){return{action:"wc_serial_numbers_search_product",nonce:wc_serial_numbers_vars.search_nonce,search:e.term,page:e.page||1}},processResults:function(e,a){return!1===e.success&&alert(e.data.message),a.page=a.page||1,{results:e.results,pagination:{more:e.pagination.more}}}},placeholder:wc_serial_numbers_vars.i18n.search_product,minimumInputLength:1,allowClear:!0}),a(".wcsn_search_order").select2({ajax:{cache:!0,delay:500,url:wc_serial_numbers_vars.ajaxurl,method:"POST",dataType:"json",data:function(e){return{action:"wc_serial_numbers_search_orders",nonce:wc_serial_numbers_vars.search_nonce,search:e.term,page:e.page}},processResults:function(e,a){return!1===e.success&&alert(e.data.message),a.page=a.page||1,{results:e.results,pagination:{more:e.pagination.more}}}},placeholder:wc_serial_numbers_vars.i18n.search_order,minimumInputLength:1,allowClear:!0}),a(".wcsn_search_customer").select2({ajax:{cache:!0,delay:500,url:wc_serial_numbers_vars.ajaxurl,method:"POST",dataType:"json",data:function(e){return{action:"wc_serial_numbers_search_customers",nonce:wc_serial_numbers_vars.search_nonce,search:e.term,page:e.page}},processResults:function(e,a){return!1===e.success&&alert(e.data.message),a.page=a.page||1,{results:e.results,pagination:{more:e.pagination.more}}}},placeholder:wc_serial_numbers_vars.i18n.search_customer,minimumInputLength:1,allowClear:!0}),void 0!==a.fn.datepicker&&a(".wc-serial-numbers-select-date").datepicker({changeMonth:!0,changeYear:!0,dateFormat:"yy-mm-dd",firstDay:7,minDate:new Date}),void 0!==e(a.fn.select2)&&a(":input.wcsn-select2").filter(":not(.enhanced)").each((function(){var e=a(this),r={allowClear:e.data("allow_clear")&&!e.prop("multiple")||!0,placeholder:e.data("placeholder")||e.attr("placeholder")||"",minimumInputLength:e.data("minimum_input_length")?e.data("minimum_input_length"):0,ajax:{url:wc_serial_numbers_vars.ajaxurl,dataType:"json",delay:250,method:"POST",data:function(a){return{term:a.term,action:e.data("action"),type:e.data("type"),_wpnonce:e.data("nonce")||wc_serial_numbers_vars.ajax_nonce,exclude:e.data("exclude"),include:e.data("include"),limit:e.data("limit"),page:a.page||1}},processResults:function(e){return e.page=e.page||1,e},cache:!0}};e.data("action")||delete r.ajax,e.select2(r).addClass("enhanced")})),a('#wcsn-add-key-form :input[name="status"]').on("change",(function(){var e=a(this),r=e.closest("form"),n=r.find(':input[name="customer_id"]'),t=r.find(':input[name="order_id"]');if(!a(this).is(":checked")||!a(this).val())return!1;"create_order"===e.val()?(n.prop("required",!0).closest("tr").show(),t.prop("required",!1).closest("tr").hide()):"existing_order"===e.val()?(n.prop("required",!1).closest("tr").hide(),t.prop("required",!0).closest("tr").show()):(n.prop("required",!1).closest("tr").hide(),t.prop("required",!1).closest("tr").hide())})).trigger("change")}))}(jQuery,window)}();