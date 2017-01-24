//SCROLL
var nice = $("html").niceScroll();

//MENU
mobileNav = $(function() {
    var body = $("html, body"),
        wrapper = $(".wrap, .container"),
        mark = $(".mark"),
        mobileNavPanel = $(".header-menu");
        mobileNavButton = $("#menu"),

    $(function() {
        if (/ip(hone|od)|ipad/i.test(navigator.userAgent)) {
           $("body").css ("cursor", "pointer");
        }
    });
    $(document).on('click', "#menu, .mark", toggleNav);

    function toggleNav(e) {
        if (mobileNavPanel.hasClass("is-open")) {
            closeNav();
        } else {
            openNav();
        }
        e.preventDefault();
        e.stopPropagation();
    }

    function openNav() {
        body.addClass("no-scroll").removeClass("vbox-open");
        wrapper.addClass("index-pushed").after('<div class="mark"></div>');
        mobileNavPanel.addClass("is-open");
        $('.vbox-overlay').remove();
        $('.header').removeClass('header-fixed');
    }

    function closeNav() {
        body.removeClass("no-scroll");
        wrapper.removeClass("index-pushed");
        mobileNavPanel.removeClass("is-open");
        $('.mark').remove();
        $('.header-nav').removeClass('btn-active');
        $('.header').removeClass('header-fixed');
    }
});
// menu for mob
var drop = $("li.drop > a");
drop.on('click', function(event) {
    event.preventDefault();
    var thisParent = $(this).parent();
    drop.each(function() {
        $(this).parent().not(thisParent).removeClass('active');
    });
    thisParent.toggleClass('active');
});


//BTN ACTIVE
$('#menu').click(function() {
    $('.header-nav').addClass('btn-active');
    $('.header-login').removeClass('btn-active');
    $('.header-login span').removeClass('vbox-close');
    $('.header-lang').removeClass('btn-active');
    $('.header-lang span').removeClass('vbox-close');
});


// 美東時間
function show_now() {
    var mydate=new Date();
    var year=mydate.getFullYear();
    var day=mydate.getDay();
    var month=mydate.getMonth();
    var daym=mydate.getDate();
    var Hours=mydate.getHours();
    var Minutes=mydate.getMinutes();
    var Seconds=mydate.getSeconds();
    if (daym<10){
    daym="0"+daym;}
    var dayarray=new Array("SUN","MON","TUE","WED","THU","FRI","STA")
    var montharray=new Array("1","2","3","4","5","6","7","8","9","10","11","12")
    var date_div=document.getElementById("js-est-reciprocal");
    var date_str=year+"/"+montharray[month]+"/"+daym+" "+Hours+":"+Minutes+":"+Seconds
    date_div.innerHTML=date_str;

    setTimeout("show_now()",1000);
}
show_now();


//基本資料展開
$(document).ready(function(){
    $(".member-data-title").on("click", function(e){
        if($(this).parent().has(".member-data-content")) {
            e.preventDefault();
        }
        if(!$(this).hasClass("open")) {
            // hide any open menus and remove all other classes
            $(".member-data-content").slideUp(350);
            $(".member-data-title").removeClass("open");
          
            // open our new menu and add the open class
            $(this).next(".member-data-content").slideDown(350);
            $(this).addClass("open");
        }
        else if($(this).hasClass("open")) {
            $(this).removeClass("open");
            $(this).next(".member-data-content").slideUp(350);
        }
    });
});


//銀行資料切換
$(function(){
    var $block = $('.member-data-change-bank');
    $('.member-data-change-bank .tabs span')
    .click(function(){
        var $this = $(this);
        $this.add($('.content', $block).eq($this.index())).addClass('active').siblings('.active').removeClass('active');
    });
});


//純DEMO展示用

//密碼提示
$('#changePW1').click(function() {
    $('#inputDemo1').toggleClass('blue');
    $('#inputNote1').toggleClass('demo-show');
});
$('#changePW2').click(function() {
    $('#inputDemo2').toggleClass('red');
    $('#inputNote2').toggleClass('demo-show');
});
//認證信訊息切換
$('#mdEmailbtn').click(function() {
    $('#mdEmailstep1').addClass('demo-hide').removeClass('demo-show');
    $('#mdEmailstep2').addClass('demo-show').removeClass('demo-hide');
});