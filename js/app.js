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
  
  
  
  $('.js-off-canvas-container.is-active').click(function(e) {
    e.preventDefault();
    alert("Hello! I am an alert box BOTH!!");
    $('.js-off-canvas-toggle').removeClass('is-active');
    $('.js-off-canvas-container').removeClass('is-active');
  });
  
  $('.is-active').click(function(e) {
    e.preventDefault();
    alert("Hello! I am an alert box -- is active!!");
    $('.js-off-canvas-toggle').removeClass('is-active');
    $('.js-off-canvas-container').removeClass('is-active');
  });
  
  $('.js-off-canvas-container:after').click(function(e) {
    e.preventDefault();
    alert("Hello! I am an alert box -- :alert!!");
    $('.js-off-canvas-toggle').removeClass('is-active');
    $('.js-off-canvas-container').removeClass('is-active');
  });
  
  
  $(document).mouseup(function(e) {
    var container = $('.c-off-canvas-content');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        alert("Hello! I am an alert -- mouse");
    }
});

});
