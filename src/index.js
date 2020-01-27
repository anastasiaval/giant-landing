import './css/main.scss';
import './css/fonts.scss';
import './fonts/font-awesome-4.7.0/scss/font-awesome.scss';
import './js/jquery.waterwheelCarousel';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

import $ from "jquery";

require('slick-carousel');

$('.header__nav').on('click','a', function (event) {
    event.preventDefault();
    let id  = $(this).attr('href');
    let top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
});

const carousel = $('.screenshots__slider').waterwheelCarousel({
    sizeMultiplier: 1,
    opacityMultiplier: 1,
    separation: 226
});

$('.screenshots__arrow_left').on('click', () => carousel.prev());

$('.screenshots__arrow_right').on('click', () => carousel.next());

