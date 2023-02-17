(function ($) {
  $(function () {

    /* example checked */
    /* jQuery*/
    $('#type-radio-1-3').prop('checked', true);
    $('#type-radio-2-4').prop('checked', true);

    $('#type-check-1-2').prop('checked', true);
    $('#type-check-1-4').prop('checked', true);
    $('#type-check-1-5').prop('checked', true);

    $('#type-radio-2-2').prop('checked', true);

    $('#type-check-2-3').prop('checked', true);
    /* /jQuery*/

    /* js */
    document.getElementById('type-check-2-5').checked = true;
    /* js */
    /* example checked */



    /* filter */
    $('.js-filter_btn').on('click', function () {
      $('.js-babe-page').addClass('js-babe-page_filter_open');
      $('.js-filter').addClass('js-ag-filter_open');
      $('html, body').addClass('js-ag-body-noscroll');
    });

    $('.js-filter_btn-close').on('click', function () {
      $('.js-babe-page').removeClass('js-babe-page_filter_open');
      $('.js-filter').removeClass('js-ag-filter_open');
      $('html, body').removeClass('js-ag-body-noscroll');
    });

    $(document).bind('keyup', function (e) {
      if (e.keyCode != 27) {
        return true;
      }
      /* 'Esc' key (27) */
      if (e.keyCode == 27 && $('.js-filter').is(':visible')) {
        $('.js-babe-page').removeClass('js-babe-page_filter_open');
        $('.js-filter').removeClass('js-ag-filter_open');
        $('html, body').removeClass('js-ag-body-noscroll');
      }
    });

    $(document).mouseup(function (e) {
      if ((!$('.js-filter').is(e.target) && $('.js-filter').has(e.target).length === 0)) {
        $('.js-babe-page').removeClass('js-babe-page_filter_open');
        $('.js-filter').removeClass('js-ag-filter_open');
        $('html, body').removeClass('js-ag-body-noscroll');
      }
    });
    /* /filter */

    /* nav */
    $('.js-ag-nav_bars').on('click', function () {
      $('.js-babe-page').addClass('js-babe-page_nav__open');
      $('.js-nav').addClass('js-ag-nav_open');
      $('html, body').addClass('js-ag-body-noscroll');
    });

    $('.js-nav_btn-close').on('click', function () {
      $('.js-babe-page').removeClass('js-babe-page_nav__open');
      $('.js-nav').removeClass('js-ag-nav_open');
      $('html, body').removeClass('js-ag-body-noscroll');
    });

    $(document).bind('keyup', function (e) {
      if (e.keyCode != 27) {
        return true;
      }
      /* 'Esc' key (27) */
      if (e.keyCode == 27 && $('.js-nav').is(':visible')) {
        $('.js-babe-page').removeClass('js-babe-page_nav__open');
        $('.js-nav').removeClass('js-ag-nav_open');
        $('html, body').removeClass('js-ag-body-noscroll');
      }
    });

    $(document).mouseup(function (e) {
      if ((!$('.js-nav').is(e.target) && $('.js-nav').has(e.target).length === 0)) {
        $('.js-babe-page').removeClass('js-babe-page_nav__open');
        $('.js-nav').removeClass('js-ag-nav_open');
        $('html, body').removeClass('js-ag-body-noscroll');
      }
    });
    /* /nav */

    /* tag search */
    /*
    $('.js-ag-tag-search_expand').on('click', function () {
      $('.js-ag-tag-search_more').fadeToggle();
    });


    $('.js-ag-tag-search_btn-close').on('click', function () {
      var agTag = $('.js-ag-tag-search_more').children('.js-ag-tag-search_item');
      console.log(agTag.length - 1);

      if((agTag.length - 1) == 0) {
        $('.js-ag-tag-search_more').remove();
        $('.js-ag-tag-search_item__more').remove();
      }

      $(this).parent('.js-ag-tag-search_item').remove();
    });
    */
    /* /tag search */


    /* tag search */
    $('.js-ag-tag-search_expand').on('click', function () {
      $('.js-ag-tag-search_more').fadeToggle();
    });


    $('.js-ag-tag-search_btn-close').on('click', function () {
      var agTag = $('.js-ag-tag-search_more').children('.js-ag-tag-search_item');
      console.log(agTag.length - 1);

      if((agTag.length - 1) == 0) {
        $('.js-ag-tag-search_more').remove();
        $('.js-ag-tag-search_item__more').remove();
      }

      $(this).parent('.js-ag-tag-search_item').remove();
    });


    function agWidthTags() {
      var agWidthTags = $('.js-tag-search_list').children('.js-ag-tag-search_item').eq(0).outerWidth();

      $('.js-tag-search_list').children('.js-ag-tag-search_item').each(function () {
        var $this = $(this),
          agWidthTag = $this.outerWidth();

        agWidthTags += agWidthTag;

        if(agWidthTags > $('.js-tag-search_list').width()) {
          $this.addClass('js-ag-tag-search_item__collapsed');
        }
      });

      $('.js-ag-tag-search_item__collapsed').wrapAll( "<div class='js-ag-tag-search_more'></div>");
    }

    agWidthTags();
    /* /tag search */

    /* grid */
    var agBtn = $('.js-grid-btn_box').children('li');

    agBtn.on('click', function () {
      agBtn.removeClass('js-ag-grid-btn_item__active');
      $(this).addClass('js-ag-grid-btn_item__active');

      $('.js-ag-grid_list').removeClass('js-ag-grid_list__large').removeClass('js-ag-grid_list__medium').removeClass('js-ag-grid_list__small');
      $('.js-ag-grid_list').addClass('js-ag-grid_list__' + $(this).attr('id'));
    });
    /* /grid */

    /* description */
    $('.js-ag-footer-middle_title').on('click', function () {
      $('.js-ag-footer-middle_descr').fadeToggle();
      $(this).toggleClass('js-ag-footer-middle_title__active');
    });
    /* /description */

    /* menu */
    agToggleMenu('.js-profile_');

    agToggleMenu('.js-lang_');


    function agESC(argItem) {
      $(document).bind('keyup', function (e) {
        if (e.keyCode != 27) {
          return true;
        }
        /* 'Esc' key (27) */
        if (e.keyCode == 27 && $(argItem).is(':visible')) {
          $(argItem).fadeOut();
        }
      });
    }

    function agOutside(argItem) {
      $(document).mouseup(function (e) {
        if ((!$(argItem).is(e.target) && $(argItem).has(e.target).length === 0)) {
          $(argItem).fadeOut();
        }
      });
    }

    function agToggleMenu(argItem) {
      var agDisplayWidth = $(window).width();

      $(argItem + 'current').on('click', function () {
        if($(argItem + 'list').css('display') == 'block') {
          if (agDisplayWidth > '980') {
            $(argItem + 'list').fadeOut();
          }else{
            $(argItem + 'list').slideUp();
          }
        }else{
          if (agDisplayWidth > '980') {
            $(argItem + 'list').fadeIn();
          }else{
            $(argItem + 'list').slideDown();
          }
        }
      });

      if (agDisplayWidth > '980') {
        agOutside(argItem + 'list');
      }

      agESC(argItem + 'list');

    }
    /* /menu */

    /* slider range */
    $('.js-slider-range').each(function() {
      var minValue = Number($(this).attr('data-min')),
        maxValue = Number($(this).attr('data-max')),
        value = Number($(this).attr('data-value')),
        step = Number($(this).attr('data-step')),
        $this = $(this);

      $this.slider({
        range: true,
        value: value,
        min: minValue,
        max: maxValue,
        step: step,
        values: [minValue, maxValue],
        slide: function(event, ui) {
          var selectedMin = ui.values[0],
            selectedMax = ui.values[1],
            currentValueMin = selectedMin,
            currentValueMax = selectedMax;

          if(currentValueMax > 59) {
            currentValueMax = ">" + currentValueMax;
          }

          $this.find('.js-min-value').html(currentValueMin).attr('data-selected-value', selectedMin);
          $this.find('.js-max-value').html(currentValueMax).attr('data-selected-value', selectedMax);
        }

      });

      var currentValueMin = minValue,
        currentValueMax = maxValue;

      if(currentValueMax > 59) {
        currentValueMax = ">" + currentValueMax;
      }

      $this.find('span[tabindex]:first-of-type').append('<span class="js-ag-range_num js-min-value" data-selected-value></span>').find('.js-ag-range_num').html(currentValueMin).attr('data-selected-value', minValue);
      $this.find('span[tabindex]:last-of-type').append('<span class="js-ag-range_num js-max-value" data-selected-value></span>').find('.js-ag-range_num').html(currentValueMax).attr('data-selected-value', maxValue);
    });
    /* /slider range */

    /* faq */
    var agFAQtitle = $('.js-faq_title-item');

    agFAQtitle.on('click', function () {
      var faqCatText = $(this).parent('.js-faq_item').children('.js-faq_info');

      if (faqCatText.css('display') == 'none') {
        faqCatText.slideDown();

        $(this).addClass('js-ag-faq_title-item__open');
      }else{
        faqCatText.slideUp();

        $(this).removeClass('js-ag-faq_title-item__open');
      }
    });
    /* /faq */

    /* popup */
    /* registration */
    $('.js-popup_btn').on('click', function (e) {
      e.preventDefault();

      $('#js-popup-form_recovery').fadeOut();
      $('#js-popup-form_reg').fadeIn();

      if ($('#js-popup-form').css('display') == 'none') {
        $('#js-popup-form').addClass('js-ag-popup_overlay__open');
        $('html, body').addClass('js-ag-body-noscroll');
      }
    });

    $('#js-popup-form_btn-close').on('click', function () {
      agPopupClose();
    });

    function agPopupClose() {
      if ($('#js-popup-form').css('display') == 'block') {
        $('#js-popup-form').removeClass('js-ag-popup_overlay__open');
        $('html, body').removeClass('js-ag-body-noscroll');
      }
    }

    $(document).bind('keyup', function (e) {
      if (e.keyCode != 27) {
        return true;
      }
      /* 'Esc' key (27) */
      if (e.keyCode == 27 && $('#js-popup-form').is(':visible')) {
        agPopupClose();
      }
    });

    $(document).mouseup(function (e) {
      if ((!$('#js-popup-form').is(e.target) && $('#js-popup-form').has(e.target).length === 0)) {
        agPopupClose();
      }
    });

    $('.js-ag-popup-form_forgot').on('click', function () {
      $('#js-popup-form_recovery').fadeIn();
      $('#js-popup-form_reg').fadeOut();
    });
    /* /registration */

    /* password recovery */
    $('#js-popup-form_btn-close__pass').on('click', function () {
      agPopupClose();
    });
    /* /password recovery */
    /* /popup */

  });
})(jQuery);