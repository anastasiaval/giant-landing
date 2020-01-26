import './css/main.scss';
import './css/fonts.scss';
import './fonts/font-awesome-4.7.0/scss/font-awesome.scss';

import $ from "jquery";

$('.header__nav').on('click','a', function (event) {
    event.preventDefault();
    let id  = $(this).attr('href');
    let top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
});

