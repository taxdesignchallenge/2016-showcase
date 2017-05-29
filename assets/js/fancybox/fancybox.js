jQuery(document).ready(function() {
  $("[data-fancybox]").fancybox({
    helpers: {
        title: {
            type: 'inside'
        }
    },
    afterLoad: function (instance, slide) {
       slide.$slide.find('img').attr("title", slide.opts.$orig.data('title'));
    },
    margin : [110, 0],
    baseTpl : '<div class="fancybox-container" role="dialog" tabindex="-1">' +
                '<div class="fancybox-bg"></div>' +
                '<div class="fancybox-caption-wrap" style="top:0;padding-top:15px;background:none;">' +
                  '<div class="fancybox-caption" style="border:0;"></div>' +
                '</div><button class="fancybox-button fancybox-button--left" data-fancybox-previous="" style="top:45%;left:0 !important;z-index:9999999;" title="Previous"></button>' +
                '<div class="fancybox-controls" style="bottom:0;top:auto;">' +
                  '<div class="fancybox-infobar" style="width:100%;">' +
                    '<div class="fancybox-infobar__body" style="background:transparent;">' +
                      '<span class="js-fancybox-index"></span>&nbsp;/&nbsp;<span class="js-fancybox-count"></span>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
                '<div class="fancybox-controls">' +
                  '<div class="fancybox-buttons">' +
                    '<button class="fancybox-button fancybox-button--close" data-fancybox-close="" title="Close (Esc)"></button>' +
                  '</div>' +
                '</div>' +
                '<div class="fancybox-slider-wrap">' +
                  '<div class="fancybox-slider"></div>' +
                '</div><button class="fancybox-button fancybox-button--right" data-fancybox-next="" style="top:45%;right:0 !important;z-index:9999999;position:fixed;" title="Next"></button>' +
              '</div>',
    onComplete: function (instance, slide) {
       $(".fancybox-image").attr("alt", slide.opts.$orig.data('alt'));
       $(".fancybox-slide--complete > div > .fancybox-image").attr("tabindex","8");
    }
  });
  $(".fancybox-winners").fancybox({
    helpers: {
        title: {
            type: 'inside'
        }
    },
    afterLoad: function (instance, slide) {
       slide.$slide.find('img').attr("title", slide.opts.$orig.data('title'));
    },
    margin : [110, 0],
    baseTpl : '<div class="fancybox-container" role="dialog" tabindex="-1">' +
                '<div class="fancybox-bg"></div>' +
                '<div class="fancybox-caption-wrap" style="top:0;padding-top:15px;background:none;">' +
                  '<div class="fancybox-caption" style="border:0;"></div>' +
                '</div><button class="fancybox-button fancybox-button--left" data-fancybox-previous="" style="top:45%;left:0 !important;z-index:9999999;" title="Previous"></button>' +
                '<div class="fancybox-controls" style="bottom:0;top:auto;">' +
                  '<div class="fancybox-infobar" style="width:100%;">' +
                    '<div class="fancybox-infobar__body" style="background:transparent;">' +
                      '<span class="js-fancybox-index"></span>&nbsp;/&nbsp;<span class="js-fancybox-count"></span>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
                '<div class="fancybox-controls">' +
                  '<div class="fancybox-buttons">' +
                    '<button class="fancybox-button fancybox-button--close" data-fancybox-close="" title="Close (Esc)"></button>' +
                  '</div>' +
                '</div>' +
                '<div class="fancybox-slider-wrap">' +
                  '<div class="fancybox-slider"></div>' +
                '</div><button class="fancybox-button fancybox-button--right" data-fancybox-next="" style="top:45%;right:0 !important;z-index:9999999;position:fixed;" title="Next"></button>' +
              '</div>',
    onComplete: function (instance, slide) {
       $(".fancybox-image").attr("alt", slide.opts.$orig.data('alt'));
       $(".fancybox-slide--complete > div > .fancybox-image").attr("tabindex","8");
    }
  });
  $(".fancybox-submissions").fancybox({
    helpers: {
        title: {
            type: 'inside'
        }
    },
    afterLoad: function (instance, slide) {
       slide.$slide.find('img').attr("title", slide.opts.$orig.data('title'));
    },
    margin : [110, 0],
    baseTpl : '<div class="fancybox-container" role="dialog" tabindex="-1">' +
                '<div class="fancybox-bg"></div>' +
                '<div class="fancybox-caption-wrap" style="top:0;padding-top:15px;background:none;">' +
                  '<div class="fancybox-caption" style="border:0;"></div>' +
                '</div><button class="fancybox-button fancybox-button--left" data-fancybox-previous="" style="top:45%;left:0 !important;z-index:9999999;" title="Previous"></button>' +
                '<div class="fancybox-controls" style="bottom:0;top:auto;">' +
                  '<div class="fancybox-infobar" style="width:100%;">' +
                    '<div class="fancybox-infobar__body" style="background:transparent;">' +
                      '<span class="js-fancybox-index"></span>&nbsp;/&nbsp;<span class="js-fancybox-count"></span>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
                '<div class="fancybox-controls">' +
                  '<div class="fancybox-buttons">' +
                    '<button class="fancybox-button fancybox-button--close" data-fancybox-close="" title="Close (Esc)"></button>' +
                  '</div>' +
                '</div>' +
                '<div class="fancybox-slider-wrap">' +
                  '<div class="fancybox-slider"></div>' +
                '</div><button class="fancybox-button fancybox-button--right" data-fancybox-next="" style="top:45%;right:0 !important;z-index:9999999;position:fixed;" title="Next"></button>' +
              '</div>',
    onComplete: function (instance, slide) {
       $(".fancybox-image").attr("alt", slide.opts.$orig.data('alt'));
       $(".fancybox-slide--complete > div > .fancybox-image").attr("tabindex","8");
    }
  });
});