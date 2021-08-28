// Preloader

$(document).ready(function () {
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
        $('.menu-bg').addClass('bg');
    } else {
        $('.menu-bg').removeClass('bg');
    }
});

$('.scrolltop').click(function () {
    $('html,body').animate({
        scrollTop: '0',
    }, 1500)
})