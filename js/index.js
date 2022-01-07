$(document).ready(function () {

    // Responsive Menu

    $(".small-menu").click(function () {
        $('.menu-list').toggleClass("add");
    });

    // Preloader

    $(window).on("load", function () {
        $('.preloader img').delay(2000).fadeOut();
        $('.preloader span:first-of-type').css({
            'left': '-50%'
        })
        $('.preloader span:last-of-type').css({
            'right': '-50%'

        })

    })

    // Scroll To Top

    $(window).scroll(function () {
        var scrooling = $(this).scrollTop();
        if (scrooling > 400) {
            $('.scrolltop').css({
                'right': '30px',
                'visibility': 'visible'

            });
        } else {
            $('.scrolltop').css({
                'right': '100%'
            });
        }

        if (scrooling > 300) {
            $('header').addClass('bg');
        } else {
            $('header').removeClass('bg');
        }

        $('.menu-list').removeClass("add");
    });

    $('.scrolltop').click(function () {
        $('html,body').animate({
            scrollTop: '0',
        }, 1500)
    })


    // Screenshot SLider

    $('.screenshot-image').slick({
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }, ]
    });

    // Team Slider

    $('.team-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }, ]
    });

    // Feedback image SLider


    $('.image').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.feedback-text',
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnFocus: false,
        pauseOnHover: false,
    });

    // Feedback text SLider


    $('.feedback-text').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.image',
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnFocus: false,
        pauseOnHover: false,
    });


})