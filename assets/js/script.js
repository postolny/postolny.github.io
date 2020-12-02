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

        var lettere = {
            '#a': 'a',
            '#b': 'bi',
            '#c': 'ci',
            '#d': 'di',
            '#e': 'e',
            '#f': 'effe',
            '#g': 'gi',
            '#h': 'acca',
            '#i': 'i',
            '#j': 'i_lunga',
            '#k': 'cappa',
            '#l': 'elle',
            '#m': 'emme',
            '#n': 'enne',
            '#o': 'o',
            '#p': 'pi',
            '#q': 'cu',
            '#r': 'erre',
            '#s': 'esse',
            '#t': 'ti',
            '#u': 'u',
            '#v': 'vu',
            '#w': 'doppia_vu',
            '#x': 'ics',
            '#y': 'ipsilon',
            '#z': 'zeta'
        };
        $('.categories a').click(function() {
            var lettereIndex = $(this).attr('href');
            var snd = new Audio('/audio/' + lettere[lettereIndex] + '.mp3');
            snd.play();
            $('html, body').delay(700).animate({
                scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
            }, "fast");
            return false;
        });

        $('.tags-anchor a').on('click', function() {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, "fast");
            return false;
        });

        $(".top").click(function() {
            $("html, body").animate({ scrollTop: 0 }, "fast");
            return false;
        });

        $('.post a:not([href^="#"').on('click', function() {
            var href = $(this).attr('href');
            window.open(href, '_blank').focus();
            return false;
        });

        $(window).on("scroll", function() {
            if ($(window).scrollTop() > 100) $('#albero').removeClass('off').addClass('tornasu', setTimeout(function() {
                $('#albero').addClass('albero');
            }, 500));
            else $('#albero').removeClass('tornasu').addClass('off').removeClass('albero');
        });

        $("#search").keyup(function() {
            var value = this.value.toLowerCase().trim();
            $(".abbreviazioni").find("tr").each(function(index) {
                var id = $(this).find("td").first().text().toLowerCase().trim();
                $(this).toggle(id.indexOf(value) !== -1);
            });
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
