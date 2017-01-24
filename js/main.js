document.body.addEventListener('touchstart',function(){},false);
//SCROLL
var nice = $("html").niceScroll();

// LIGHTBOX
$('#lang').venobox();
$('#login').venobox();


//REMOVE INLINE-BLOCK NODE
$('.removeTextNodes').contents().filter(function() {
　return this.nodeType === 3;
}).remove();


//BTN ACTIVE
$('#menu').click(function() {
    $('.header-nav').addClass('btn-active');
    $('.header-login').removeClass('btn-active');
    $('.header-login span').removeClass('vbox-close');
    $('.header-lang').removeClass('btn-active');
    $('.header-lang span').removeClass('vbox-close');
});
$('#login').click(function() {
    $('.header-login').addClass('btn-active');
    $('.header-login span').addClass('vbox-close');
    $('.header-nav').removeClass('btn-active');
    $('.header-lang').removeClass('btn-active');
    $('.header-lang span').removeClass('vbox-close');
});
$('#lang').click(function() {
    $('.header-lang').addClass('btn-active');
    $('.header-lang span').addClass('vbox-close');
    $('.header-nav').removeClass('btn-active');
    $('.header-login').removeClass('btn-active');
    $('.header-login span').removeClass('vbox-close');
});




//LOGIN POPUP
( function( window ) {

'use strict';

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );





// $(function() {
//
//   $.fn.gameNavFixed = function(setting) {
//     var _o = this,
//         conf = {
//             fixedClass: 'fixed',
//             fixedTop: 0
//         };
//
//     $.extend(conf, setting);
//
//     return this.each(function() {
//         var $target = $(_o),
//             targetTop = $target.offset().top,
//             fixedTop = parseInt(conf.fixedTop, 10) || 0,
//             criticalTop = targetTop - fixedTop,
//             _docW = $(document).width();
//         $(window).scroll(function() {
//             var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop,
//                 scrollLeft = (document.documentElement && document.documentElement.scrollLeft) || document.body.scrollLeft;
//             if (scrollTop > criticalTop) {
//                 if (!$target.hasClass(conf.fixedClass)) {
//                     $target.addClass(conf.fixedClass);
//                     // if (parseInt($(window).width()) < _docW) {
//                     //     $(".game-nav").css('min-width', _docW);
//                     // }
//                 }
//                 // $target.children().css({
//                 //     left: -scrollLeft
//                 // });
//             } else {
//                 if ($target.hasClass(conf.fixedClass)) {
//                     $target.removeClass(conf.fixedClass);
//                     // $(".game-nav").css('min-width', 0);
//                 }
//             }
//         });
//         $(window).resize(function() {
//             _docW = $(document).width();
//             if ($target.hasClass(conf.fixedClass)) {
//                 if ($(window).width() < _docW) {
//                     $(".game-nav").css('min-width', _docW);
//                 } else {
//                     // $(".game-nav").css('min-width', 0);
//                 }
//             }
//         });
//     });
//   }
//   $("#page-header").gameNavFixed();
//   $(window).scroll(function() {
//     if ($("#page-header").hasClass('fixed')) {
//       $("#mainBody").addClass('fixed-header')
//     } else {
//       $("#mainBody").removeClass('fixed-header')
//     }
//   });




// });


//GO TOP
$(function(){
  var $floatDown = $(".float-btn-down");
  var $floatTop = $(".float-btn-top");

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var backPoint = $('#page-container').height() + $('#page-footer').height() -$(window).height();

    if (scroll > backPoint) {
        $floatDown.stop().hide();
        $floatTop.show();
    } else {
        $floatDown.show();
        $floatTop.stop().hide();
    }
  });

  $floatDown.click(function(){
      $("html,body").animate({
          "scrollTop": window.scrollY+400
      },1000);
      return false;
  });
  $floatTop.click(function(){
      $("html,body").animate({
          scrollTop:0
      },1000);
  });
});
