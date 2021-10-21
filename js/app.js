$(document).ready(function() {

  'use strict';

  // =================
  // Responsive videos
  // =================

  $('.o-wrapper').fitVids({
    'customSelector': ['iframe[src*="ted.com"]']
  });

  // =================
  // Off Canvas menu
  // =================

  $('.js-off-canvas-toggle').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.js-off-canvas-toggle').toggleClass('is-active');
    $('.js-off-canvas-container').toggleClass('is-active');
  });
  

$('.js-off-canvas-toggle').click(function(e){
    e.stopPropagation();
});
  $('.js-off-canvas-container').click(function(e){
    e.stopPropagation();
});

$('body,html').click(function(e){
  $('.js-off-canvas-toggle').removeClass('is-active');
    $('.js-off-canvas-container').removeClass('is-active');
});
  

});
