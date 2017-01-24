//CLEAN ID
window.location.hash = '';

//GO TOP
$(function(){
    $(".btn-top-pro").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        },1000);
    });
});

//BTN
$('.pro-view').click(function() {
    $('.promotions-content').addClass('no-display');
    $('.container-slider').addClass('no-display');
    $('.footer').addClass('no-display');
    $('.pro-overlay').addClass('show-display');
    $('.btn-top-pro').addClass('fixed');
});
$('.pro-close').click(function() {
    $('.promotions-content').removeClass('no-display');
    $('.container-slider').removeClass('no-display');
    $('.footer').removeClass('no-display');
    $('.btn-top-pro').removeClass('fixed');
});