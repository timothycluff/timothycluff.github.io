/**
 * Created by Timmy_Tim_Tim on 12/10/16.
 */
$(document).ready(function() {

var topOfDiv = $('.aboutContainer').offset().top;

    $(window).scroll(function() {
        if($(window).scrollTop() > topOfDiv) {
            $('.homeText').hide();
        } else if ($(window).scrollTop() < topOfDiv) {
            $('.homeText').show();
        }
    });

    $('.listTwo .socialButtons #btnInsta').hover(
        function() {
            $('#btnInsta .btnUnderline').css("animation", "socialUnderline .8s easeOutBounce").stop(false, false);
        },
        function () {
            $(this).find("div").stop(true, true).fadeOut();
        }
    );


});