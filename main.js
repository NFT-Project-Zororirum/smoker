$(document).ready(function () {
    $('.icon-menu__open').click(function () {
        $('.navbar-mobile__menu').addClass('active');
        $('.header').css('background-color', '#0d0d0d');
        $('.header').css('background-image', 'none');
        $('.icon-menu__open').css('display', 'none');
        $('.icon-menu__close').css('display', 'flex');
    });
    $('.icon-menu__close').click(function () {
        $('.navbar-mobile__menu').removeClass('active');
        $('.header').css('background-color', 'none');
        $('.header').css('background-image', 'url("image/background.png")');
        $('.icon-menu__open').css('display', 'flex');
        $('.icon-menu__close').css('display', 'none');
    });

    let marqueeWidth = $('.marquee').width();
    let marqueeTextWidth = $('.marquee-text').width();
    let animationDuration = (marqueeTextWidth + marqueeWidth) / 300;
    $('.marquee-text').css('animation-duration', animationDuration + 's');

    $('.copy-address').click(function() {
        let text = $('.contract_address').text();
        navigator.clipboard.writeText(text).then(function() {
            alert('Copied to clipboard!');
        });
    });
});
