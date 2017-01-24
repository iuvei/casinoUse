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


$('.mob-lang-btn').on('click', function (event) {
    $('.header-menu.is-open').toggleClass('is-open-lang');
    $('.lang-menu').toggleClass('active');
});
