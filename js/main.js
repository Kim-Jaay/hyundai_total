$(function () {
    /////////////////////////////////////
    $('.top_close_btn').on('click', function () {
        $('.TopBanner').addClass('on');
        $('.Section01').addClass('on');
    });
    $('.main_slider').on('init reInit afterChange', function (e, s, c) {
        $('.slide_dots li').eq(c).addClass('on').siblings().removeClass('on')
    })
    $('.main_slider').slick({
        arrows: false,
    });
    $('.Section01 .slide_handler i:first-child').on('click', function () {
        $('.main_slider').slick('slickPrev');
    })
    $('.Section01 .slide_handler i:last-child').on('click', function () {
        $('.main_slider').slick('slickNext');
    })

    $('.left_slider').slick({
        arrows: false,
        asNavFor: '.right_slider',
        fade: true,
    });
    $('.right_slider').slick({
        arrows: false,

        asNavFor: '.left_slider',
        slidesToShow: 5,
    });

    $('.center_slider').on('init reInit afterChange', function (e, s, c) {
        console.log(s.slideCount);
        var current = $('.center_slider .slick-center')
        console.log(current);
        current.addClass('on').siblings().removeClass('on');
        $('.num').html((c ? c : 0) + 1 + '<span> / 0' + s.slideCount + '</span>');
        $('.content_box>div').eq(c).addClass('on').siblings().removeClass('on');
    })
    $('.center_slider').slick({
        centerPadding: '300px',
        centerMode: true,
        arrows: false,
        dots: true,
    });
    $('.Section04 .slide_handler i:first-child').on('click', function () {
        $('.center_slider').slick('slickPrev');
    })
    $('.Section04 .slide_handler i:last-child').on('click', function () {
        $('.center_slider').slick('slickNext');
    })



    $('.slide_handler i:first-child').on('click', function () {
        $('.left_slider').slick('slickPrev');
    })
    $('.slide_handler i:last-child').on('click', function () {
        $('.left_slider').slick('slickNext');
    })

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        sct > 0
            ? $('.Header').addClass('on')
            : $('.Header').removeClass('on')
    })

    /////////////////////////////////////
})