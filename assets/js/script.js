(function($) {
  $(function() {
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });

    $('.tags-clouds a').click(function() {
      $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
      }, "fast");
      return false;
    });

    $(".top").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "fast");
      return false;
    });

    var Mwidth = 960;
    if ($(window).width() > Mwidth) {
      var headerHeight = $('.navigation').height();
      $(window).on('scroll', {
          TopPrev: 0
        },
        function() {
          var TopCurrent = $(window).scrollTop();
          if (TopCurrent < this.TopPrev) {
            if (TopCurrent > 0 && $('.navigation').hasClass('fixed-menu')) {
              $('.navigation').addClass('visible-scroll-up');
            } else {
              $('.navigation').removeClass('visible-scroll-up fixed-menu');
            }
          } else {
            $('.navigation').removeClass('visible-scroll-up');
            if (TopCurrent > headerHeight && !$('.navigation').hasClass('fixed-menu')) $('.navigation').addClass('fixed-menu');
          }
          this.TopPrev = TopCurrent;
        });
    }
  });
})(jQuery);