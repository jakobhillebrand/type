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
    $('.js-off-canvas-toggle').toggleClass('is-active');
    $('.js-off-canvas-container').toggleClass('is-active');
  });
  
  $('.js-off-canvas-container::after').click(function(e) {
    alert("Hello! I am an alert box ::after!!");
    $('.js-off-canvas-toggle').removeClass('is-active');
    $('.js-off-canvas-container').removeClass('is-active');
  });
  
  $('.js-off-canvas-container').click(function(e) {
    alert("Hello! I am an alert!!");
    $('.js-off-canvas-toggle').removeClass('is-active');
    $('.js-off-canvas-container').removeClass('is-active');
  });

});
