
jQuery(document).ready(function($) {

   /*
   $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if(scroll >= 70) {
        $(".header").addClass("header-scroll");
    } else {
        $(".header").removeClass("header-scroll");
    }

    });

   */

   $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
  }); 
				
	jQuery('.btn-more').click(function (event) {
    $(this).addClass('inactive');
    $(this).parents('.main-section').addClass('active');
    $(this).parents('.main-section').find('.hide-content').addClass('active');
    $('.btn-arrow-down').hide();
      event.preventDefault();
  });

  jQuery('.btn-close-content').click(function (event) {
    $(this).parents('.main-section').removeClass('active');
    $(this).parents('.main-section').find('.hide-content').removeClass('active');
    $('.btn-more').removeClass('inactive');
    $('.btn-arrow-down').show();
      event.preventDefault();
  });

  jQuery('.btn-arrow-down').click(function (event) {
    $('#update').fadeOut(500);
    $('#update').fadeIn(500);
    setTimeout(fadeO, 6000);
  });

  
});