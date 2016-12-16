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

    if ($('.item').hasClass($('.active')) && ($('.item .img').hasClass($('.diploma')))){
        $('.techTrack p').css("opacity", "0");
    }


});