// Agency Theme JavaScript

(function($) {
  "use strict"; // Start of use strict

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 400, 'easeInOutExpo');
    event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function(){
    $('.navbar-toggle:visible').click();
  });

  // Offset for Main Navigation
  $('#mainNav').affix({
    offset: {
      top: 100
    }
  })

  // Disable scrolling zoom
  $('.map-container')
    .click(function(){
      $(this).find('iframe').addClass('clicked')
    })
    .mouseleave(function(){
      $(this).find('iframe').removeClass('clicked')
    });

  $('a.gallery-link').click(function(){
    var modal_body = $('#gallery-modal').find('.modal-body');
    modal_body.find('h2').text($(this).next().find('h4').text());
    modal_body.find('img').attr('src', $(this).find('img').attr('src'));
  });

})(jQuery); // End of use strict
