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
    e.preventDefault();
    alert("Hello! I am an alert box!!");
    $('.js-off-canvas-toggle').toggleClass('is-active');
    $('.js-off-canvas-container').toggleClass('is-active');
  });

});

